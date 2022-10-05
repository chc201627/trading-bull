import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';
import useTronLink from '../hooks/useTronLink';
// utils
import { auth } from '../api';
import { isValidToken, setSession } from '../utils/jwt';
import {Auth} from '../middleware';

// ----------------------------------------------------------------------

const initialState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
};

const handlers = {
    INITIALIZE: (state, action) => {
        const { isAuthenticated, user } = action.payload;
        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user,
        };
    },
    LOGIN: (state, action) => {
        const { user } = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user,
        };
    },
    LOGOUT: (state) => ({
        ...state,
        isAuthenticated: false,
        user: null,
    }),
    REGISTER: (state, action) => {
        const { user } = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user,
        };
    },
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const AuthContext = createContext({
    ...initialState,
    method: 'jwt',
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    register: () => Promise.resolve(),
});

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
    children: PropTypes.node,
};

function AuthProvider({ children }) {

    const { tronLinkConnect, tronSignMessage } = useTronLink();

    const [state, dispatch] = useReducer(reducer, initialState);

    const initialize = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');

            if (accessToken && isValidToken(accessToken)) {
                setSession(accessToken);

                // const response = await axios.get('/api/account/my-account');
                // const { user } = response.data;

                dispatch({
                    type: 'INITIALIZE',
                    payload: {
                        isAuthenticated: true,
                        user: {},
                    },
                });
            } else {
                dispatch({
                    type: 'INITIALIZE',
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                });
            }
        } catch (err) {
            console.error(err);
            dispatch({
                type: 'INITIALIZE',
                payload: {
                    isAuthenticated: false,
                    user: null,
                },
            });
        }
    };

    useEffect(() => {


        initialize();
    }, []);

    const login = async () => {

        // Connect Wallet
        const connectionResult = await tronLinkConnect();

        if (!connectionResult.status) {
            throw new Error(connectionResult.message);
        }

        const body = {
            address: connectionResult.address.base58,
        }

        // Sign request body
        const signatureResponse = await tronSignMessage(body);

        if (!signatureResponse.status) {
            throw new Error(signatureResponse.message);
        }

        try {
            const response = await Auth.login({ ...signatureResponse.data, ...body })
            console.log(response);
            localStorage.setItem('jwt', response.jwt);
            const { jwt, user } = response;

            setSession(jwt);

            dispatch({
                type: 'LOGIN',
                payload: {
                    user,
                },
            });
        } catch (error) {
            console.log(error)
            throw new Error(error.error ? error.error.message : error.message);
        }
    };

    const register = async (referralCode) => {

        // Connect Wallet
        const connectionResult = await tronLinkConnect();

        if (!connectionResult.status) {
            throw new Error(connectionResult.message);
        }

        const body = {
            referralCode,
            address: connectionResult.address.base58,
        }

        // Sign request body
        const signatureResponse = await tronSignMessage(body);

        if (!signatureResponse.status) {
            throw new Error(signatureResponse.message);
        }

        try {
            const response = await auth.signUp({ ...signatureResponse.data, ...body });

            console.log(response.data);

            const { jwt, user } = response.data;

            setSession(jwt);

            dispatch({
                type: 'REGISTER',
                payload: {
                    user,
                },
            });
        } catch (error) {
            throw new Error(error.error ? error.error.message : error.message);
        }
    };

    const logout = async () => {
        setSession(null);
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <AuthContext.Provider
            value={{
                ...state,
                method: 'jwt',
                login,
                logout,
                register,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };

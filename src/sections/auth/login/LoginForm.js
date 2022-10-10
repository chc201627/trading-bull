import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
// routes
// import { PATH_AUTH } from '../../../routes/paths';
// hooks
import useAuth from '../../../hooks/useAuth';
import useLocales from '../../../hooks/useLocales';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
// components
import { FormProvider } from '../../../components/hook-form';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const { login } = useAuth();

  const isMountedRef = useIsMountedRef();

  const {translate} = useLocales();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: 'demo@minimals.cc',
    password: 'demo1234',
    remember: true,
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
    } catch (error) {
      console.error(error);

      reset();

      if (isMountedRef.current) {
        setError('afterSubmit', { ...error, message: error.message });
      }
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
        {translate('login.button')}
      </LoadingButton>
    </FormProvider>
  );
}

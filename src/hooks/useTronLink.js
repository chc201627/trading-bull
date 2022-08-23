import { useEffect } from 'react';

const useTronLink = () => {

    useEffect(() => {
        window.addEventListener('message', eventHandler);

        return () => {
            window.removeEventListener('message', eventHandler);
        }
    }, []);

    const eventHandler = (e) => {
        if (e.data.message && e.data.message.action === 'setAccount') {
            console.log('setAccount event', e.data.message)
            console.log('current address:', e.data.message.data.address)

        }

        if (e.data.message && e.data.message.action === 'connect') {
            console.log('connect event', e.data.message.isTronLink)
        }

        if (e.data.message && e.data.message.action === 'disconnect') {
            console.log('disconnect event', e.data.message.isTronLink)
        }

        if (e.data.message && e.data.message.action === 'accountsChanged') {
            console.log('accountsChanged event', e.data.message)
            console.log('current address:', e.data.message.data.address)
        }
    }

    const hasTronLinkReady = () => {
        if (window.tronLink === undefined) return { status: false, message: 'TronLink Wallet is not available, please install it.' };
        return { status: true };
    };

    const tronLinkConnect = async () => {
        const tronLinkStatus = hasTronLinkReady();
        if (!tronLinkStatus.status) return tronLinkStatus;
        try {
            const tronRequest = await window.tronLink.request({ method: 'tron_requestAccounts' });
            if (!tronRequest) return { status: false, message: 'Please login to your TronLink wallet to connect.' };
            if (tronRequest.code === 200) {
                const address = window.tronLink.tronWeb.defaultAddress;
                return { status: true, message: tronRequest.message, address };
            }
            return { status: false, ...tronRequest };
        } catch (error) {
            return { status: false, message: 'Denied' };
        }
    }

    const tronSignMessage = async (messageObject) => {
        const tronLinkStatus = hasTronLinkReady();
        if (!tronLinkStatus.status) return tronLinkStatus;
        if (!window.tronLink.ready) return { status: false, message: 'TronLink is not connected' };

        const deadline = Date.now() + 60000000; // 600000 = 1 minute deadline 

        const messageString = JSON.stringify({ ...messageObject, deadline });

        try {
            const hexStr = window.tronLink.tronWeb.toHex(messageString);
            const signature = await window.tronLink.tronWeb.trx.sign(hexStr);
            return { status: true, data: {signature, deadline} };
        } catch (error) {
            return { status: false, message: error };
        }
    }

    return {
        tronLinkConnect,
        tronSignMessage,
        hasTronLinkReady,
    }
}

export default useTronLink;
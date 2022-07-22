const useTronLink = () => {

    const hasTronLinkReady = () => window.tronLink !== undefined;

    const tronLinkConnect = async () => {
        if (!hasTronLinkReady()) return { status: false, message: 'TronLink is not available, please install it.' };
        try {
            const tronRequest = await window.tronLink.request({ method: 'tron_requestAccounts' });
            if (tronRequest.code === 200) {
                const address = window.tronLink.tronWeb.defaultAddress;
                return { status: false, message: tronRequest.message, address };
            }
            return { status: false, ...tronRequest };
        } catch (error) {
            return { status: false, message: 'Denied' };
        }
    }

    const tronSignMessage = async (messageObject) => {
        if (!hasTronLinkReady()) return { status: false, message: 'TronLink is not available, please install it.' };
        if (!window.tronLink.ready) return { status: false, message: 'TronLink is not connected' };

        const deadline = Date.now() + 600000; // 1 minute deadline 

        const messageString = JSON.stringify({ ...messageObject, deadline });

        try {
            const hexStr = window.tronLink.tronWeb.toHex(messageString);
            const signature = await window.tronLink.tronWeb.trx.sign(hexStr);
            return { status: true, signature, deadline };
        } catch (error) {
            return { status: false, message: error };
        }
    }

    return {
        tronLinkConnect,
        tronSignMessage,
    }
}

export default useTronLink;
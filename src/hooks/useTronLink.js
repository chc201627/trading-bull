import { useEffect } from 'react';

const useTronLink = () => {

    const trc20USDTContractAddress = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';

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
            return { status: true, data: { signature, deadline } };
        } catch (error) {
            return { status: false, message: error };
        }
    }

    const getCurrentWalletAddress = () => {
        try {
            return window.tronWeb.defaultAddress.base58;
        } catch (error) {
            console.log(error);
            return ''
        }
    }

    const trimAddress = (address = '', charSize = 8) => `${address.slice(0, charSize)}...${address.slice(address.length - charSize, address.length)}`

    // Return BIGINT usdt balance
    const getUsdtBalance = async (address) => {
        try {
            const usdtContract = await window.tronWeb.contract().at(trc20USDTContractAddress);
            const result = await usdtContract.balanceOf(address).call();
            return { status: true, data: result };
        } catch (error) {
            return { status: false, message: error };
        }
    }

    const transferTronUSDT = async (amount, destination) => {
        console.log(amount)
        const tronLinkStatus = hasTronLinkReady();
        if (!tronLinkStatus.status) return tronLinkStatus;
        if (!window.tronLink.ready) return { status: false, message: 'TronLink is not connected' };

        try {
            const usdtContract = await window.tronWeb.contract().at(trc20USDTContractAddress);
            const result = await usdtContract.transfer(destination, window.tronWeb.toSun(amount )).send();


            return { status: true, data: result };
        } catch (error) {

            return { status: false, message: error };
        }
    }

    const getTransactionStatus = async (trxId) => {
        const transaction = await window.tronWeb.trx.getTransaction(trxId)
        console.log(transaction)
        return transaction
    }

    return {
        tronLinkConnect,
        tronSignMessage,
        hasTronLinkReady,
        getCurrentWalletAddress,
        trimAddress,
        getUsdtBalance,
        transferTronUSDT,
        getTransactionStatus
    }
}

export default useTronLink;
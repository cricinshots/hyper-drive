export const getProvider = () => {
    if ('phantom' in window) {
        const provider = window.phantom?.solana;

        if (provider?.isPhantom) {
            return provider;
        }
    }

    window.open('https://phantom.app/', '_blank');
};
const provider = getProvider(); // see "Detecting the Provider"
export const connect = async () => {
    try {
        const resp = await provider.connect();
        console.log(resp.publicKey.toString());
        return resp;
    } catch (err) {
        console.error(err);
    }
}

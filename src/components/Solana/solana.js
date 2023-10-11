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
export const connect = async (eagerly) => {
    let options = {};
    if(eagerly)
        options.onlyIfTrusted = true;
    try {
        const resp = await provider.connect(options);
        console.log(resp.publicKey.toString());
        return resp;
    } catch (err) {
        console.error(err);
    }
}


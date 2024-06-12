import { URLConstants } from '@deriv-com/utils';

const DerivIframe = () => {
    const getAllowedLocalStorageOrigin = () => {
        if (/^staging-p2p\.deriv\.com$/i.test(window.location.hostname)) {
            return 'http://staging-p2p.deriv.com';
        } else if (/^p2p\.deriv\.com$/i.test(window.location.hostname)) {
            return URLConstants.derivP2pProduction;
        }
        return URLConstants.derivP2pProduction;
    };

    const origin = getAllowedLocalStorageOrigin();

    return (
        <iframe
            id='localstorage-sync'
            sandbox='allow-same-origin allow-scripts'
            src={`${origin}/localstorage-sync.html`}
            style={{ display: 'none', visibility: 'hidden' }}
        />
    );
};

export default DerivIframe;

import copyToClipboard from 'copy-to-clipboard';
import { useCallback, useEffect, useState } from 'react';

export default function useCopyUrl(): [boolean, () => void] {
    const [hasCopied, setHasCopied] = useState(false);

    const copy = useCallback(() => {
        copyToClipboard(window.location.href);
        setHasCopied(true);
    }, [setHasCopied]);

    // Clear "Copied" after 3 seconds
    useEffect(() => {
        console.log('render useCopyUrl');
        if (!hasCopied) return;
        const timeoutId = window.setTimeout(() => setHasCopied(false), 3000);
        return () => window.clearTimeout(timeoutId);
    }, [hasCopied, setHasCopied]);

    return [hasCopied, copy];
}

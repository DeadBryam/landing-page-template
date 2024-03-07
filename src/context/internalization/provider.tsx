import { type JSX } from 'preact/jsx-runtime';

import { storagekeys } from '@/constants';
import { usePersistState } from '@/hooks';
import { Langs } from '@/langs';

import { InternalizationContext } from './context';

function InternalizationProvider({ children }: { children: JSX.Element }): any {
    const browserLanguage = navigator?.language?.split('-')?.[0]?.toLowerCase();
    const [locale, setLocale] = usePersistState<string>({
        storageKey: storagekeys.INTERNATIONALIZATION,
        initialState: browserLanguage === Langs.es ? Langs.es : Langs.en,
    });

    return (
        <InternalizationContext.Provider
            value={{
                locale,
                setLocale,
            }}
        >
            {children}
        </InternalizationContext.Provider>
    );
}

export { InternalizationProvider };

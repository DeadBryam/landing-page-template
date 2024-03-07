import { createContext } from 'preact';

import { InternalizationContextType } from '@/@types';

const InternalizationContext = createContext<InternalizationContextType>({
    locale: 'en',
    setLocale: () => {},
});

export { InternalizationContext };

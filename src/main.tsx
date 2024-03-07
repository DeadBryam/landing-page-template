import './styles/index.css';

import { render } from 'preact';
import { IntlProvider } from 'preact-i18n';

import en from '@/langs/en.json';
import es from '@/langs/es.json';

import { App } from './app';
import { InternalizationContext, InternalizationProvider } from './context';
import { Langs } from './langs';

render(
    <InternalizationProvider>
        <InternalizationContext.Consumer>
            {({ locale }) => (
                <IntlProvider definition={locale === Langs.en ? en : es}>
                    <App />
                </IntlProvider>
            )}
        </InternalizationContext.Consumer>
    </InternalizationProvider>,
    document.getElementById('app')!
);

import { h } from 'preact';
import { Route, Router } from 'preact-router';

import { Layout } from '@/layout';
import { HomePage } from '@/pages';

function App(): h.JSX.Element {
    return (
        <Layout>
            <Router>
                <Route path="/" component={HomePage} />
                <Route default component={HomePage} />
            </Router>
        </Layout>
    );
}

export { App };

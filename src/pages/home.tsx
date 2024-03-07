import { h } from 'preact';

import { Presentation } from '@/components';

function HomePage(): h.JSX.Element {
    return (
        <main className="relative overflow-hidden text-clip">
            <Presentation />
        </main>
    );
}

export { HomePage };

import { h } from 'preact';

import { classNames } from '@/utils';

import { Container } from '..';

interface Props {
    className?: string;
}

function Presentation(props: Props): h.JSX.Element {
    const { className } = props;

    return (
        <section id="presentation" className={classNames('relative z-10 items-center py-4 md:py-8 text-center', className)}>
            <Container className="relative flex size-full min-h-[90dvh] items-center justify-center">
                <p>Insert your amazing content here wink wink 😉</p>
            </Container>
        </section>
    );
}

export { Presentation };

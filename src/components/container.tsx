import React from 'preact/compat';

import { classNames } from '@/utils';

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
    id?: string;
};

function Container(props: ContainerProps) {
    const { children, className, id } = props;
    return (
        <div className={classNames('px-2 sm:px-3 md:px-8 lg:px-16 mx-auto', className, 'max-w-[1920px]')} id={id}>
            {children}
        </div>
    );
}

export { Container };

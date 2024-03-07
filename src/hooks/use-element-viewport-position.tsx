import { useSignal } from '@preact/signals';
import { useEffect } from 'preact/hooks';

interface Props {
    offset?: number;
}

/**
 * Returns the position of an element relative to the viewport.
 * @param ref The element to track.
 * @param props The options.
 *
 * @param props.offset The offset to apply to the element's position.
 * If offset is 0, the element's position will be relative to the top of the viewport.
 * If offset is between 0 and 1, the element's position will a percentage of the viewport's height.
 * If offset is greater than 1, the element's position will be relative to the top of the viewport minus the offset.
 *
 * @returns The position of the element relative to the viewport.
 *
 * @example
 * const textRef = useRef(null);
 * const { position } = useElementViewportPosition(textRef);
 *
 * const scale = useTransform(scrollY, position, [1.5, 1]);
 */
function useElementViewportPosition(ref: React.RefObject<HTMLElement>, props?: Props): { position: [number, number] } {
    const position = useSignal<[number, number]>([0, 0]);
    const { offset = 0 } = props || {};

    useEffect(() => {
        if (!ref || !ref.current) return;

        const scroll = window.scrollY || window.pageYOffset;
        const el = ref.current.getBoundingClientRect().top;

        const end = el + scroll;
        const _offset = offset > 1 ? offset : offset * window.innerHeight;

        position.value = [0, end - _offset];
    }, [ref]);

    return { position: position.value };
}

export { useElementViewportPosition };

type AnimationType = {
    initial: { [key: string]: any };
    whileInView: { [key: string]: any };
    viewport: { [key: string]: any };
    transition: { [key: string]: any };
};

type AnimationProps = {
    initial?: { [key: string]: any };
    whileInView?: { [key: string]: any };
    viewport?: { [key: string]: any };
    transition?: { [key: string]: any };
    delay?: number;
};

const defaultAnimation: AnimationType = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.9, type: 'spring', delay: 0.1 },
};

/**
 * The function `buildAnimation` constructs an animation object by merging provided properties with
 * default values.
 * @param {AnimationProps}  - - `initial`: Animation properties for the initial state
 * @returns An object of type AnimationType is being returned.
 */
const buildAnimation = ({ initial, whileInView, viewport, transition, delay }: AnimationProps): AnimationType => {
    return {
        initial: { ...defaultAnimation.initial, ...initial },
        whileInView: { ...defaultAnimation.whileInView, ...whileInView },
        viewport: { ...defaultAnimation.viewport, ...viewport },
        transition: { ...defaultAnimation.transition, ...transition, delay: delay || 0 },
    };
};

export { buildAnimation, defaultAnimation };

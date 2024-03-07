/**
 * The function `classNames` takes an array of strings or undefined values, filters out the undefined
 * values, and joins the remaining strings with a space.
 * @param classes - The `classes` parameter in the `classNames` function is a rest parameter that
 * allows you to pass in an array of strings or undefined values. The function filters out any
 * undefined values from the array and then joins the remaining strings with a space to create a single
 * string of class names.
 * @returns The `classNames` function returns a string that consists of all the truthy values from the
 * input array of strings joined together with a space.
 */
const classNames = (...classes: Array<string | undefined>): string => {
    return classes.filter(Boolean).join(' ');
};

export { classNames };

const navLinks = [
    {
        text: 'Test',
        href: '/#test',
    },
];

/**
 * The function `scrollToElement` scrolls smoothly to a specified HTML element after a delay of 300
 * milliseconds.
 * @param {HTMLElement | null} el - The `el` parameter in the `scrollToElement` function is an
 * HTMLElement or null. It represents the element that you want to scroll into view smoothly after a
 * delay of 300 milliseconds.
 */
function scrollToElement(el: HTMLElement | null) {
    setTimeout(() => {
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
}

/**
 * The function `handleLinkClick` takes an element ID and a router object, checks the router path, and
 * scrolls to the specified element if the path is '/', otherwise it pushes '/' to the router and
 * scrolls to the element.
 * @param {string} id - The `id` parameter is a string that represents the ID of the element that you
 * want to scroll to when a link is clicked.
 * @param {any} router - The `router` parameter seems to be an array containing route objects. The
 * function `handleLinkClick` checks the path of the first route object in the array and performs
 * certain actions based on its value. If the path is '/', it scrolls to a specific element. If the
 * path is not '/', it
 * @returns The function `handleLinkClick` returns nothing explicitly, as there is no `return`
 * statement in the function. However, it does have two potential exit points where it either calls
 * `scrollToElement(el)` or both `router.push('/')` and `scrollToElement(el)`.
 */
function handleLinkClick(id: string, router: any) {
    const re = new RegExp('^/#', 'g');
    const el = document.getElementById(id.replace(re, ''));

    if (router[0].path === '/') {
        scrollToElement(el);
        return;
    }

    if (!(router[0].path === '/')) {
        router.push('/');
        scrollToElement(el);
    }
}

const links = {
    navLinks,
};

export { handleLinkClick, links };

/**
 * Creates and returns a header element with navigation links.
 *
 * @param {string} siteTitle - The title of the website to display in the header.
 * @param {Array<{text: string, href: string}>} navItems - An array of navigation items, each with text and a href.
 * @returns {HTMLElement} The created header element.
 */
export function createHeader(siteTitle: string, navItems: Array<{text: string, href: string}>): HTMLElement {
    const header = document.createElement('header');
    header.className = 'bg-gray-800 text-white p-4 shadow-md dark:bg-gray-900';

    const container = document.createElement('div');
    container.className = 'container mx-auto flex justify-between items-center';

    // Site Title
    const titleElement = document.createElement('h1');
    titleElement.className = 'text-2xl font-bold';
    titleElement.textContent = siteTitle;
    container.appendChild(titleElement);

    // Navigation
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.className = 'flex space-x-4';

    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        a.className = 'hover:text-gray-300 transition-colors duration-200';
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    container.appendChild(nav);
    header.appendChild(container);

    return header;
}
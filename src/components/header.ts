import { html } from '../utils'; // Assuming html utility is in src/utils.ts

interface HeaderProps {
  siteName: string;
  navLinks: { href: string; text: string }[];
}

export function createHeader(props: HeaderProps): HTMLElement {
  const { siteName, navLinks } = props;

  const navItemsHtml = navLinks.map(link =>
    html`<li class="ml-6">
      <a href="${link.href}" class="text-gray-300 hover:text-white transition duration-300 ease-in-out">${link.text}</a>
    </li>`
  ).join('');

  const headerElement = html`
    <header class="bg-gray-800 text-white p-4 shadow-md sticky top-0 z-50">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-2xl font-bold text-white">${siteName}</div>
        <nav>
          <ul class="flex">
            ${navItemsHtml}
          </ul>
        </nav>
      </div>
    </header>
  `;

  return headerElement;
}
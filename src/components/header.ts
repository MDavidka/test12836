/**
 * @file Header Component
 * @description Reusable header/navigation component for the website.
 */

/**
 * Defines the structure for a navigation link.
 */
interface NavLink {
  label: string;
  href: string;
}

/**
 * Render the header with navigation links.
 *
 * @param {NavLink[]} links - An array of navigation links to display in the header.
 * @returns {string} - HTML string representing the header component.
 */
export function renderHeader(links: NavLink[]): string {
  return `
    <header class="bg-white shadow sticky top-0 z-10">
      <div class="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" class="text-2xl font-bold text-gray-800 hover:text-gray-600">
          My Website
        </a>
        <nav>
          <ul class="flex space-x-6">
            ${links.map(
              (link) => `
                <li>
                  <a href="${link.href}" class="text-gray-700 hover:text-blue-500 transition-colors duration-200">
                    ${link.label}
                  </a>
                </li>
              `
            ).join('')}
          </ul>
        </nav>
      </div>
    </header>
  `;
}
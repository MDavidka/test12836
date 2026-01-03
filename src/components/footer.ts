/**
 * Footer Component
 *
 * This component renders the footer section of the website.
 * It includes copyright information and links to social media or other relevant pages.
 */

/**
 * Renders the footer HTML string.
 *
 * @returns {string} The HTML string representing the footer.
 */
export function renderFooter(): string {
  return `
    <footer class="bg-gray-100 dark:bg-gray-900 py-4 mt-8 border-t border-gray-200 dark:border-gray-700">
      <div class="container mx-auto text-center text-gray-600 dark:text-gray-300">
        <p>&copy; ${new Date().getFullYear()} My Company. All rights reserved.</p>
        <p class="mt-2">
          <a href="#" class="hover:text-blue-500 dark:hover:text-blue-400 mx-2">Terms of Service</a>
          <a href="#" class="hover:text-blue-500 dark:hover:text-blue-400 mx-2">Privacy Policy</a>
        </p>
      </div>
    </footer>
  `;
}

/**
 * Attaches the footer to the DOM.
 * @param {HTMLElement} target - The element to attach the footer to.
 */
export function attachFooter(target: HTMLElement): void {
  target.innerHTML = renderFooter();
}

// Example usage (if needed for direct DOM manipulation - remove if only using renderFooter)
// const footerContainer = document.getElementById('footer-container');
// if (footerContainer) {
//   attachFooter(footerContainer);
// }
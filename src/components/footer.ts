import { getYear } from '../utils';

export function createFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'bg-gray-800 text-gray-300 py-8 px-4 sm:px-6 lg:px-8 dark:bg-gray-900 dark:text-gray-200';

  const container = document.createElement('div');
  container.className = 'max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0';

  const copyright = document.createElement('p');
  copyright.className = 'text-sm';
  copyright.innerHTML = `&copy; ${getYear()} Your Company Name. All rights reserved.`;

  const linksContainer = document.createElement('div');
  linksContainer.className = 'flex space-x-4';

  const privacyLink = document.createElement('a');
  privacyLink.href = '/privacy';
  privacyLink.className = 'text-sm hover:text-white transition-colors duration-200';
  privacyLink.textContent = 'Privacy Policy';

  const termsLink = document.createElement('a');
  termsLink.href = '/terms';
  termsLink.className = 'text-sm hover:text-white transition-colors duration-200';
  termsLink.textContent = 'Terms of Service';

  linksContainer.appendChild(privacyLink);
  linksContainer.appendChild(termsLink);

  container.appendChild(copyright);
  container.appendChild(linksContainer);

  footer.appendChild(container);

  return footer;
}
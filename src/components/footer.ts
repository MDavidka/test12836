import { getCurrentYear } from '../utils';

interface FooterProps {
  companyName: string;
  links?: { label: string; url: string }[];
}

export function createFooter(props: FooterProps): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8 dark:bg-gray-900';

  const container = document.createElement('div');
  container.className = 'max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center';

  const copyright = document.createElement('div');
  copyright.className = 'text-sm mb-4 md:mb-0';
  copyright.innerHTML = `&copy; ${getCurrentYear()} ${props.companyName}. All rights reserved.`;

  container.appendChild(copyright);

  if (props.links && props.links.length > 0) {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.className = 'flex flex-wrap justify-center md:justify-end space-x-4';

    props.links.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = link.url;
      a.textContent = link.label;
      a.className = 'hover:text-gray-300 transition-colors duration-200';
      li.appendChild(a);
      ul.appendChild(li);
    });

    nav.appendChild(ul);
    container.appendChild(nav);
  }

  footer.appendChild(container);
  return footer;
}
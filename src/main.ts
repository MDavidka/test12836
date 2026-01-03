import { createHeader } from './components/header';
import { createFooter } from './components/footer';
import { formatCurrentDate } from './utils';

document.addEventListener('DOMContentLoaded', () => {
    const appRoot = document.getElementById('app');

    if (!appRoot) {
        console.error('Root element with id "app" not found.');
        return;
    }

    // Create Header
    const header = createHeader({
        siteName: 'My Modern Site',
        navItems: [
            { text: 'Home', href: '/' },
            { text: 'About', href: '/about' },
            { text: 'Contact', href: '/contact' },
        ],
    });

    // Create Main Content Area (Placeholder)
    const mainContent = document.createElement('main');
    mainContent.className = 'flex-grow container mx-auto px-4 py-8';
    mainContent.innerHTML = `
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Welcome to My Modern Site</h1>
        <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">This is a dynamically generated page content area.</p>
        <p class="text-sm text-gray-500 dark:text-gray-400">Today's date: ${formatCurrentDate(new Date())}</p>
    `;

    // Create Footer
    const footer = createFooter({
        copyrightText: `© ${new Date().getFullYear()} My Modern Site. All rights reserved.`,
        socialLinks: [
            { platform: 'Twitter', href: '#', iconClass: 'fab fa-twitter' },
            { platform: 'LinkedIn', href: '#', iconClass: 'fab fa-linkedin' },
            { platform: 'GitHub', href: '#', iconClass: 'fab fa-github' },
        ],
    });

    // Append components to the root
    appRoot.appendChild(header);
    appRoot.appendChild(mainContent);
    appRoot.appendChild(footer);

    // Add dark mode toggle functionality (example)
    const htmlElement = document.documentElement;
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    if (themeToggleDarkIcon && themeToggleLightIcon) {
        // On page load, check local storage to apply saved theme
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                htmlElement.classList.add('dark');
                themeToggleLightIcon.classList.remove('hidden');
            } else {
                themeToggleDarkIcon.classList.remove('hidden');
            }
        } else {
            // If no theme saved, check system preference
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                htmlElement.classList.add('dark');
                themeToggleLightIcon.classList.remove('hidden');
            } else {
                themeToggleDarkIcon.classList.remove('hidden');
            }
        }

        // Add event listener for the theme toggle button
        const themeToggleBtn = document.getElementById('theme-toggle');
        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => {
                // toggle icons
                themeToggleDarkIcon.classList.toggle('hidden');
                themeToggleLightIcon.classList.toggle('hidden');

                // if set via local storage previously
                if (localStorage.getItem('color-theme')) {
                    if (localStorage.getItem('color-theme') === 'light') {
                        htmlElement.classList.add('dark');
                        localStorage.setItem('color-theme', 'dark');
                    } else {
                        htmlElement.classList.remove('dark');
                        localStorage.setItem('color-theme', 'light');
                    }
                } else {
                    // if windows is dark mode
                    if (htmlElement.classList.contains('dark')) {
                        htmlElement.classList.remove('dark');
                        localStorage.setItem('color-theme', 'light');
                    } else {
                        htmlElement.classList.add('dark');
                        localStorage.setItem('color-theme', 'dark');
                    }
                }
            });
        }
    }
});
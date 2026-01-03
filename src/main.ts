import './style.css';
import { createHeader } from './components/header';
import { createFooter } from './components/footer';
import { createMainSection } from './components/mainSection';

document.addEventListener('DOMContentLoaded', () => {
    const appElement = document.getElementById('app');

    if (!appElement) {
        console.error("Element with id 'app' not found.");
        return;
    }

    const header = createHeader();
    const mainSection = createMainSection({
        title: "Welcome to Our Modern Site",
        content: "Built with Vite, TypeScript, and Tailwind CSS for optimal performance and maintainability."
    });
    const footer = createFooter({
        copyrightText: `© ${new Date().getFullYear()} Your Company Name. All rights reserved.`
    });

    appElement.appendChild(header);
    appElement.appendChild(mainSection);
    appElement.appendChild(footer);

    // Add dark mode toggle functionality if needed
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        });

        // Initialize theme from localStorage
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        }
    }
});
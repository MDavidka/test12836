import './style.css';
import { renderHeader } from './components/header';
import { renderFooter } from './components/footer';

/**
 * Renders the main application layout, including header, content, and footer.
 */
function renderApp() {
  const appElement = document.getElementById('app');

  if (!appElement) {
    console.error('App element not found in the DOM');
    return;
  }

  const headerHTML = renderHeader();
  const footerHTML = renderFooter();

  appElement.innerHTML = `
    ${headerHTML}
    <main class="container mx-auto py-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-4">Welcome!</h1>
      <p class="text-gray-700">This is a basic website built with Vite, TypeScript, and Tailwind CSS.</p>
    </main>
    ${footerHTML}
  `;
}

// Call renderApp when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', renderApp);
import { html, render } from 'lit-html';

interface MainSectionProps {
  title: string;
  content: string;
  imageUrl?: string;
  imageAlt?: string;
}

export const createMainSection = (props: MainSectionProps) => {
  const { title, content, imageUrl, imageAlt } = props;

  const template = (title: string, content: string, imageUrl?: string, imageAlt?: string) => html`
    <main class="container mx-auto px-4 py-16 md:py-24">
      <div class="flex flex-col md:flex-row items-center gap-12">
        <div class="md:w-1/2">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            ${title}
          </h1>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            ${content}
          </p>
          <div class="flex space-x-4">
            <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out">
              Get Started
            </button>
            <button class="bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold py-3 px-6 rounded-lg border border-blue-600 dark:border-blue-400 transition duration-300 ease-in-out">
              Learn More
            </button>
          </div>
        </div>
        ${imageUrl ? html`
          <div class="md:w-1/2 mt-8 md:mt-0">
            <img 
              src="${imageUrl}" 
              alt="${imageAlt || 'Main content illustration'}" 
              class="rounded-lg shadow-xl w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        ` : ''}
      </div>
    </main>
  `;

  return template(title, content, imageUrl, imageAlt);
};

export const renderMainSection = (containerId: string, props: MainSectionProps) => {
  const container = document.getElementById(containerId);
  if (container) {
    render(createMainSection(props), container);
  } else {
    console.error(`Container element with ID "${containerId}" not found.`);
  }
};
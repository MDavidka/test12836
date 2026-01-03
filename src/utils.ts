/**
 * Formats a Date object into a human-readable string (e.g., "January 1, 2023").
 * @param date The Date object to format.
 * @returns A formatted date string.
 */
export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString(undefined, options);
}

/**
 * Fetches data from a given URL.
 * @param url The URL to fetch data from.
 * @returns A Promise that resolves with the JSON data.
 * @throws An error if the fetch operation fails or the response is not OK.
 */
export async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

/**
 * Debounces a function, ensuring it's only called after a certain delay
 * has passed without it being called again.
 * @param func The function to debounce.
 * @param delay The delay in milliseconds.
 * @returns A debounced function.
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

/**
 * Throttles a function, ensuring it's called at most once within a given time period.
 * @param func The function to throttle.
 * @param limit The time limit in milliseconds.
 * @returns A throttled function.
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  let lastFunc: ReturnType<typeof setTimeout>;
  let lastRan: number;

  return function(this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      lastRan = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

/**
 * Generates a random hexadecimal color string.
 * @returns A random hex color string (e.g., "#a3b1c4").
 */
export function getRandomHexColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
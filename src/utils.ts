/**
 * src/utils.ts
 *
 * Shared utility functions.
 */

/**
 * Formats a date string into a more readable format.
 *
 * @param dateString - The date string to format.
 * @returns A formatted date string, or "Invalid Date" if the input is invalid.
 */
export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return date.toLocaleDateString(undefined, options);
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid Date";
  }
}

/**
 * Fetches data from a given URL.  Handles basic error cases.
 *
 * @async
 * @param url - The URL to fetch data from.
 * @returns A promise that resolves to the JSON data, or null if an error occurs.
 */
export async function fetchData<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      return null;
    }
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

/**
 * Truncates a string to a specified length and adds an ellipsis if it exceeds the limit.
 *
 * @param str - The string to truncate.
 * @param maxLength - The maximum length of the string.
 * @returns The truncated string with an ellipsis if necessary.
 */
export function truncateString(str: string, maxLength: number): string {
  if (str.length <= maxLength) {
    return str;
  }
  return str.substring(0, maxLength) + "...";
}
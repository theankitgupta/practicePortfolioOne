import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility: Class Name Merger
 * --------------------------
 * Combines Tailwind CSS classes with 'clsx' logic.
 * Solves conflicts (e.g., 'px-2' vs 'px-4') using 'tailwind-merge'.
 * * @param {...(string|undefined|null|false|object)} inputs - Class lists, conditionals, or objects.
 * @returns {string} - The optimized, deduplicated class string.
 * * @example
 * cn("p-4 bg-red-500", condition && "text-white");
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
};

// src/types.ts

/**
 * Interface for navigation links.
 */
export interface NavLink {
  text: string;
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

/**
 * Props for the Header component.
 */
export interface HeaderProps {
  siteTitle: string;
  navLinks: NavLink[];
  logoUrl?: string;
}

/**
 * Props for the Footer component.
 */
export interface FooterProps {
  copyrightText: string;
  socialLinks?: NavLink[];
}

/**
 * Generic type for API responses.
 * @template T The type of the data payload.
 */
export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
}

/**
 * Example data structure for a blog post.
 */
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: Date;
  tags: string[];
}

/**
 * Type for DOM element references.
 */
export type ElementRef = HTMLElement | null;

/**
 * Type for event handler functions.
 */
export type EventHandler = (event: Event) => void;
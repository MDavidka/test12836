// src/types/index.ts

/**
 * Represents a navigation link item.
 */
export interface NavLink {
  id: string;
  label: string;
  href: string;
  external?: boolean; // Optional flag for external links
}

/**
 * Represents a social media link.
 */
export interface SocialLink {
  id: string;
  name: string;
  href: string;
  iconClass: string; // e.g., 'fab fa-twitter' for Font Awesome
}

/**
 * Represents a generic content block or card.
 */
export interface ContentBlock {
  id: string;
  title: string;
  description: string;
  imageUrl?: string; // Optional image URL
  ctaText?: string; // Optional Call to Action text
  ctaHref?: string; // Optional Call to Action link
}

/**
 * Represents a user profile or author information.
 */
export interface UserProfile {
  id: string;
  name: string;
  avatarUrl?: string;
  bio?: string;
}

/**
 * Represents a blog post or article metadata.
 */
export interface ArticleMetadata {
  id: string;
  title: string;
  slug: string; // URL-friendly identifier
  authorId: string;
  publishDate: Date;
  excerpt: string;
  tags?: string[];
}

/**
 * Represents the overall site configuration.
 */
export interface SiteConfig {
  siteTitle: string;
  siteDescription: string;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  footerText: string;
  theme: 'light' | 'dark'; // Default theme
}

/**
 * Represents a component's props for dynamic rendering.
 */
export interface ComponentProps {
  [key: string]: any; // Allows for arbitrary properties
}
/**
 * Represents the data structure for a navigation link.
 */
export interface NavLink {
  /**
   * The text displayed for the link.
   */
  label: string;
  /**
   * The URL the link points to.
   */
  href: string;
}

/**
 * Represents the properties for the Header component.
 */
export interface HeaderProps {
  /**
   * An array of navigation links to display in the header.
   */
  navLinks: NavLink[];
}

/**
 * Represents the properties for the Footer component.
 */
export interface FooterProps {
  /**
   * Text to display in the footer.
   */
  text: string;
}

/**
 * Represents a generic data object with a name and value.
 */
export interface DataItem {
  name: string;
  value: number;
}
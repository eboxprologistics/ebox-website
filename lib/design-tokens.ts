/**
 * Centralized Design Tokens
 * All design values are defined here for easy maintenance
 */

export const designTokens = {
  // Container widths
  container: {
    narrow: 'max-w-[1200px]',
    default: 'max-w-[1400px]',
    wide: 'max-w-[1600px]',
  },

  // Padding/spacing
  padding: {
    section: 'py-24 lg:py-32',
    sectionSmall: 'py-16 lg:py-24',
    container: 'px-6 lg:px-12',
    card: 'p-6 lg:p-8',
    cardLarge: 'p-10 lg:p-16',
  },

  // Typography scale
  typography: {
    // Display/Hero headings
    displayXL: 'text-5xl lg:text-7xl xl:text-8xl',
    displayLG: 'text-4xl lg:text-6xl xl:text-7xl',
    displayMD: 'text-3xl lg:text-5xl xl:text-6xl',

    // Headings
    h1: 'text-4xl lg:text-5xl xl:text-6xl',
    h2: 'text-3xl lg:text-4xl xl:text-5xl',
    h3: 'text-2xl lg:text-3xl xl:text-4xl',
    h4: 'text-xl lg:text-2xl xl:text-3xl',

    // Body text
    bodyXL: 'text-xl lg:text-2xl',
    bodyLG: 'text-lg lg:text-xl',
    bodyMD: 'text-base lg:text-lg',
    bodySM: 'text-sm lg:text-base',

    // Labels
    label: 'text-base lg:text-lg',
    labelSmall: 'text-sm lg:text-base',
  },

  // Font weights
  fontWeight: {
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  },

  // Font families
  fontFamily: {
    heading: 'font-space-grotesk',
    body: '',
  },

  // Gaps
  gap: {
    xs: 'gap-2 lg:gap-3',
    sm: 'gap-4 lg:gap-6',
    md: 'gap-6 lg:gap-8',
    lg: 'gap-8 lg:gap-12',
    xl: 'gap-12 lg:gap-16',
    xxl: 'gap-16 lg:gap-24',
    xxxl: 'gap-24 lg:gap-32',
    huge: 'gap-32 lg:gap-40',
  },

  // Border radius
  rounded: {
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-3xl',
    full: 'rounded-full',
  },

  // Transitions
  transition: {
    default: 'transition-colors duration-300',
    all: 'transition-all duration-300',
    slow: 'transition-all duration-500',
  },

  // Button sizes
  button: {
    sm: 'px-6 py-2.5 text-sm lg:text-base',
    md: 'px-8 py-4 text-base lg:text-lg',
    lg: 'px-10 py-5 text-lg lg:text-xl',
  },

  // Icon sizes
  icon: {
    sm: 'w-16 h-16 lg:w-20 lg:h-20',
    md: 'w-20 h-20 lg:w-24 lg:h-24',
    lg: 'w-24 h-24 lg:w-28 lg:h-28',
  },

  // Form inputs
  input: {
    default: 'py-3 px-4 pl-5 text-base lg:text-lg rounded-lg',
    label: 'text-base lg:text-lg font-medium mb-2 pl-5',
  },
} as const;

// Helper function to combine token classes
export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}

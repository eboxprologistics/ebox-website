# Design System Usage Guide

This document explains how to use the centralized design system to avoid hardcoded class names and make the website easier to maintain.

## Problem Solved

Previously, classes like `text-4xl lg:text-6xl xl:text-7xl` were hardcoded everywhere. To change the heading size, you'd need to update every component manually. Now, you can change it once in the design system and it applies everywhere.

## Two Approaches

### 1. CSS Utility Classes (Recommended)

Use predefined utility classes from `app/globals.css`. These are defined once and used everywhere.

#### Container Widths
```tsx
// Instead of: className="w-full max-w-[1600px] mx-auto px-6 lg:px-12"
<div className="container-wide">

// Available:
container-narrow  // max-w-[1200px]
container-default // max-w-[1400px]
container-wide    // max-w-[1600px]
```

#### Section Padding
```tsx
// Instead of: className="py-24 lg:py-32"
<section className="section-padding">

// Available:
section-padding    // py-24 lg:py-32
section-padding-sm // py-16 lg:py-24
```

#### Typography
```tsx
// Instead of: className="text-5xl lg:text-7xl xl:text-8xl font-medium font-space-grotesk..."
<h1 className="text-display-xl">

// Available Display/Hero sizes:
text-display-xl // text-5xl lg:text-7xl xl:text-8xl (largest)
text-display-lg // text-4xl lg:text-6xl xl:text-7xl
text-display-md // text-3xl lg:text-5xl xl:text-6xl

// Heading sizes:
text-heading-1 // text-4xl lg:text-5xl xl:text-6xl
text-heading-2 // text-3xl lg:text-4xl xl:text-5xl
text-heading-3 // text-2xl lg:text-3xl xl:text-4xl
text-heading-4 // text-xl lg:text-2xl xl:text-3xl

// Body text sizes:
text-body-xl // text-xl lg:text-2xl
text-body-lg // text-lg lg:text-xl
text-body-md // text-base lg:text-lg
```

#### Buttons
```tsx
// Instead of: className="rounded-full bg-primary text-white px-8 py-4..."
<button className="btn-primary">

// Available:
btn-primary   // Primary orange button
btn-secondary // Outlined button
```

#### Form Elements
```tsx
// Instead of: className="w-full py-3 px-4 pl-5 text-base lg:text-lg..."
<input className="form-input" />
<label className="form-label">

// Available:
form-input // Standardized input styling
form-label // Standardized label styling
```

#### Cards
```tsx
// Instead of: className="border border-border rounded-2xl..."
<div className="card-base">
<div className="card-interactive"> // Adds hover effect

// Available:
card-base        // Basic card with border and rounded corners
card-interactive // Card with hover effect
```

### 2. Design Tokens (For Complex Cases)

Use tokens from `lib/design-tokens.ts` when you need programmatic access or composition:

```tsx
import { designTokens, cn } from '@/lib/design-tokens';

// Use in className
<div className={designTokens.container.wide}>

// Combine multiple tokens
<h1 className={cn(
  designTokens.typography.displayXL,
  designTokens.fontFamily.heading,
  'text-black'
)}>
```

## How to Make Global Changes

### Change All Heading Sizes
Edit `app/globals.css`:
```css
.text-heading-1 {
  @apply text-5xl lg:text-6xl xl:text-7xl; /* Updated from 4xl/5xl/6xl */
}
```
All components using `text-heading-1` will automatically update.

### Change Container Width
Edit `app/globals.css`:
```css
.container-wide {
  @apply max-w-[1800px] mx-auto px-6 lg:px-12; /* Updated from 1600px */
}
```

### Change Button Styling
Edit `app/globals.css`:
```css
.btn-primary {
  @apply rounded-full bg-primary text-white px-10 py-5; /* Updated padding */
}
```

### Change Section Spacing
Edit `app/globals.css`:
```css
.section-padding {
  @apply py-32 lg:py-40; /* Updated from py-24 lg:py-32 */
}
```

## Migration Example

### Before (Hardcoded):
```tsx
<section className="py-24 lg:py-32 bg-white">
  <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12">
    <h2 className="text-4xl lg:text-6xl xl:text-7xl font-medium font-space-grotesk leading-tight tracking-tight text-black mb-6">
      What We Do
    </h2>
    <p className="text-xl lg:text-2xl text-black/60 leading-relaxed max-w-3xl mx-auto">
      Our services
    </p>
    <button className="rounded-full bg-primary text-white px-8 py-4 text-base lg:text-lg font-medium hover:bg-primary-hover">
      Click Me
    </button>
  </div>
</section>
```

### After (Design System):
```tsx
<section className="section-padding bg-white">
  <div className="container-wide">
    <h2 className="text-display-lg text-black mb-6">
      What We Do
    </h2>
    <p className="text-body-xl text-black/60 max-w-3xl mx-auto">
      Our services
    </p>
    <button className="btn-primary">
      Click Me
    </button>
  </div>
</section>
```

## Benefits

1. **Single Source of Truth**: Change typography once, applies everywhere
2. **Consistency**: All headings use the same responsive scale
3. **Maintainability**: No need to hunt through files for hardcoded values
4. **Readability**: `text-heading-1` is clearer than `text-4xl lg:text-5xl xl:text-6xl`
5. **Faster Development**: Just use `btn-primary` instead of remembering all button classes

## Complete Class Reference

See `app/globals.css` lines 315-407 for all available utility classes.
See `lib/design-tokens.ts` for all available tokens.

## Adding New Tokens

To add a new design token:

1. Add to `lib/design-tokens.ts`:
```ts
export const designTokens = {
  // ... existing tokens
  badge: {
    default: 'px-3 py-1 rounded-full text-sm',
    large: 'px-4 py-2 rounded-full text-base',
  },
}
```

2. Or add CSS utility class in `app/globals.css`:
```css
@layer utilities {
  .badge-default {
    @apply px-3 py-1 rounded-full text-sm border;
  }
}
```

3. Use in components:
```tsx
<span className="badge-default">New</span>
```

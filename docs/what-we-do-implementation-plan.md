# What We Do Page - Implementation Plan

## Overview

This document outlines the technical implementation plan for the Ebox Pro "What We Do" services page. The plan is organized into phases with clear component specifications and design patterns.

---

## Phase 1: Page Setup & Hero Section

### 1.1 Create Page Route

**File**: `/app/what-we-do/page.tsx`

```
/app/
  └── what-we-do/
      └── page.tsx
```

**Metadata:**
- Title: "What We Do | Ebox Pro Logistics"
- Description: "Comprehensive 3PL services including warehousing, fulfillment, transportation, and value-added logistics solutions across UAE & Saudi Arabia."

### 1.2 Hero Section Component

**Component**: `WhatWeDoHero.tsx`

**Structure:**
```
┌─────────────────────────────────────────────────────────┐
│  SECTION BADGE: "Our Services"                          │
│                                                         │
│  HEADLINE: "End-to-End Logistics                        │
│            Solutions That Scale"                        │
│                                                         │
│  SUBHEADLINE: Value proposition paragraph               │
│                                                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐   │
│  │ STAT 1  │  │ STAT 2  │  │ STAT 3  │  │ STAT 4  │   │
│  │ 99%+    │  │ Same-Day│  │ 2       │  │ 10K+    │   │
│  │ Accuracy│  │ Dispatch│  │ Markets │  │ Orders  │   │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘   │
│                                                         │
│  [Get a Quote]  [View Our Process]                     │
│                                                         │
│  VISUAL: Abstract logistics network / warehouse visual  │
└─────────────────────────────────────────────────────────┘
```

**Design Specs:**
- Background: Navy gradient (navy-950 → navy-900)
- Stats bar: Glass card styling with subtle borders
- Stats: Animated count-up on view
- Height: 90vh on desktop, auto on mobile

---

## Phase 2: Services Overview Section

### 2.1 Service Overview Grid

**Component**: `ServicesOverview.tsx`

**Structure:**
```
┌─────────────────────────────────────────────────────────┐
│  SECTION BADGE: "What We Do"                            │
│                                                         │
│  HEADLINE: "Comprehensive Logistics Services"           │
│  SUBHEADLINE: Brief overview paragraph                  │
│                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   [ICON]     │  │   [ICON]     │  │   [ICON]     │  │
│  │ WAREHOUSING  │  │ FULFILLMENT  │  │ TRANSPORT    │  │
│  │ Description  │  │ Description  │  │ Description  │  │
│  │ • Feature 1  │  │ • Feature 1  │  │ • Feature 1  │  │
│  │ • Feature 2  │  │ • Feature 2  │  │ • Feature 2  │  │
│  │ [Learn More] │  │ [Learn More] │  │ [Learn More] │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                         │
│  ┌──────────────┐  ┌──────────────┐                    │
│  │   [ICON]     │  │   [ICON]     │                    │
│  │ VALUE-ADDED  │  │ TECHNOLOGY   │                    │
│  │ Description  │  │ Description  │                    │
│  │ • Feature 1  │  │ • Feature 1  │                    │
│  │ • Feature 2  │  │ • Feature 2  │                    │
│  │ [Learn More] │  │ [Learn More] │                    │
│  └──────────────┘  └──────────────┘                    │
└─────────────────────────────────────────────────────────┘
```

### 2.2 Service Card Component

**Component**: `WhatWeDoServiceCard.tsx`

**Props:**
```typescript
interface WhatWeDoServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  href: string; // Anchor link to detail section
  index: number; // For stagger animation
}
```

**Design Specs:**
- Card: White background with subtle border
- Hover: Lift effect (y: -8px) + shadow enhancement
- Icon: 48x48, carrot color
- Layout: 3 columns desktop, 2 tablet, 1 mobile

---

## Phase 3: Service Detail Sections

### 3.1 Warehousing Section

**Component**: `WarehousingSection.tsx`

**Layout**: Split (Content Left | Visual Right)

```
┌─────────────────────────────────────────────────────────┐
│  ┌─────────────────────┐  ┌─────────────────────────┐  │
│  │ SECTION BADGE       │  │                         │  │
│  │ "Warehousing"       │  │   WAREHOUSE VISUAL      │  │
│  │                     │  │   (Lottie animation     │  │
│  │ HEADLINE:           │  │    or illustration)     │  │
│  │ "Strategic Storage  │  │                         │  │
│  │  Solutions"         │  │   ┌─────┐ ┌─────┐      │  │
│  │                     │  │   │10K+ │ │100K │      │  │
│  │ DESCRIPTION         │  │   │sq ft│ │sq ft│      │  │
│  │                     │  │   │min  │ │max  │      │  │
│  │ FEATURES:           │  │   └─────┘ └─────┘      │  │
│  │ ✓ Climate control   │  │                         │  │
│  │ ✓ 24/7 security     │  │   LOCATIONS:           │  │
│  │ ✓ Real-time WMS     │  │   • Dubai              │  │
│  │ ✓ Multi-client ops  │  │   • Abu Dhabi          │  │
│  │                     │  │   • Riyadh             │  │
│  │ [Get a Quote]       │  │   • Jeddah             │  │
│  └─────────────────────┘  └─────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### 3.2 Fulfillment Section

**Component**: `FulfillmentSection.tsx`

**Layout**: Full width with process visualization

```
┌─────────────────────────────────────────────────────────┐
│  SECTION BADGE: "Order Fulfillment"                     │
│                                                         │
│  HEADLINE: "Precision Fulfillment at Scale"             │
│  SUBHEADLINE: Description with key metrics              │
│                                                         │
│  STATS ROW:                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │   99%+   │  │ Same-Day │  │   B2C    │              │
│  │ Accuracy │  │ Dispatch │  │  & B2B   │              │
│  └──────────┘  └──────────┘  └──────────┘              │
│                                                         │
│  PROCESS STEPS (Enhanced ProcessSteps component):       │
│  [Receive] → [Store] → [Pick] → [Pack] → [Ship]        │
│     │          │         │        │         │          │
│  Inventory  Organized   Accurate  Branded   Fast       │
│  Check      Storage     Picking   Packaging Dispatch   │
│                                                         │
│  CAPABILITIES GRID:                                     │
│  • Multi-channel    • Kitting        • Returns         │
│  • Quality inspect  • Custom pack    • Batch tracking  │
└─────────────────────────────────────────────────────────┘
```

### 3.3 Transportation Section

**Component**: `TransportationSection.tsx`

**Layout**: Map-centric with delivery options

```
┌─────────────────────────────────────────────────────────┐
│  ┌─────────────────────┐  ┌─────────────────────────┐  │
│  │                     │  │ SECTION BADGE           │  │
│  │   UAE/KSA NETWORK   │  │ "Transportation"        │  │
│  │   MAP VISUAL        │  │                         │  │
│  │                     │  │ HEADLINE:               │  │
│  │   ● Dubai           │  │ "Reliable Last-Mile     │  │
│  │   ● Abu Dhabi       │  │  Delivery"              │  │
│  │   ● Sharjah         │  │                         │  │
│  │   ● Riyadh          │  │ DELIVERY OPTIONS:       │  │
│  │   ● Jeddah          │  │ ┌─────────────────┐    │  │
│  │                     │  │ │ Same-Day        │    │  │
│  │   Animated routes   │  │ │ Next-Day        │    │  │
│  │   and connections   │  │ │ Scheduled       │    │  │
│  │                     │  │ │ White-Glove     │    │  │
│  │                     │  │ └─────────────────┘    │  │
│  │                     │  │                         │  │
│  │                     │  │ FEATURES:               │  │
│  │                     │  │ ✓ Real-time tracking   │  │
│  │                     │  │ ✓ POD capture          │  │
│  │                     │  │ ✓ Multi-carrier        │  │
│  └─────────────────────┘  └─────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### 3.4 Technology Section

**Component**: `TechnologySection.tsx`

**Layout**: Integration showcase + dashboard preview

```
┌─────────────────────────────────────────────────────────┐
│  SECTION BADGE: "Technology"                            │
│                                                         │
│  HEADLINE: "Seamless Integration & Visibility"          │
│                                                         │
│  INTEGRATION LOGOS (Animated marquee or grid):          │
│  [Shopify] [WooCommerce] [Magento] [Amazon] [Noon]     │
│                                                         │
│  ┌─────────────────────┐  ┌─────────────────────────┐  │
│  │ FEATURES:           │  │                         │  │
│  │                     │  │   DASHBOARD MOCKUP      │  │
│  │ • Real-time         │  │   or ILLUSTRATION       │  │
│  │   dashboards        │  │                         │  │
│  │                     │  │   Shows:                │  │
│  │ • Automated         │  │   - Inventory levels    │  │
│  │   reporting         │  │   - Order status        │  │
│  │                     │  │   - Analytics           │  │
│  │ • Inventory alerts  │  │   - Alerts              │  │
│  │                     │  │                         │  │
│  │ • Custom API        │  │                         │  │
│  │   integration       │  │                         │  │
│  │                     │  │                         │  │
│  │ • Analytics &       │  │                         │  │
│  │   insights          │  │                         │  │
│  └─────────────────────┘  └─────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## Phase 4: Value-Added Services

### 4.1 Value-Added Grid

**Component**: `ValueAddedServices.tsx`

**Structure:**
```
┌─────────────────────────────────────────────────────────┐
│  SECTION BADGE: "Value-Added Services"                  │
│                                                         │
│  HEADLINE: "Beyond Standard Fulfillment"                │
│                                                         │
│  SERVICES GRID (6 items, 3x2 desktop):                 │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                 │
│  │ [Icon]  │  │ [Icon]  │  │ [Icon]  │                 │
│  │Labeling │  │Kitting  │  │Gift     │                 │
│  │         │  │         │  │Wrapping │                 │
│  └─────────┘  └─────────┘  └─────────┘                 │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                 │
│  │ [Icon]  │  │ [Icon]  │  │ [Icon]  │                 │
│  │Custom   │  │Product  │  │Quality  │                 │
│  │Packaging│  │Photos   │  │Control  │                 │
│  └─────────┘  └─────────┘  └─────────┘                 │
│                                                         │
│  [Discuss Custom Solutions]                             │
└─────────────────────────────────────────────────────────┘
```

---

## Phase 5: Social Proof & CTA

### 5.1 Trust Indicators

**Component**: `TrustSection.tsx`

**Elements:**
- Amazon SPN badge (prominent)
- Client logos marquee
- Key metrics banner
- Optional: Brief testimonial

### 5.2 Closing CTA

**Component**: Reuse `FooterCTA.tsx` or create `WhatWeDoCtA.tsx`

**Structure:**
```
┌─────────────────────────────────────────────────────────┐
│  BACKGROUND: Navy gradient                              │
│                                                         │
│  HEADLINE: "Ready to Scale Your Logistics?"             │
│                                                         │
│  SUBHEADLINE: "Let's discuss how we can help..."        │
│                                                         │
│  [Get a Custom Quote]     [Schedule a Call]             │
└─────────────────────────────────────────────────────────┘
```

---

## Component File Structure

```
/components/
  └── what-we-do/
      ├── WhatWeDoHero.tsx
      ├── ServicesOverview.tsx
      ├── WhatWeDoServiceCard.tsx
      ├── WarehousingSection.tsx
      ├── FulfillmentSection.tsx
      ├── FulfillmentProcess.tsx
      ├── TransportationSection.tsx
      ├── NetworkMap.tsx (optional - could be complex)
      ├── TechnologySection.tsx
      ├── IntegrationLogos.tsx
      ├── ValueAddedServices.tsx
      ├── TrustSection.tsx
      └── WhatWeDoCTA.tsx
```

---

## Design Token Usage

### Colors
```css
/* Hero/Dark Sections */
--background: navy-950
--text: white
--accent: carrot-500

/* Light Sections */
--background: white or base-50
--text: base-900
--accent: navy-700

/* Cards */
--background: white
--border: base-200
--hover-shadow: shadow-ebox-card
```

### Spacing
```css
/* Section Padding */
section-padding: py-16 lg:py-24

/* Between Elements */
gap-content: gap-6 lg:gap-8
gap-cards: gap-6 lg:gap-10
```

### Typography
```css
/* Section Headlines */
text-display-lg: text-3xl lg:text-4xl xl:text-5xl

/* Card Titles */
text-heading-3: text-xl lg:text-2xl

/* Body */
text-body-lg: text-base lg:text-lg
```

---

## Animation Specifications

### Scroll Animations
```typescript
// Stagger container for service cards
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

// Card entrance
const card = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
}
```

### Hover Animations (CSS Only)
```css
.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-ebox-card);
}
```

### Count-Up Animation
- Use `useInView` hook to trigger
- Animate from 0 to target number over 2 seconds
- Apply to hero stats and key metrics

---

## Responsive Breakpoints

### Desktop (lg+)
- Full layouts as designed
- 3-column grids
- Side-by-side content sections

### Tablet (md)
- 2-column grids
- Stacked content sections with visual below
- Reduced spacing

### Mobile (sm and below)
- Single column layouts
- All content stacked
- Collapsed/accordion for dense info
- Sticky CTA button

---

## Implementation Order

1. **Phase 1**: Page route + Hero (includes stats component)
2. **Phase 2**: Services Overview grid + Service cards
3. **Phase 3**: Individual service sections (warehousing → fulfillment → transport → technology)
4. **Phase 4**: Value-added services grid
5. **Phase 5**: Trust section + Closing CTA
6. **Polish**: Animations, responsive refinements, accessibility

---

## Navigation Update

Add to Header navigation:
```typescript
{
  label: "What We Do",
  href: "/what-we-do"
}
```

Consider adding sub-navigation links to specific sections:
- Warehousing
- Fulfillment
- Transportation
- Technology

---

## Testing Checklist

- [ ] All sections responsive across breakpoints
- [ ] Animations perform smoothly (60fps)
- [ ] CTAs lead to appropriate actions
- [ ] Anchor links work for in-page navigation
- [ ] Images optimized and lazy loaded
- [ ] Accessibility audit passed
- [ ] Performance metrics acceptable (LCP < 2.5s)
- [ ] SEO metadata complete

---

## Notes & Considerations

1. **Map Component Complexity**: The UAE/KSA network map could be simplified to an SVG illustration rather than a full interactive 3D globe to improve performance.

2. **Content Requirements**: Final copy needs to be provided for:
   - Hero headline and subheadline
   - Section descriptions
   - Feature bullet points
   - CTA text

3. **Asset Requirements**:
   - Service icons (Lucide or custom)
   - Warehouse/fulfillment illustrations
   - Dashboard mockup image
   - Integration platform logos

4. **Existing Component Reuse**: Leverage existing components like `ProcessSteps`, `SectionBadge`, `Button`, and `ScrollReveal` to maintain consistency and reduce development time.

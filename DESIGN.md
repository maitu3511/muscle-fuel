# Muscle Fuel Whey Protein — Design Brief

## Tone & Differentiation
Luxury fitness brand aesthetic. Minimalist, high-end visual language inspired by Apple/Nike. Bold red accents against deep black. Premium, confident, athletic.

## Palette
| Token | OKLCH | Purpose |
|-------|-------|----------|
| `--background` | 0.12 0 0 | Deep black foundation |
| `--foreground` | 0.98 0 0 | Crisp white text |
| `--card` | 0.16 0 0 | Subtle dark elevation |
| `--primary` | 0.55 0.25 45 | Bold red accents, CTAs, hero |
| `--muted` | 0.20 0 0 | Secondary surfaces |
| `--accent` | 0.55 0.25 45 | Red highlights, active states |
| `--border` | 0.22 0 0 | Subtle dividers |

## Typography
- **Display**: GeneralSans (700) — headlines, product name, hero text
- **Body**: DMSans (400/500) — product details, descriptions, UI labels
- **Mono**: GeistMono (400) — specs, technical copy

## Structural Zones
| Zone | Treatment | Purpose |
|------|-----------|----------|
| Header/Nav | bg-background, border-b border-red | Fixed top, dark with red accent |
| Hero | bg-background gradient overlay | Large protein jar image, headline, CTAs |
| Content Sections | glass-card (glass-morphism) | Product details, benefits, ingredients |
| Testimonials | glass-card style | Customer reviews, 5-star ratings |
| Footer | bg-background, border-t subtle | Links, brand info |
| Mobile CTA Bar | Fixed bottom, sticky on scroll | Buy Now + WhatsApp buttons |

## Component Patterns
- **Buttons**: Red (primary), rounded-lg, white text, full-width on mobile
- **Cards**: Glass-morphism with backdrop blur, subtle borders, hover: scale up
- **Form Inputs**: Dark bg-input, red focus ring, rounded-md
- **Badge**: Offer badge with red bg and white text in hero
- **Product Selector**: Flavor/quantity dropdowns, glass-card container

## Motion & Animation
- **Fade-in-up**: Scroll entrance for card sections (0.6s ease-out)
- **Fade-in**: Text elements on load (0.5s)
- **Slide-down**: Navigation entrance (0.4s)
- **Smooth transitions**: Button hover/active states (0.3s cubic-bezier)
- **No bounce**: Subtle, premium feel — all easing is ease-out or ease-in-out

## Responsive & Dark Mode
- **Mobile-first**: sm: 640px, md: 768px, lg: 1024px breakpoints
- **Dark mode**: Always active (no light mode toggle needed)
- **Sticky mobile bottom bar**: Fixed CTA on small screens, inline on desktop

## Anti-patterns Avoided
- No light mode (dark only, per brand direction)
- No generic purple/blue gradients (red is primary)
- No uniform rounded corners (0 for text, 12px for cards, 24px for buttons)
- No excessive spacing (premium density with breathing room)
- No bright glows (subtle glass-card borders only)

## Signature Detail
Glassmorphism cards with 0.4 opacity frosted glass effect and 10px backdrop blur. Red accent border on primary buttons for luxury gym brand prestige.

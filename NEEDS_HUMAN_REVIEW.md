# Task: copy-tone — Label inspector band as illustrative

## What needs to be done
The kitchen inspector cost band widget showing $12,000–$28,000 needs an 'illustrative AUD ballpark' label added to it.

## Why this could not be completed automatically
The file containing the kitchen inspector band widget ($12,000–$28,000) could not be identified from the available file tree. The widget may be in one of the following locations:

- `app/stages/[slug]/page.tsx`
- `app/tools/[tool]/page.tsx`
- A component file such as `components/CostBand.tsx` or similar
- `app/page.tsx`

## What to do
1. Search the codebase for the string `28,000` or `28000` or `inspector` to locate the widget
2. Find the paragraph or element that displays the `$12,000–$28,000` range
3. Add a label such as: `<span className="text-sm text-gray-500">(illustrative AUD ballpark)</span>` immediately after or below the price range
4. The price-disclaimer paragraph already exists further down the page, so this label is just a short inline note on the widget itself

## Example change
tsx
// Before
<p>$12,000–$28,000</p>

// After
<p>
  $12,000–$28,000{' '}
  <span className="text-sm text-gray-500 font-normal">(illustrative AUD ballpark)</span>
</p>


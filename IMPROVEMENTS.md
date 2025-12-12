# Performance & Scalability Improvements

This document tracks potential improvements to consider as the Chimera Comics Collective grows and traffic increases.

## Image Optimization

### eleventy-img Configuration Enhancements
Currently satisfied with image handling, but consider these as demands grow:

- **Add `outputDir`**: Make output location explicit for better deployment control
  ```javascript
  outputDir: './build/img/',
  ```

- **Add `failOnError: true`**: Catch missing/broken images at build time instead of runtime
  ```javascript
  failOnError: true,
  ```

- **Custom `transform` hook**: Apply conditional Sharp.js transformations based on image characteristics
  ```javascript
  transform: (sharp, attrs) => {
    if (attrs.width > 1000) sharp.sharpen();
    return sharp;
  },
  ```

- **Additional format considerations**: Monitor AVIF adoption vs file size gains. May want to adjust format priority.

### Image Loading Strategy
- **Responsive image breakpoints**: Review `eleventy:widths` values based on actual traffic analytics and common viewport sizes
- **Art direction**: Consider using `<picture>` elements with art direction for banner images on mobile vs desktop
- **Image preloading**: Add `<link rel="preload">` for critical above-the-fold images (splash carousel)

## Performance Monitoring

### Build Performance
- **Build time tracking**: Monitor Eleventy build times as comic count grows
- **Image processing concurrency**: v6.x auto-scales, but may need `concurrency` override on constrained build servers

### Runtime Performance
- **Core Web Vitals monitoring**: Track LCP (Largest Contentful Paint), FID (First Input Delay), CLS (Cumulative Layout Shift)
- **Real User Monitoring (RUM)**: Consider tools like Google Analytics, Cloudflare Web Analytics, or Plausible
- **Synthetic monitoring**: Lighthouse CI in deployment pipeline

## Caching & CDN

### Static Asset Caching
- **Cache headers**: Ensure proper `Cache-Control` headers for static assets (currently passthrough copies)
  - Images: `max-age=31536000, immutable`
  - CSS/JS: `max-age=31536000` with cache busting
  - HTML: `no-cache` or short TTL

### CDN Considerations
- **Image CDN**: Offload image delivery to specialized CDN (Cloudflare Images, imgix, etc.)
- **Full site CDN**: Cloudflare, Netlify, or Vercel edge caching
- **Asset fingerprinting**: Add content hashes to filenames for cache invalidation

## Code Optimization

### JavaScript
- **Bundle analysis**: Audit client-side JS bundle size (`randomtiles.js`, `togglers.js`, `randomsplash.js`)
- **Code splitting**: Split vendor/third-party code from app code
- **Module tree-shaking**: Ensure unused code is eliminated

### CSS
- **Critical CSS**: Inline critical above-the-fold CSS, defer rest
- **Unused CSS removal**: PurgeCSS or similar to remove unused styles
- **CSS minification**: Ensure CSS is minified in production builds

### Font Loading
- **Font subsetting**: Only include required character sets
- **Font preloading**: Add `<link rel="preload">` for critical fonts
- **font-display strategy**: Review `swap` vs `optional` vs `fallback`

## Data & Build Optimization

### Airtable Data Fetching
- **Build-time caching**: Cache Airtable responses to avoid rate limits and speed up rebuilds
- **Incremental builds**: Only rebuild changed comics (Eleventy's incremental build feature)
- **Data validation**: Add schema validation for Airtable data at build time

### Collection Performance
- **Lazy collections**: Consider lazy evaluation for large collections
- **Pagination**: If comic count grows significantly, paginate comic grid instead of showing all

## Accessibility & UX Performance

### Loading States
- **Skeleton screens**: Show layout skeleton while images load
- **Progressive enhancement**: Ensure core content works without JS

### Interaction Performance
- **Debouncing/throttling**: Ensure filter toggles don't cause jank with many comics
- **Virtual scrolling**: If comic grid grows to 100+ items, consider virtual scrolling

## Hosting & Deployment

### Build Optimization
- **Build caching**: Cache `node_modules` and Eleventy cache between builds
- **Parallel deployments**: Preview deployments for PRs

### Server Configuration
- **HTTP/2 or HTTP/3**: Enable for multiplexing and faster asset delivery
- **Compression**: Ensure gzip/brotli compression is enabled
- **Security headers**: Add CSP, HSTS, X-Frame-Options, etc.

## Analytics & Monitoring

### Performance Budgets
- Set and enforce budgets for:
  - Total page weight
  - JavaScript bundle size
  - Largest image size
  - Time to Interactive (TTI)

### Error Tracking
- **Client-side errors**: Sentry, Rollbar, or similar
- **Build-time errors**: Alert on failed builds or image processing errors

## Future Considerations

### Progressive Web App (PWA)
- **Service worker**: Offline support for previously visited pages
- **App manifest**: Allow users to "install" the webring

### Search & Discovery
- **Client-side search**: Add Lunr.js or Pagefind for fast client-side search
- **Search indexing**: Ensure proper meta tags and structured data for SEO

### Internationalization
- If expanding beyond English-speaking comics:
  - i18n support in Eleventy
  - Language-specific image variants

---

**Last Updated**: 2025-12-12
**Current Status**: Site performance is good; these are proactive optimizations for future growth

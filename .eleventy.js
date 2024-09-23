import { DateTime } from 'luxon';
import pluginSEO from 'eleventy-plugin-seo';
import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';
import {} from 'dotenv/config';

/**
 * This is the JavaScript code that determines the config for your Eleventy site
 *
 * You can add lost of customization here to define how the site builds your content
 * Try extending it to suit your needs!
 */

export default function (eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    // Templates:
    'html',
    'njk',
    'md',
    // Static Assets:
    'js',
    'css',
    'jpeg',
    'jpg',
    'png',
    'svg',
    'woff',
    'woff2',
  ]);
  eleventyConfig.addPassthroughCopy('public');
  eleventyConfig.addPassthroughCopy('img');

  /* From: https://github.com/artstorm/eleventy-plugin-seo
  
  Adds SEO settings to the top of all pages
  The "glitch-default" bit allows someone to set the url in seo.json while
  still letting it have a proper glitch.me address via PROJECT_DOMAIN
  */
  const seo = {
    title: 'Chimera Comics Collective: A comic webring',
    description: 'A webring, for webcomics',
    url: 'https://chimeracollective.org',
    image: 'https://chimeracollective.org/img/thechimera.png',
    robots: 'index,follow',
    author: 'Chimera Comics Collective',

    'og:title': 'Chimera Comics Collective',
    'og:type': 'webring',
    'og:url': 'https://chimeracollective.org',
    'og:description': 'A collective webring, for comics',
    'og:image': 'https://chimeracollective.org/img/thechimera.png',

    'twitter:card': 'Chimera Comics Collective',
    'twitter:url': 'https://chimeracollective.org',
    'twitter:title': 'Chimera Comics Collective',
    'twitter:description': 'A collective webring, for comics',
    'twitter:image': 'https://chimeracollective.org/img/thechimera.png',
  };

  eleventyConfig.addPlugin(pluginSEO, seo);

  // Filters let you modify the content https://www.11ty.dev/docs/filters/
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc',
    }).toFormat('yyyy-LL-dd');
  });

  eleventyConfig.setBrowserSyncConfig({
    ghostMode: false,
  });

  eleventyConfig.addCollection('comics', function (collection) {
    const coll = collection.getFilteredByTag('comics');
    return coll;
  });

  eleventyConfig.addCollection('promos', function (collection) {
    const coll = collection.getFilteredByTag('promos');
    return coll;
  });

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // which file extensions to process
    extensions: 'html',
    // optional, output image formats
    formats: ['avif', 'webp', 'jpeg'],
    // optional, output image widths
    widths: ['auto'],
    // optional, attributes assigned on <img> override these values.

    urlPath: '/img/',

    defaultAttributes: {
      loading: 'lazy',
      decoding: 'async',
    },
  });

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: 'build',
    },
  };
}

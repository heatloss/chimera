import { DateTime } from 'luxon';
import pluginSEO from 'eleventy-plugin-seo';
import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';
import {} from 'dotenv/config';
import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';

/**
 * This is the JavaScript code that determines the config for your Eleventy site
 *
 * You can add lost of customization here to define how the site builds your content
 * Try extending it to suit your needs!
 */

export default function(eleventyConfig) {
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
  eleventyConfig.addPassthroughCopy('src/img');

  const markdownLib = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItAttrs).disable('code');
  
  eleventyConfig.setLibrary('md', markdownLib);

  const seo = {
    title: 'Chimera Comics Collective',
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

  /* From: https://github.com/artstorm/eleventy-plugin-seo */
  eleventyConfig.addPlugin(pluginSEO, seo);

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc',
    }).toFormat('yyyy-LL-dd');
  });

  eleventyConfig.addFilter('addWBR', (string) => {
    let newString = string.toLowerCase();
    newString = newString.replace('crowdfund', 'crowd<wbr/>fund');
    newString = newString.replace('kickstart', 'kick<wbr/>start');
    return newString;
  });

  eleventyConfig.addFilter('toDDFromTitle', function(titles, arr, attr) {
    if (typeof titles === 'string') {
      const found = arr.find((item) => item.data.title === titles);
      if (!found) {
        throw new Error(`Could not find comic with title: "${titles}". Available titles: ${arr.map(item => item.data.title).join(', ')}`);
      }
      const titleURL = found['url'];
      return `<dd><a href="${titleURL}" target="_blank"><span class="link">${titles}<span></a></dd>`;
    } else {
      return titles
        .map((title) => {
          const found = arr.find((item) => item.data.title === title);
          if (!found) {
            throw new Error(`Could not find comic with title: "${title}". Available titles: ${arr.map(item => item.data.title).join(', ')}`);
          }
          const titleURL = found['url'];
          return `<dd><a href="${titleURL}" target="_blank"><span class="link">${title}<span></a></dd>`;
        })
        .join('');
    }
  });

  eleventyConfig.addFilter('getUrlFromTitle', function(title, arr, attr) {
    const found = arr.find((item) => item.data.title === title);
    if (!found) {
      throw new Error(`Could not find comic with title: "${title}". Available titles: ${arr.map(item => item.data.title).join(', ')}`);
    }
    return found['url'];
  });

  eleventyConfig.addFilter('getCreditsFromTitle', function(title, arr, attr) {
    const found = arr.find((item) => item.data.title === title);
    if (!found) {
      throw new Error(`Could not find comic with title: "${title}". Available titles: ${arr.map(item => item.data.title).join(', ')}`);
    }
    return found.data['credits'];
  });

  eleventyConfig.addFilter('toStringsArray', function(arr) {
    return arr.map((item) => `"${item}",`);
  });

  eleventyConfig.addFilter('toDD', function(list) {
    const URLize = (string) => {
      try {
        new URL(string);
        return `<a href="${string}" target="_blank"><span class="link">${string}<span></a>`;
      } catch (e) {
        return string;
      }
    };
    return typeof list === 'string' ?
      `<dd>${URLize(list)}</dd>` :
      list
      .map((item) => {
        return `<dd>${URLize(item)}</dd>`;
      })
      .join('');
  });

  eleventyConfig.setBrowserSyncConfig({
    ghostMode: false,
  });

  eleventyConfig.addCollection('comics', (collection) => {
    const coll = collection
      .getFilteredByTag('comics')
      .sort((a, b) => a.data.title.localeCompare(b.data.title));
    return coll;
  });

  eleventyConfig.addCollection('splash', (collection) => {
    const coll = collection
      .getFilteredByTag('splash')
      .sort(() => 0.5 - Math.random());
    return coll;
  });

  eleventyConfig.addCollection('genres', (collection) => {
    const allComics = collection.getFilteredByTag('comics');
    let tagSet = new Set();
    allComics.forEach((comic) => {
      if ('genre' in comic.data) {
        for (const tag of comic.data.genre) {
          tagSet.add(tag);
        }
      }
    });
    return [...tagSet];
  });

  eleventyConfig.addCollection('generalTags', (collection) => {
    const allComics = collection.getFilteredByTag('comics');
    let tagSet = new Set();
    allComics.forEach((comic) => {
      if ('general_tags' in comic.data) {
        for (const tag of comic.data.general_tags) {
          tagSet.add(tag);
        }
      }
    });
    return [...tagSet];
  });

  eleventyConfig.addCollection('statuses', (collection) => {
    const allComics = collection.getFilteredByTag('comics');
    let tagSet = new Set();
    allComics.forEach((comic) => {
      if ('update_status' in comic.data) {
        tagSet.add(comic.data.update_status);
      }
    });
    return [...tagSet];
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
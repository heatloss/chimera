import { DateTime } from 'luxon';
import pluginSEO from 'eleventy-plugin-seo';
import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';

/**
 * This is the JavaScript code that determines the config for your Eleventy site
 *
 * You can add lost of customization here to define how the site builds your content
 * Try extending it to suit your needs!
 */

export default function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    // Templates:
    "html",
    "njk",
    "md",
    // Static Assets:
    "css",
    "jpeg",
    "jpg",
    "png",
    "svg",
    "woff",
    "woff2"
  ]);
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy("img");

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // which file extensions to process
    extensions: 'html',
    // optional, output image formats
    formats: ['avif', 'webp', 'jpeg'],
    // optional, output image widths
    widths: ['auto'],
    // optional, attributes assigned on <img> override these values.

    urlPath: "/img/",

    defaultAttributes: {
      loading: 'lazy',
      decoding: 'async',
    },
  });

  /* From: https://github.com/artstorm/eleventy-plugin-seo
  
  Adds SEO settings to the top of all pages
  The "glitch-default" bit allows someone to set the url in seo.json while
  still letting it have a proper glitch.me address via PROJECT_DOMAIN
  */
  const seo = {
    "title": "Hit Bricks: A comic webring",
    "description": "A webring, for webcomics",
    "url": "https://hit-bricks.pages.dev",
    "image": "https://hit-bricks.pages.dev/img/logo-text.png",
    "robots": "index,follow",
    "author": "Chimera Collective",

    "og:title": "Hit Bricks: A Comics Webring",
    "og:type": "webring",
    "og:url": "https://hit-bricks.pages.dev",
    "og:description": "A webring, for webcomics",
    "og:image": "https://hit-bricks.pages.dev/img/logo-text.png",

    "twitter:card": "Hit Bricks: A Comics Webring",
    "twitter:url": "https://hit-bricks.pages.dev",
    "twitter:title": "Hit Bricks: A Comics Webring",
    "twitter:description": "A webring, for webcomics",
    "twitter:image": "https://hit-bricks.pages.dev/img/logo-text.png"
  }

  eleventyConfig.addPlugin(pluginSEO, seo);

  // Filters let you modify the content https://www.11ty.dev/docs/filters/
  eleventyConfig.addFilter("htmlDateString", dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: "utc"
    }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.setBrowserSyncConfig({
    ghostMode: false
  });

  /* Build the collection of posts to list in the site
     - Read the Next Steps post to learn how to extend this
  */
  eleventyConfig.addCollection("comics", function(collection) {

    /* The posts collection includes all posts that list 'posts' in the front matter 'tags'
       - https://www.11ty.dev/docs/collections/
    */

    // EDIT HERE WITH THE CODE FROM THE NEXT STEPS PAGE TO REVERSE CHRONOLOGICAL ORDER
    // (inspired by https://github.com/11ty/eleventy/issues/898#issuecomment-581738415)
    const coll = collection
      .getFilteredByTag("comics");

    // From: https://github.com/11ty/eleventy/issues/529#issuecomment-568257426 
    // Adds {{ prevPost.url }} {{ prevPost.data.title }}, etc, to our njks templates
    for (let i = 0; i < coll.length; i++) {
      const prevPost = coll[i - 1];
      const nextPost = coll[i + 1];

      coll[i].data["prevPost"] = prevPost;
      coll[i].data["nextPost"] = nextPost;
    }

    return coll;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "build"
    }
  };
};
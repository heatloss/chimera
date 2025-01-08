# Hello Eleventy!

This project is a blog powered by [Eleventy](https://www.11ty.dev/), a lightweight static site generator. That means you get all the power of a server-side framework but it builds plain HTML files for fast loading by your visitors. This project includes some default posts and layouts you can use as a foundation, and you can customize how your site builds in the JavaScript code. 📚

_While you're working on the content in the editor your changes will happen ✨ immediately in the preview window. As you code the site is serving files from a local build directory. When you close the editor your site will run a `build` script then serve the output as a fast and always-on static site._

_Last updated: 14 August 2023_

## Prerequisites

You'll get best use out of this project if you're familiar with basic HTML and JavaScript. This is a static site, which means the server builds it using the content of the `src` folder, then is able to serve it to your users quickly. The posts are in Markdown, which is similar to HTML (markup) but with a lot less syntax!

## What's in this project?

← `README.md`: That’s this file, where you can tell people what your cool website does and how you built it.

← `public/style.css`: The styling rules for your pages and posts.

← `.eleventy.js`: Here you can configure how Eleventy builds your content into the site. Read through the initial blog posts in the site for steps on extending this code.

← `package.json`: Your project's dependencies, where you will also find the start command to run eleventy. 

← `src/`: This folder contains all the files Eleventy will use to build your site.

### Working in the `src/` folder 📁

← `index.md`, `about.md`, `resources.md`: These Markdown files include the content for your Home, About, and Resources pages.

← `comics/`: These are the Markdown files for the comics that make up your blog–you can add new pages here and remove any you don't want. Each one includes front matter that Eleventy uses to build the content into the site, passing the data into the template referenced as `layout` at the top of the file.

← `_includes/layouts/`: This is where all of your page level layouts go. The **\_** tells you that this is an _eleventy only_ folder. Each layout uses [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) to build the page or post data into an HTML page. There is one base layout that all others extend.

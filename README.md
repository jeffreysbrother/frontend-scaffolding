note: updated repository can be found [here](https://bitbucket.org/jeffreysbrother/frontend-scaffolding)

##What is This?##

The master branch of this repository is scaffolding for static HTML projects. It assumes the use of Sass and Grunt, and allows for Sass compilation, the minification of images/JavaScript/CSS/HTML, HTML processing, and the removal of unused CSS rules.

##Requirements##

* [Node](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [Grunt-cli](http://gruntjs.com/getting-started)

##What's included?##

* Basic HTML scaffolding
* Bootstrap CSS (including additional theme and JS) CDN
* Simple file structure:
  * `src/` (development directory)
  * `dist/` (compiled and minified assets generated from `src/`)
* .gitignore
* package.json
* pre-configured Gruntfile.js
  * grunt
  * grunt-newer
  * grunt-contrib-sass
  * grunt-contrib-watch
  * grunt-contrib-imagemin
  * grunt-contrib-uglify
  * grunt-contrib-cssmin
  * grunt-contrib-htmlmin
  * grunt-uncss
  * grunt-processhtml (this will not run by default, however)
  
##The SRC/ Directory##

As implied earlier, development will take place ONLY in the `src/` directory. We should NEVER manually update the contents of `dist/`.

Sass partials (prefixed with an underscore) will be imported into main.scss, which will then be compiled to CSS. So, if a page-specfic Sass partial is added, we must manually add an `@import` rule to main.scss.

If additional JavaScript files are added and referenced in the HTML file, we will need to use the processhtml Grunt plugin and associated markup flags to update the script tags. Please go [here](https://github.com/dciccale/grunt-processhtml) for more details.

##What to do##

1. Clone this repo
2. Update `package.json` file if desired (name, license, author, etc.)
3. Run `npm install` to install all dev dependencies

##Development Details##

Running `grunt prep` will run all tasks and generate the `dist/` directory. We also have the option of running grunt tasks individually. For example, if in the beginning stages of development, we wish to generate minified images, we can run `grunt imagemin`. Keep in mind that `grunt prep` will not run trigger the "watch" task; the same is true if we run any grunt task by itself.

In order to begin development, run `grunt watch`. This will run a different set of tasks depending on which directory undergoes modification. For example, adding an image to `src/img/` will trigger imagemin, while making an update to an scss file will trigger sass, uncss, and cssmin. In theory, this will save time by running only the tasks that are necessary, given the nature of the current modification.

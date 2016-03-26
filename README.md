##What to do##

1. Clone this repo
2. Update `package.json` file if desired (name, license, author, etc.)
3. Run `npm install` to install all dev dependencies
4. Install additional grunt plugins if necessary

##What's included?##

* Basic HTML scaffolding
* normalize.css CDN
* Bootstrap CSS (including additional theme and JS) CDN
* Simple file structure:
  * `dev/` [development directory for Sass and JS assets]
  * `dist/` [compiled and minified assets]
  * `img/` [image assets]
* .gitignore
* package.json
* pre-configured Gruntfile.js
  * grunt
  * grunt-contrib-sass
  * grunt-contrib-watch

##Development Details##

* The `dev/` and `dist/` directories exclude HTML and image assets, so they are not standalone directories. The purpose of this is to make a distinction between ASSETS, not between different stages of complete code bases. I've done this for a few reasons.

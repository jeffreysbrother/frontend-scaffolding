##What to do##

1. Clone this repo
2. Update `package.json` file if desired (name, license, author, etc.)
3. Run `npm install` to install all dev dependencies
4. Install additional grunt plugins if necessary

##What's included?##

* Basic HTML scaffolding
* Bootstrap CSS (including additional theme and JS) CDN
* Simple file structure:
  * `src/` (development directory)
  * `dist/` (compiled and minified assets)
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
  
##Organization##



##Development Details##

In order to begin development, run `grunt watch`. This will run a different set of tasks depending on which directory undergoes modification. For example, adding an image to `src/img/` will trigger imagemin, while making an update to an scss file will trigger sass, uncss, and cssmin. In theory, this will save time by running only the tasks that are necessary, given the nature of the current modification.

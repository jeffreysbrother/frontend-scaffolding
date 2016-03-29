##How to use grunt-contrib-imagemin##

1. Clone this repo
2. Update `package.json` file if desired (name, license, author, etc.)
3. Run `npm install` to install all dev dependencies
4. Place all image assets (jpg, png, or gif) in the `src/` directory.
5. Run `grunt imagemin` to generate minified images into `dist/` (`grunt watch` can also be used if you want Grunt to watch for changes: only new image assets will be compressed)

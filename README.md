The goal: Create a responsive website for a local carpet-cleaning business based on client input and design preferences. 

Gulp:
Transforms SASS into CSS, with autoprefixer and cssnano to minimize the file; Refactors images for different screens; Transforms ES6 code into ES5 with Babel; Watches for changes to reload browser;

CSS:
Built with a preprocessor, normalized and optimized for all browsers. Uses flexbox, SASS mixins and variables to keep the appearance of all pages/elements.

Javascript:
Mostly used to add visual appeal to the page with a responsive toggle navbar,jQuery slideshow animation, scroll animations with IntersectionObserver and calculator for the services offered.

Other: Using SVGs to reduce external assets and allow faster loading with fewer kbs wasted.

The challenge(s):
As a large project, it required a lot of research and troubleshooting different tools such as various NPM packages, Gulp, etc. Making sure the site works well with different devices, reduce load times, especially on mobile devices.

#This is a work in progress.

devDependencies: {
    "@babel/core": "^7.14.5",
    "@babel/preset-env": "^7.14.5",
    "browser-sync": "^2.26.14",
    "cssnano": "^5.0.6",
    "gulp": "^4.0.2",
    "gulp-autoprefixer": "^8.0.0",
    "gulp-babel": "^8.0.0",
    "gulp-dart-sass": "^1.0.2",
    "gulp-postcss": "^9.0.0",
    "gulp-rename": "^2.0.0",
    "gulp-sass": "^4.1.0",
    "gulp-terser": "^2.0.1",
    "node-sass": "^6.0.0"
}
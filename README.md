# whypl

> A Vue.js dashboard that delivers a concise history of the Indian Premier League for those new to the game

## Frameworks and Libraries
* Vue CLI, and thus :
    * Webpack
* [vue-chartjs](http://vue-chartjs.org/#/) : A Vue wrapper for the excellent chart-creation library for Javascript : Chart.js
* [vue-chartkick](https://www.chartkick.com/vue) - Vue component to use Google Maps Geochart visualisations
* d3.js : To query the provided CSV data and create concise, formatted data to be plugged into the charting libraries

## Bonus Points
* __Vue.js__
The web app has been created using Vue.js; specifically using the Vue CLI which made it easier to scaffold a single page application, run it using development and build for production. A pre-included Webpack configuration made it very convenient to leverage its features and additional plugins.

*  __Page-load optimisation__
Although the page load times are satisfactory on strong network connections, a number of options were explored to enhance the page load times on 2G connections. These included :

    * **Lazy loading**
        * Except the component selected by default, all components, instead of being imported by default, are called using the **import()** functionality provided in a Vue + Webpack application that loads a component only when it is required
        * For instance,
           ```javascript
          'panindiaPanel' : () => import('./PanIndiaPanel.vue')
          ```

    * Serving all Javascript and CSS files as **Minified** and **GZipped** files
        * Minification is performed by the **UglifyJS** Webpack plugin already included in the structure of a Vue CLI application
        * Support for GZip files is also included by default in a Vue CLI + Webpack app, however it is turned off. Turning it on required adding **additional middleware in the Express.js server.js file** to handle files served with .gz extensions, like so
            ```javascript
            app.get('*.js', function (req, res, next) {
                req.url = req.url + '.gz';
                res.set('Content-Type', 'application/javascript'),
                res.set('Content-Encoding', 'gzip');
                next();
            });
            ```
    * **Reducing the size of the Webpack bundles**, using the Webpack-Bundle-Analyzer plugin to identify redundant files being included in the build .js files

* __Responsive__

    * __Bootstrap v4__ : The primary aim was to create a design that worked equally well on mobile applications and larger devices. Bootstrap's grid functionality worked well largely, with two rows of cards wrapping on smaller width devices to create a vertical scrolling interfaces.

    * A few edge cases required the writing of **media queries**. For instance, for the Google Maps Geo Charts based card.
        ```css
         @media (max-width: 768px)
        {
            .geo {
            margin-top: 0;
            }
        }
        ```

* __Progressive Web App__

    * **Workbox**
    The Workbox Webpack Plugin provided included support for  for service worker registration and precaching Webpack build files for any Webpack based application

    * **Noscript**
    A filler warning-text was served in case of Javascript being disabled

    * **Offline**
    Following the first page load, precaching and service worker registration allows the page to continue to work in the absence of internet connectivity

## Lighthouse Audit ##
 ![Light House Audit](https://i.imgur.com/RhA6COL.png)

    * **Performance** :  A major error has been including all of Bootstrap's CSS and Javascript, which despite being minified and GZipped, signiciantly adds to First-Paint time. This could have been avoided using inlining these certain portions of critical CSS.
    * **PWA** :  Lighthouse has penalised the app for not providing for a custom splash screen, header bar not matching brand colours, and not including a prompt to 'Add to Home Screen'.


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

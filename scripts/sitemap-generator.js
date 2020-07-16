

import { sitemapBuilder as buildSitemap } from 'react-router-sitemap';
import path from 'path'; // add path which will be needed for file write
import fs from 'fs'; // import file system object
import routes from '../src/variables/routes/index.js';

// let routes = require("../src/variables/routes/index.js");

let localizedRoutes = [];
routes.forEach(element => {
    localizedRoutes.push({path: '/en/' + element.path})
    localizedRoutes.push({path: '/lv/' + element.path})
});

console.log(routes)
console.log(localizedRoutes)


// use your website root address here. Optimally you can
// include dev and production enviorenments with variable
const hostname = 'https://andrisberzkalns.netlify.app/';

// define our destination folder and sitemap file name
const dest = path.resolve('./public', 'sitemap.xml');

// Generate sitemap and return Sitemap instance
const sitemap = buildSitemap(hostname, routes);

// write sitemap.xml file in /public folder
// Access the sitemap content by converting it with .toString() method
fs.writeFileSync(dest, sitemap.toString())
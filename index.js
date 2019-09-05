
/**
 * This is the entry file that `speedrun` will use.
 *
 * It uses ES6 modules and a template literal.
 * Try exploring the file that hits the browser and see that both of these
 * things get transpiled for you.
 */

import { isWebGL } from './main'

const el = document.createElement('h1')
document.body.appendChild(el)

el.innerHTML = `This environment supports ${isWebGL()} rendering`

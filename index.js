
/**
 *
 */

import { isWebGL } from './main'

const el = document.createElement('h1')
document.body.appendChild(el)

el.innerHTML = `This environment supports ${isWebGL()} rendering`

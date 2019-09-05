
/**
 * This file uses ES6 modules to gain access to pixi.
 */

import { utils } from 'pixi.js'

export const isWebGL = () => {
  return utils.isWebGLSupported()
    ? 'webGL'
    : 'canvas'
}

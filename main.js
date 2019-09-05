
/**
 *
 */

import { utils } from 'pixi.js'

export const isWebGL = () => {
  return utils.isWebGLSupported()
    ? 'webGL'
    : 'canvas'
}

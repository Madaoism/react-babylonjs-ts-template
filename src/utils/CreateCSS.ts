import jss, { StyleSheetFactoryOptions } from 'jss'
import preset from 'jss-preset-default'

const jssWithPreset = jss.setup(preset())
const createCSS = (styles: Record<string,any>, options?: StyleSheetFactoryOptions) => {
  return jssWithPreset.createStyleSheet(styles, options).attach().classes;
}

export { jssWithPreset as jss, createCSS }
export default createCSS

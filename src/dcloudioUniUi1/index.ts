import { getComponentsMap, getPropsMap } from './mapping'
// import directives from '../directives.json'

export function dcloudioUniUi1() {
  return {
    uiName: '@dcloudio/uni-ui1',
    lib: '@dcloudio/uni-ui',
    map: getPropsMap(),
  }
}

export function dcloudioUniUi1Components() {
  return {
    map: getComponentsMap(),
    isSeperatorByHyphen: true,
    prefix: 'uni',
    isReact: false,
    lib: '@dcloudio/uni-ui',
    // directives: directives.dcloudioUniUi1,
  }
}

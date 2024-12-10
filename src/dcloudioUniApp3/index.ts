import { getComponentsMap, getPropsMap } from './mapping'
// import directives from '../directives.json'

export function dcloudioUniApp3() {
  return {
    uiName: '@dcloudio/uni-app',
    lib: '@dcloudio/uni-app',
    map: getPropsMap(),
  }
}

export function dcloudioUniApp3Components() {
  return {
    map: getComponentsMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    isReact: false,
    lib: '@dcloudio/uni-app',
    // directives: directives.dcloudioUniApp3,
  }
}

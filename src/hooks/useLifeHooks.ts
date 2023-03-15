import { useEffect } from 'react'

/**
 * @description en component mount hook
 * @description zh 组件挂载后触发的生命周期钩子
 * @param callBack Function
 */
export const useMount = (callBack: Function) => {
  useEffect(() => {
    callBack?.()
  },[])
}

/**
 * @description en component unMount hook
 * @description zh 组件卸载后触发的生命周期钩子
 * @param callBack Function
 */
export const useUnMount = (callBack: Function) => {
  useEffect(() => {
    return () => {
      callBack?.()
     }
  }, [])
}
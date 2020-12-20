import { EffectCallback, DependencyList, useRef } from "react"
import { useEffectType } from "../types"

export const createSubsequentEffect = (useEffect: useEffectType) => {
  return (effect: EffectCallback, deps?: DependencyList) => {
    const isSubsequent = useRef(false)

    useEffect((...args) => {
      if (isSubsequent.current) {
        return effect(...args)
      } else {
        isSubsequent.current = true
      }
    }, deps)
  }
}

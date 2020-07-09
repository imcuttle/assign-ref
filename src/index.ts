/**
 * assign ref for React ref
 * @author imcuttle
 */
import { Ref, RefObject } from 'react'

export default function assignRef<T = any>(registerRef: Ref<T>, refInstance: T | null) {
  if (!registerRef) {
    return
  }
  if (typeof registerRef === 'function') {
    registerRef(refInstance)
  }

  registerRef = registerRef as RefObject<T>
  if (registerRef && registerRef.hasOwnProperty('current')) {
    // @ts-ignore
    registerRef.current = refInstance
  }
}

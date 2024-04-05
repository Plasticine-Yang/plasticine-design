import { CLASS_NAME_PREFIX } from './constants'

export function getClassNameWithPrefix(className: string) {
  return `${CLASS_NAME_PREFIX}-${className}`
}

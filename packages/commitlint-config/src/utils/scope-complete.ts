import { gitStatus } from './git-status'

/**
 * @description match modified scope
 */
const scopeComplete = gitStatus
  .find((r) => ~r.indexOf('M  packages'))
  ?.replace(/\//g, '%%')
  ?.match(/packages%%((\w|-)*)/)?.[1]

export { scopeComplete }

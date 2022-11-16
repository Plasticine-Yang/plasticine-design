import { execSync } from 'child_process'

/**
 * @description parse git status to array
 */
const gitStatus = execSync('git status --porcelain || true')
  .toString()
  .trim()
  .split('\n')

export { gitStatus }

import type { UserConfig } from 'cz-git'

import { scopes } from './scopes'
import { types, czgTypesAppend as typesAppend } from './types'
import { scopeComplete } from './utils'

const config: UserConfig = {
  rules: {
    // type
    'type-case': [2, 'always', 'lower-case'],
    'type-enum': [2, 'always', types],
    'type-empty': [2, 'never'],

    // scope
    'scope-case': [2, 'always', 'lower-case'],
    'scope-enum': [2, 'always', scopes],

    // subject
    'subject-case': [
      1,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
  },
  prompt: {
    typesAppend,
    defaultScope: scopeComplete,
    customScopesAlign: !scopeComplete ? 'top' : 'bottom',
  },
}

export default config

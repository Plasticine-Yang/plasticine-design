import { getPackages } from './utils'

const scopes = [...getPackages('packages'), 'docs']

export { scopes }

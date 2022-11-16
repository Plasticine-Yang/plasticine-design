import type { TypesOption } from 'cz-git'

/** @description Angular commit 规范中的 type */
const originalTypes = [
  'feat',
  'fix',
  'docs',
  'style',
  'refactor',
  'perf',
  'test',
  'build',
  'ci',
  'chore',
  'revert',
]

/** @description 供 cz-git 使用的 typesAppend */
const czgTypesAppend: TypesOption[] = [
  {
    // 'feat:     A new feature'
    name: 'release:  Release package',
    value: 'release',
  },
]

/** @description 扩展的 type */
const typesAppend: string[] = czgTypesAppend.map(
  (typeOption) => typeOption.value,
)

/** @description 供 commitlint rules 使用的 types */
const types = [...originalTypes, ...typesAppend]

export { types, czgTypesAppend }

import fg from 'fast-glob'

/**
 * @description 搜索指定包路径下的所有目录名
 * @param packagePath 待搜索包路径
 * @returns packagePath 下的所有目录名
 */
const getPackages = (packagePath: string) => {
  return fg.sync('*', { cwd: packagePath, onlyDirectories: true })
}

export { getPackages }

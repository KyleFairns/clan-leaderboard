/**
 * @description Makes a given sentence Camel Case
 * @param words
 */
export function camelCase (words: string) {
  return words
        .replace(/\b(.)/g,a => {
          return a.toUpperCase()
        })
        .replace(/[\s_-]/g, '')
        .replace(/^(.)/,b => {
          return b.toLowerCase()
        })
}

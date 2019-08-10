import { defineParameterType } from 'cucumber'

defineParameterType({
  regexp: /(\w+)/,
  transformer (s: string) {
    return s
  },
  name: 'actor'
})

defineParameterType({
  regexp: /(the(?:y|m|irs?)|h(?:e|i[sm]|ers?)|she)/, // https://regex101.com/r/XAb3mC/6
  transformer (s: string) {
    return s
  },
  name: 'pronoun'
})

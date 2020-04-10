export type TranslationObject = {
  [key: string]: {
    [locale: string]: string
  }
}

export type TranslationArray = { [locale: string]: string }[]

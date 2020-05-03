import * as React from "react"
import { FishProps } from "../types"
import i18n from "i18next"
import { fishNames } from "../translations/fish"
import { useTranslation, initReactI18next } from "react-i18next"

const slugs = Object.keys(fishNames)
const locales = Object.keys(fishNames[slugs[0]])

const translations = locales.reduce((allLocales, locale) => {
  return {
    ...allLocales,
    [locale]: {
      translation: slugs.reduce((allSlugs, slug) => {
        return {
          ...allSlugs,
          [slug]: fishNames[slug][locale],
        }
      }, {}),
    },
  }
}, {})

i18n.use(initReactI18next).init({
  resources: translations,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})

const FishListing = ({ pageContext }) => {
  const { t } = useTranslation()
  const data: FishProps[] = pageContext.data
  const height = 40

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "repeat(5, 20%)",
        gridAutoFlow: "column",
        overflow: "scroll",
      }}
    >
      {data.map((fish, index) => (
        <div
          key={index}
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "6px",
            width: height,
            height: height,
          }}
        >
          {/* <div style={{ fontSize: "12px", textAlign: "center" }}>
            {t(fish.slug)}
          </div> */}
          <div style={{ flex: "1" }}>
            <img
              src={fish.image}
              alt=""
              style={{
                height: `calc(${height}px - 10px)`,
                width: `calc(${height}px - 10px)`,
                objectFit: "contain",
                objectPosition: "center",
                transform: "scale(1.5)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default FishListing

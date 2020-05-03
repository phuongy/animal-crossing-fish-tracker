import * as React from "react"
import { FishProps } from "../types"
import i18n from "i18next"
import { fishNames } from "../translations/fish"
import { useTranslation, initReactI18next } from "react-i18next"

import styled from "@emotion/styled"

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
  const height = "16vh"
  const width = "50vw"
  const columns = Math.ceil(data.length / 5)

  return (
    <Container columns={columns} width={width}>
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
            height: width,
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
                height: `calc(${height} - 10px)`,
                width: `calc(${width} - 40px)`,
                objectFit: "contain",
                objectPosition: "center",
                transform: "scale(1.3)",
                transformOrigin: "0 50%",
              }}
            />
          </div>
        </div>
      ))}
    </Container>
  )
}

export default FishListing

const Container = styled.div<{ columns: number; width: string }>`
  display: grid;
  grid-template-rows: repeat(5, 20vh);
  grid-template-columns: ${props => `repeat(${props.columns}, ${props.width})`};
  grid-auto-flow: column;
  overflow: "scroll";
`

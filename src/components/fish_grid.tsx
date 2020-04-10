import * as React from "react"
import { FishProps } from "../data/fish"
import { isFishActiveNow } from "../data/timeActive"
import { Card } from "./fish_card"

export const FishGrid = ({
  locale = "en",
  showAll,
  data,
}: {
  locale?: string
  showAll: boolean
  data: FishProps[]
}) => {
  const activeFish = data
    .filter(isFishActiveNow)
    .sort((a, b) => (a.name > b.name ? 1 : -1))

  const inActiveFish = data
    .filter(fish => !isFishActiveNow(fish))
    .sort((a, b) => (a.name > b.name ? 1 : -1))

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridColumnGap: "16px",
        gridRowGap: "16px",
        width: "100%",
      }}
    >
      {activeFish.length > 0 ? (
        <React.Fragment>
          {activeFish.map((fish, index) => (
            <Card key={index} {...fish} locale={locale} />
          ))}
          {showAll &&
            inActiveFish.map((fish, index) => (
              <Card key={index} {...fish} locale={locale} isInactive />
            ))}
        </React.Fragment>
      ) : (
        inActiveFish.map((fish, index) => (
          <Card key={index} {...fish} locale={locale} isInactive />
        ))
      )}
    </div>
  )
}

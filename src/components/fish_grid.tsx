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

  const allFishBy = data.sort((a, b) => (a.name > b.name ? 1 : -1))
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridColumnGap: "8px",
        gridRowGap: "8px",
        width: "100%",
      }}
    >
      {activeFish.length > 0 ? (
        <React.Fragment>
          {activeFish.map((fish, index) => (
            <Card key={index} {...fish} />
          ))}
          {showAll &&
            allFishBy.map((fish, index) => (
              <Card key={index} {...fish} isInactive />
            ))}
        </React.Fragment>
      ) : (
        allFishBy.map((fish, index) => (
          <Card key={index} {...fish} isInactive />
        ))
      )}
    </div>
  )
}

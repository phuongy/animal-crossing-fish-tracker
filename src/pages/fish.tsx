import * as React from "react"
import { FishGrid } from "../components/fish_grid"
import { getData, FishProps } from "../data/fish"
import { getMonths, isFishAvailableNow } from "../data/months"
import { locationOrdering, getLocationName } from "../data/locations"

const locale = "en"
const currentTime = new Date()
const locationsOrdering = locationOrdering
const months = getMonths(locale)
const data = getData(locale)
const getLocation = getLocationName(locale)

export const Fish = () => {
  const [currentMonth, setCurrentMonth] = React.useState(currentTime.getMonth())
  const [showAll, setShowAll] = React.useState(false)

  const sortLocation = (a: FishProps, b: FishProps) =>
    locationsOrdering[a.location] > locationsOrdering[b.location] ? 1 : -1

  const groupedData = data.filter(isFishAvailableNow).sort(sortLocation)

  return (
    <div style={{ padding: "4px" }}>
      <h1 style={{ fontFamily: "helvetica", fontSize: "14px" }}>
        Fish tracker - {months[currentMonth]}
      </h1>
      {locationsOrdering.map((location, index) => {
        return (
          <div key={index} style={{ margin: "0 0 12px" }}>
            <h3
              style={{
                background: "#fff",
                fontFamily: "helvetica",
                margin: "0 0 12px",
                position: "sticky",
                padding: "12px 0",
                top: "0",
                width: "100%",
                zIndex: 1,
              }}
            >
              {getLocation(location)}
            </h3>
            <FishGrid
              showAll={showAll}
              data={groupedData.filter(fish => fish.location === location)}
            />
          </div>
        )
      })}
    </div>
  )
}

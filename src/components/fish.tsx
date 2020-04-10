import * as React from "react"
import { FishGrid } from "../components/fish_grid"
import { getData, FishProps } from "../data/fish"
import {
  getMonthsShortName,
  getMonthsLongName,
  isFishAvailable,
} from "../data/months"
import { getShowAllLabels } from "../data/showAll"
import { locationOrdering, getLocationName } from "../data/locations"
import { FishFilters } from "./fish_filters"

const currentTime = new Date()
const locationsOrdering = locationOrdering

export const Fish = () => {
  const [currentMonth, setCurrentMonth] = React.useState(currentTime.getMonth())
  const [currentLocation, setCurrentLocation] = React.useState("all")
  const [showAll, setShowAll] = React.useState(false)
  const [showFilters, setFiltersVisible] = React.useState(true)
  const [locale, setLocale] = React.useState("en")

  React.useEffect(() => {
    if (window.navigator.language.slice(0, 2) !== "en") {
      setLocale(window.navigator.language)
    }
  })

  const monthsShortName = getMonthsShortName(locale)
  const monthsLongName = getMonthsLongName(locale)
  const showAllLabels = getShowAllLabels(locale)
  const data = getData(locale)
  const getLocation = getLocationName(locale)

  const sortLocation = (a: FishProps, b: FishProps) =>
    locationsOrdering[a.location] > locationsOrdering[b.location] ? 1 : -1

  const groupedData = data
    .filter(isFishAvailable(currentMonth))
    .sort(sortLocation)

  const onMonthChange = (index: number) => () => {
    setCurrentMonth(index)
  }

  const onLocationChange = (location: string) => () => {
    setCurrentLocation(location)
  }

  const onShowAllChange = (showAll: boolean) => () => {
    setShowAll(showAll)
  }

  return (
    <div
      style={{
        background: "#afd3a9",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        padding: "16px 0 0",
      }}
    >
      <h1
        style={{
          background: "#fff",
          // borderRadius: "24px 24px 0 0",
          color: "#6e661b",
          fontFamily: "'Delius', cursive",
          fontSize: "24px",
          fontWeight: 700,
          margin: "-10px 0 0",
          padding: "12px 24px 8px",
          position: "sticky",
          left: 0,
          top: 0,
          width: "calc(100% - 48px)",
          zIndex: 2,
        }}
      >
        ACNH :: Fish list
      </h1>

      <div
        style={{
          flex: "0 0 auto",
        }}
      >
        <FishFilters
          {...{
            locale,
            showFilters,
            showAllLabels,
            monthsShortName,
            monthsLongName,
            locationsOrdering,
            currentLocation,
            currentMonth,
            showAll,
            getLocation,
            onMonthChange,
            onLocationChange,
            onShowAllChange,
          }}
        />
      </div>

      <div
        style={{
          backgroundImage: "linear-gradient(to bottom, #61AAEE, #3E78B5)",
          flex: "1",
          padding: "6px 12px 24px",
        }}
      >
        {(currentLocation === "all"
          ? locationsOrdering
          : [currentLocation]
        ).map((location, index) => {
          return (
            <div key={index} style={{ margin: "0 0 12px" }}>
              <h3
                style={{
                  fontFamily: "helvetica",
                  fontSize: "16px",
                  margin: "0 0 12px",
                  padding: "12px 0 0",
                }}
              >
                {getLocation(location)}
              </h3>
              <FishGrid
                locale={locale}
                showAll={showAll}
                data={groupedData.filter(fish => fish.location === location)}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

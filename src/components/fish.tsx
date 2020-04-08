import * as React from "react"
import { FishGrid } from "../components/fish_grid"
import { getData, FishProps } from "../data/fish"
import { getMonths, isFishAvailable } from "../data/months"
import { locationOrdering, getLocationName } from "../data/locations"

const currentTime = new Date()
const locationsOrdering = locationOrdering

export const Fish = () => {
  const [currentMonth, setCurrentMonth] = React.useState(currentTime.getMonth())
  const [currentLocation, setCurrentLocation] = React.useState("all")
  const [showAll, setShowAll] = React.useState(false)
  const [locale, setLocale] = React.useState("en")

  React.useEffect(() => {
    if (window.navigator.language.slice(0, 2) !== "en") {
      setLocale(window.navigator.language)
    }
  })

  const months = getMonths(locale)
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
    <div style={{ padding: "4px" }}>
      <h1
        style={{
          borderBottom: "1px solid #ccc",
          fontFamily: "helvetica",
          fontSize: "16px",
          textTransform: "uppercase",
          marginBottom: "24px",
          paddingBottom: "12px",
        }}
      >
        Fish tracker
      </h1>

      <div style={{ borderBottom: "1px solid #ccc", paddingBottom: "24px" }}>
        <h2
          style={{
            fontFamily: "helvetica",
            fontSize: "16px",
            margin: "12px 0",
          }}
        >
          Month
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
            gridColumnGap: "4px",
            gridRowGap: "4px",
          }}
        >
          {months.map((month, index) => (
            <button
              key={index}
              style={{
                background: currentMonth === index ? "#ee8" : "#fff",
                border: "1px solid #ccc",
                flex: "0 1 16.66%",
                fontSize: "16px",
                padding: "6px 4px",
                textAlign: "center",
              }}
              onClick={onMonthChange(index)}
            >
              {month}
            </button>
          ))}
        </div>

        <h2
          style={{
            fontFamily: "helvetica",
            fontSize: "16px",
            margin: "12px 0",
          }}
        >
          Locations
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gridColumnGap: "4px",
            gridRowGap: "4px",
          }}
        >
          <button
            style={{
              background: currentLocation === "all" ? "#ee8" : "#fff",
              border: "1px solid #ccc",
              flex: "0 1 16.66%",
              fontSize: "16px",
              padding: "6px 4px",
              textAlign: "center",
            }}
            onClick={onLocationChange("all")}
          >
            All
          </button>
          {locationsOrdering.map((location, index) => (
            <button
              key={index}
              style={{
                background: currentLocation === location ? "#ee8" : "#fff",
                border: "1px solid #ccc",
                flex: "0 1 16.66%",
                fontSize: "16px",
                minHeight: "60p",
                padding: "6px 4px",
                textAlign: "center",
              }}
              onClick={onLocationChange(location)}
            >
              {getLocation(location)}
            </button>
          ))}
        </div>

        <h2
          style={{
            fontFamily: "helvetica",
            fontSize: "16px",
            margin: "12px 0",
          }}
        >
          Show all
        </h2>
        <button
          style={{
            background: showAll === true ? "#ee8" : "#fff",
            border: "1px solid #ccc",
            flex: "0 1 16.66%",
            fontSize: "16px",
            marginRight: "4px",
            padding: "6px 18px",
            textAlign: "center",
          }}
          onClick={onShowAllChange(true)}
        >
          Yes
        </button>
        <button
          style={{
            background: showAll === false ? "#ee8" : "#fff",
            border: "1px solid #ccc",
            flex: "0 1 16.66%",
            fontSize: "16px",
            padding: "6px 18px",
            textAlign: "center",
          }}
          onClick={onShowAllChange(false)}
        >
          No
        </button>
      </div>

      {(currentLocation === "all" ? locationsOrdering : [currentLocation]).map(
        (location, index) => {
          return (
            <div key={index} style={{ margin: "0 0 12px" }}>
              <h3
                style={{
                  background: "#fff",
                  fontFamily: "helvetica",
                  fontSize: "16px",
                  margin: "12px 0 12px",
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
                locale={locale}
                showAll={showAll}
                data={groupedData.filter(fish => fish.location === location)}
              />
            </div>
          )
        }
      )}
    </div>
  )
}

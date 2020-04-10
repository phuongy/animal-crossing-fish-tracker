import * as React from "react"
import { getFishFilterLabels } from "../translations/fish_filters"

type FishFiltersProps = {
  locale: string
  fishFilterLabels?: (key: string) => string
  showFilters: boolean
  monthsShortName: string[]
  monthsLongName: string[]
  locationsOrdering: string[]
  currentLocation: string
  currentMonth: number
  showAll: boolean
  showAllLabels: (label: string) => string
  getLocation: (location: string) => string
  onMonthChange: (month: number) => () => void
  onLocationChange: (location: string) => () => void
  onShowAllChange: (showAll: boolean) => () => void
}

const orange = "#e18850"
const yellow = "#eee080"
const green = "#e9f5eb"
const highlight = yellow
const text = "#6e661b"

const SummaryFilter = ({
  fishFilterLabels,
  showAllLabels,
  monthsLongName,
  currentMonth,
  currentLocation,
  getLocation,
  showAll,
}: Partial<FishFiltersProps>) => {
  const summaryContainerStyles = {
    color: "#6e661b",
    display: "flex",
    alignItems: "center",
    fontFamiy: "helvetica, arial",
    fontSize: "16px",
    padding: "8px 0",
  }
  const summaryButtonStyles = {
    border: "1px solid #6e661b",
    color: "#6e661b",
    fontFamiy: "helvetica",
    padding: "4px 6px",
    marginLeft: "8px",
    fontWeight: 600,
  }

  console.log(fishFilterLabels)

  return (
    <div style={summaryContainerStyles}>
      {fishFilterLabels("filter")}
      <div style={summaryButtonStyles}>{monthsLongName[currentMonth]}</div>
      <div style={summaryButtonStyles}>{getLocation(currentLocation)}</div>
      <div style={summaryButtonStyles}>
        {showAll ? showAllLabels("showAll") : showAllLabels("activeOnly")}
      </div>
    </div>
  )
}

const LocationsFilter = ({
  fishFilterLabels,
  onLocationChange,
  locationsOrdering,
  currentLocation,
  getLocation,
}: Partial<FishFiltersProps>) => {
  return (
    <div>
      <h2
        style={{
          fontFamily: "helvetica",
          fontSize: "16px",
          margin: "12px 0",
        }}
      >
        {fishFilterLabels("location")}
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
            background: currentLocation === "all" ? highlight : "#fff",
            border: "1px solid #ccc",
            borderRadius: "8px",
            flex: "0 1 16.66%",
            fontSize: "16px",
            padding: "6px 4px",
            textAlign: "center",
          }}
          onClick={onLocationChange("all")}
        >
          {fishFilterLabels("locationAll")}
        </button>
        {locationsOrdering.map((location, index) => (
          <button
            key={index}
            style={{
              background: currentLocation === location ? highlight : "#fff",
              border: "1px solid #ccc",
              borderRadius: "8px",
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
    </div>
  )
}

const MonthFilter = ({
  fishFilterLabels,
  monthsShortName,
  currentMonth,
  onMonthChange,
}: Partial<FishFiltersProps>) => {
  return (
    <div>
      <h2
        style={{
          fontFamily: "helvetica",
          fontSize: "16px",
          margin: "12px 0",
        }}
      >
        {fishFilterLabels("month")}
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
          gridColumnGap: "4px",
          gridRowGap: "4px",
        }}
      >
        {monthsShortName.map((month, index) => (
          <button
            key={index}
            style={{
              background: currentMonth === index ? highlight : "#fff",
              border: "1px solid #ccc",
              borderRadius: "8px",
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
    </div>
  )
}

const ShowAllFilter = ({
  fishFilterLabels,
  showAll,
  onShowAllChange,
}: Partial<FishFiltersProps>) => {
  return (
    <div>
      <h2
        style={{
          fontFamily: "helvetica",
          fontSize: "16px",
          margin: "12px 0",
        }}
      >
        {fishFilterLabels("showAll")}
      </h2>
      <button
        style={{
          background: showAll === true ? highlight : "#fff",
          border: "1px solid #ccc",
          borderRadius: "8px",
          flex: "0 1 16.66%",
          fontSize: "16px",
          marginRight: "4px",
          padding: "6px 18px",
          textAlign: "center",
        }}
        onClick={onShowAllChange(true)}
      >
        {fishFilterLabels("showAllYes")}
      </button>
      <button
        style={{
          background: showAll === false ? highlight : "#fff",
          border: "1px solid #ccc",
          borderRadius: "8px",
          flex: "0 1 16.66%",
          fontSize: "16px",
          padding: "6px 18px",
          textAlign: "center",
        }}
        onClick={onShowAllChange(false)}
      >
        {fishFilterLabels("showAllNo")}
      </button>
    </div>
  )
}

export const FishFilters = ({
  locale,
  showFilters,
  showAllLabels,
  locationsOrdering,
  currentLocation,
  currentMonth,
  showAll,
  monthsLongName,
  monthsShortName,
  onMonthChange,
  onLocationChange,
  getLocation,
  onShowAllChange,
}: FishFiltersProps) => {
  const containerStyles = {
    background: "#F4E2AE",
    padding: showFilters ? "4px 12px 24px" : "4px 12px 0",
    overflow: "hidden",
    position: "sticky",
    top: "48px",
    zIndex: 1,
  }

  const fishFilterLabels = getFishFilterLabels(locale)

  return (
    <div style={containerStyles}>
      {!showFilters ? (
        <SummaryFilter
          {...{
            fishFilterLabels,
            showAllLabels,
            monthsLongName,
            currentMonth,
            currentLocation,
            getLocation,
            showAll,
          }}
        />
      ) : (
        <div>
          <MonthFilter
            {...{
              fishFilterLabels,
              monthsShortName,
              currentMonth,
              onMonthChange,
            }}
          />
          <LocationsFilter
            {...{
              fishFilterLabels,
              onLocationChange,
              locationsOrdering,
              currentLocation,
              getLocation,
            }}
          />
          <ShowAllFilter {...{ fishFilterLabels, showAll, onShowAllChange }} />
        </div>
      )}
    </div>
  )
}

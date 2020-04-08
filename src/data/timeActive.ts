import { FishProps } from "./fish"

type TimeRange = "9-16" | "16-9" | "21-4" | "4-21" | "18-4"
export type TimeActive = "all-day" | TimeRange[]

export const timeActive: { [range: string]: { [locale: string]: string } } = {
  "all-day": {
    en: "All day",
  },
  "9-16": {
    en: "9am - 4pm",
  },
  "21-4": {
    en: "9pm - 4am",
  },
  "4-21": {
    en: "4am - 9pm",
  },
  "18-4": {
    en: "6pm - 4am",
  },
  "16-9": {
    en: "4pm - 9am",
  },
}

export const getTimeActive = (locale: string) => (range: TimeActive) => {
  if (range === "all-day") {
    return timeActive[range][locale]
  }

  return range.map(x => timeActive[x][locale]).join(" & ")
}

export const isFishActiveNow = (fish: FishProps) => {
  const currentTime = new Date()
  const currentHour = currentTime.getHours()

  if (fish.time === "all-day") {
    return true
  }

  return fish.time.some(x => {
    switch (x) {
      case "4-21":
        return currentHour >= 4 && currentHour < 21
      case "16-9":
        return currentHour >= 16 || currentHour < 9
      case "9-16":
        return currentHour >= 9 && currentHour < 16
      case "21-4":
        return currentHour >= 21 || currentHour < 4
      default:
        return false
    }
  })
}

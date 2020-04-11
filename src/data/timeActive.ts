import { FishProps } from "./fish"

export type TimeRange = [number, number]
export type TimeActive = "all-day" | TimeRange[]

export const isFishActiveNow = (fish: FishProps) => {
  const currentTime = new Date()
  const currentHour = currentTime.getHours()

  if (fish.time === "all-day") {
    return true
  }

  if (Array.isArray(fish.time)) {
    return fish.time.some(
      time => currentHour >= time[0] && currentHour < time[1]
    )
  }

  return false
}

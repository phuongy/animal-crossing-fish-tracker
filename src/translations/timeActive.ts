import { TimeRange } from "../data/timeActive"

type TimeValue = (to: number, from: number) => string

type TimeActiveProps = {
  [key: string]: {
    [locale: string]: string | TimeValue
  }
}

const formattedTime = (hour: number) =>
  hour > 12 ? `${hour - 12}pm` : `${hour}am`

const formatted24HourTime = (hour: number) => `${hour}:00`

export const getTimeActive = (locale: string) => (
  key: string | TimeRange[]
) => {
  if (Array.isArray(key)) {
    return key
      .map(([to, from]) => timeActiveLabels.timeFormat[locale](to, from))
      .join(" & ")
  }

  return timeActiveLabels["all-day"][locale]
}

const timeActiveLabels: TimeActiveProps = {
  "all-day": {
    en: "All day",
    zh: "一整天",
  },
  timeFormat: {
    en: (to, from) => `${formattedTime(to)} to ${formattedTime(from)}`,
    zh: (to, from) =>
      `${formatted24HourTime(to)} to ${formatted24HourTime(from)}`,
  },
}

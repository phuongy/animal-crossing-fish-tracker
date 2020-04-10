import { monthsShortName, monthsLongName } from "../translations/months"

export const getMonthsShortName = (locale: string) =>
  monthsShortName.map(month => month[locale])

export const getMonthsLongName = (locale: string) =>
  monthsLongName.map(month => month[locale])

export const isFishAvailable = (month: number) => fish => {
  return fish.availability[month]
}

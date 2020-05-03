import { locations } from "../translations/locations"

export const getLocationName = (locale: string) => (location: string) =>
  locations[location][locale]

export const locationOrdering = [
  "sea",
  "pond",
  "pond_clifftop",
  "river",
  "river_mouth",
  "river_clifftop",
  "pier",
]

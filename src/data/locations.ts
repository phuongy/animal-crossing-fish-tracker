export type Location =
  | "sea"
  | "pond"
  | "pond_clifftop"
  | "river"
  | "river_mouth"
  | "river_clifftop"
  | "pier"

const locations: { [location: string]: { [locale: string]: string } } = {
  sea: {
    en: "Sea",
    zh: "Sea",
  },
  pond: {
    en: "Pond",
    zh: "Pond",
  },
  river: {
    en: "River",
    zh: "River",
  },
  river_mouth: {
    en: "River (Mouth)",
    zh: "River (Mouth)",
  },
  river_clifftop: {
    en: "River (Clifftop)",
    zh: "River (Clifftop)",
  },
  pond_clifftop: {
    en: "Pond (Clifftop)",
    zh: "Pond (Clifftop)",
  },
  pier: {
    en: "Pier",
    zh: "Pier",
  },
}

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

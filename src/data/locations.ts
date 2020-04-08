export type Location =
  | "sea"
  | "pond"
  | "river"
  | "river_mouth"
  | "river_clifftop"
  | "river_clifftop_pond"
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
  river_clifftop_pond: {
    en: "River (Clifftop) Pond",
    zh: "River (Clifftop) Pond",
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
  "river",
  "river_mouth",
  "river_clifftop",
  "river_clifftop_pond",
  "pier",
]

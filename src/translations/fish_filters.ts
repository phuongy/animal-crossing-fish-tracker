import { TranslationObject } from "../types/translations"

export const getFishFilterLabels = (locale: string) => (key: string) =>
  fishFiltersLabels[key][locale]

const fishFiltersLabels: TranslationObject = {
  filter: {
    en: "Filter",
    zh: "過濾",
  },
  month: {
    en: "Month",
    zh: "月",
  },
  location: {
    en: "Location",
    zh: "位置",
  },
  locationAll: {
    en: "All",
    zh: "所有",
  },
  showAll: {
    en: "Show all?",
    zh: "顯示所有？",
  },
  showAllYes: {
    en: "Yes",
    zh: "是",
  },
  showAllNo: {
    en: "No",
    zh: "沒有",
  },
}

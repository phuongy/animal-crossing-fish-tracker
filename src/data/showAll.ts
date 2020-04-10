import { showAllLabels } from "../translations/showAll"

export const getShowAllLabels = (locale: string) => (key: string) =>
  showAllLabels[key][locale]

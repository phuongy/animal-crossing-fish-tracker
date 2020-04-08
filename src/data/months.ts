const months = {
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  zh: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ],
}

export const getMonths = (locale: string) => months[locale]

export const isFishAvailableNow = fish => {
  const currentTime = new Date()
  const currentMonth = currentTime.getMonth()
  return fish.availability[currentMonth]
}

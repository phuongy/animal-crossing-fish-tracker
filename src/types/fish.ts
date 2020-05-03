import { TimeActive } from "."

export type FishProps = {
  slug: string
  image: string
  value: number
  location: Location
  size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  time: TimeActive
  availability: [
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean
  ]
}

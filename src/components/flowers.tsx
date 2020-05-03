import * as React from "react"
import { flowers } from "../data/flowers"

export const Flowers = () => (
  <div style={{}}>
    {flowers.map((flower, index) => (
      <div>{flower.name}</div>
    ))}
  </div>
)

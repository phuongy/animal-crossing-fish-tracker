import * as React from "react"
import { FishProps } from "../data/fish"
import { getTimeActive } from "../translations/timeActive"

export const Card = ({
  locale = "en",
  image,
  name,
  time,
  size,
  isInactive = false,
}: FishProps & { locale?: string; isInactive?: boolean }) => {
  const getTime = getTimeActive(locale)
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "8px",
        fontFamily: "helvetica",
        position: "relative",
        opacity: isInactive ? 0.5 : 1,
      }}
    >
      <img src={image} style={{ margin: "4px 0" }} />
      <div
        style={{
          lineHeight: 1.2,
          textAlign: "center",
        }}
      >
        <p style={{ margin: "0 0 4px" }}>
          <strong>{name}</strong>
        </p>
        <p style={{ margin: 0 }}>
          {time === "all-day" ? getTime("all-day") : getTime(time)}
        </p>
      </div>
      <div
        style={{
          color: "#fff",
          height: "28px",
          width: "42px",
          position: "absolute",
          top: "4px",
          right: "4px",
          textAlign: "center",
          lineHeight: "26px",
          fontSize: "14px",
        }}
      >
        <svg
          width="66"
          height="34"
          viewBox="0 0 66 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: "scale(0.5) translate(-52px, -7px)",
            position: "absolute",
            zIndex: -1,
          }}
        >
          <path
            d="M64.5 3.20833L57.5 8.29166C48.8333 14.5833 42.6667 0.33333 25.6667 0.33333C10.0417 0.33333 0.666672 13.5417 0.666672 17C0.666672 20.4583 10.0417 33.6667 25.6667 33.6667C42.6667 33.6667 48.8333 19.4167 57.5 25.7083L64.5 30.7917C65.875 27.3333 64.75 22.1667 60.5 17C64.75 11.8333 65.875 6.625 64.5 3.20833Z"
            fill="rgba(0,0,0,0.7)"
          />
        </svg>

        {size}
      </div>
    </div>
  )
}

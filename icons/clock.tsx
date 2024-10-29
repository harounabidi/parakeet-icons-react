import React from "react"

export default function Clock(props) {
  return (
    <svg viewBox='0 0 48 48' {...props} id='icon-clock'>
      <circle cx='24' cy='24' r='20' fill='#8fcae6' />
      <path
        fill='#324561'
        d='M32.658 30.247l-6.697-5.86a1.994 1.994 0 00-.961-2.11V9a1 1 0 10-2 0v13.277c-.595.346-1 .984-1 1.723a2 2 0 002 2c.224 0 .436-.045.637-.113l6.704 5.866a.998.998 0 001.412-.095 1 1 0 00-.095-1.411z'
      />
    </svg>
  )
}

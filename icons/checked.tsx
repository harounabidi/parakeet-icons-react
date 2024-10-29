import React from "react"

export default function Checked(props) {
  return (
    <svg viewBox='0 0 48 48' {...props} id='icon-checked'>
      <circle cx='24' cy='24' r='20' fill='#6be3a2' />
      <path
        fill='#324561'
        d='M22.5 33a1 1 0 01-.625-.219l-7.5-6a1 1 0 111.25-1.561l6.667 5.334 9.889-14.126a1 1 0 111.639 1.147l-10.5 15a.999.999 0 01-.82.425z'
      />
    </svg>
  )
}

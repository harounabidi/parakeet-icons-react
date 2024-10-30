import { JSX, SVGProps } from "react"

export default function Mastercard(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox='0 0 48 48' {...props} id='mastercard'>
      <circle cx='14.5' cy='24.5' r='14.5' fill='#fca66c' />
      <path
        fill='#324561'
        d='M33.5 39C25.505 39 19 32.495 19 24.5S25.505 10 33.5 10 48 16.505 48 24.5 41.495 39 33.5 39zm0-27C26.607 12 21 17.607 21 24.5S26.607 37 33.5 37 46 31.393 46 24.5 40.393 12 33.5 12z'
      />
    </svg>
  )
}

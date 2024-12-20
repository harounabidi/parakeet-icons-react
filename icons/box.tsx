import { JSX, SVGProps } from "react"

export default function Box(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox='0 0 48 48' {...props} id='icon-box'>
      <path
        fill='#f2ca00'
        d='M38 6H10c-2.206 0-4 1.794-4 4v28c0 2.206 1.794 4 4 4h28c2.206 0 4-1.794 4-4V10c0-2.206-1.794-4-4-4z'
      />
      <path
        fill='#324561'
        d='M29 16H19a1 1 0 01-1-1V6a1 1 0 112 0v8h8V6a1 1 0 112 0v9a1 1 0 01-1 1zM35 38a1 1 0 01-1-1v-6a1 1 0 112 0v6a1 1 0 01-1 1z'
      />
      <path
        fill='#324561'
        d='M37 33a.997.997 0 01-.707-.293L35 31.414l-1.293 1.293a.999.999 0 11-1.414-1.414l2-2a.999.999 0 011.414 0l2 2A.999.999 0 0137 33zM28 38a1 1 0 01-1-1v-6a1 1 0 112 0v6a1 1 0 01-1 1z'
      />
      <path
        fill='#324561'
        d='M30 33a.997.997 0 01-.707-.293L28 31.414l-1.293 1.293a.999.999 0 11-1.414-1.414l2-2a.999.999 0 011.414 0l2 2A.999.999 0 0130 33z'
      />
    </svg>
  )
}

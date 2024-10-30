import { JSX, SVGProps } from "react"

export default function Stumbleupon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox='0 0 48 48' {...props} id='stumbleupon'>
      <circle cx='24' cy='24' r='21' fill='#fca66c' />
      <path
        fill='#324561'
        d='M16 33c-2.757 0-5-2.243-5-5v-4a1 1 0 112 0v4c0 1.654 1.346 3 3 3s3-1.346 3-3V18c0-2.757 2.243-5 5-5s5 2.243 5 5v3a1 1 0 11-2 0v-3c0-1.654-1.346-3-3-3s-3 1.346-3 3v10c0 2.757-2.243 5-5 5zM32 33c-2.757 0-5-2.243-5-5v-2a1 1 0 112 0v2c0 1.654 1.346 3 3 3s3-1.346 3-3v-4a1 1 0 112 0v4c0 2.757-2.243 5-5 5z'
      />
    </svg>
  )
}

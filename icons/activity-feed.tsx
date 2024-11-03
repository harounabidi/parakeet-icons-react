import { JSX, SVGProps } from "react"

export default function ActivityFeed(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox='0 0 48 48' {...props}>
      <path
        fill='#8fcae6'
        d='M38 5H10c-2.757 0-5 2.243-5 5v28c0 2.757 2.243 5 5 5h28c2.757 0 5-2.243 5-5V10c0-2.757-2.243-5-5-5z'
      />
      <path
        fill='#324561'
        d='M35 17H13c-1.654 0-3-1.346-3-3v-4a1 1 0 112 0v4a1 1 0 001 1h22a1 1 0 001-1v-4a1 1 0 112 0v4c0 1.654-1.346 3-3 3zM35 28H13c-1.654 0-3-1.346-3-3v-4a1 1 0 112 0v4a1 1 0 001 1h22a1 1 0 001-1v-4a1 1 0 112 0v4c0 1.654-1.346 3-3 3zM35 39H13c-1.654 0-3-1.346-3-3v-4a1 1 0 112 0v4a1 1 0 001 1h22a1 1 0 001-1v-4a1 1 0 112 0v4c0 1.654-1.346 3-3 3z'
      />
    </svg>
  )
}

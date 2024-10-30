import { JSX, SVGProps } from "react"

export default function Menu(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox='0 0 48 48' {...props}>
      <path
        fill='#babffc'
        d='M40 7H8c-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3h1l31-1c1.654 0 2-.346 2-2l1-2c0-1.654-1.346-3-3-3z'
      />
      <path
        fill='#324561'
        d='M40 15H9a1 1 0 110-2h31a1 1 0 001-1v-2a1 1 0 112 0v2c0 1.654-1.346 3-3 3z'
      />
      <path
        fill='#babffc'
        d='M40 20H8c-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3h1l31-1c1.654 0 2-.346 2-2l1-2c0-1.654-1.346-3-3-3z'
      />
      <path
        fill='#324561'
        d='M40 28H9a1 1 0 110-2h31a1 1 0 001-1v-2a1 1 0 112 0v2c0 1.654-1.346 3-3 3z'
      />
      <path
        fill='#babffc'
        d='M40 33H8c-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3h1l31-1c1.654 0 2-.346 2-2l1-2c0-1.654-1.346-3-3-3z'
      />
      <path
        fill='#324561'
        d='M40 41H9a1 1 0 110-2h31a1 1 0 001-1v-2a1 1 0 112 0v2c0 1.654-1.346 3-3 3z'
      />
    </svg>
  )
}

import { JSX, SVGProps } from "react"

export default function Idea(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox='0 0 48 48' {...props} id='icon-idea'>
      <path
        fill='#f2ca00'
        d='M29.313 6.112c-4.197-1.802-8.757-1.415-12.51 1.059C13.17 9.566 11 13.51 11 17.72c0 4.334 1.764 6.612 3.47 8.815 1.475 1.904 2.867 3.703 3.35 6.944.213 1.437 1.486 2.521 2.959 2.521h6.397c1.495 0 2.788-1.093 3.008-2.543.485-3.228 1.875-5.022 3.347-6.922 1.561-2.016 3.174-4.1 3.433-7.769.384-5.442-2.691-10.527-7.651-12.654z'
      />
      <path
        fill='#324561'
        d='M46 20h-5a1 1 0 110-2h5a1 1 0 110 2zM25 45h-2c-2.757 0-5-2.243-5-5v-4a1 1 0 112 0v4c0 1.654 1.346 3 3 3h2c1.654 0 3-1.346 3-3v-4a1 1 0 112 0v4c0 2.757-2.243 5-5 5zM38.565 8.206a.999.999 0 01-.63-1.777l3.886-3.146a1 1 0 011.258 1.554l-3.886 3.146a.992.992 0 01-.628.223zM42.449 34.94a.994.994 0 01-.628-.223l-3.886-3.146a.999.999 0 111.258-1.554l3.886 3.146a.999.999 0 01-.63 1.777zM7 20H2a1 1 0 110-2h5a1 1 0 110 2zM9.435 8.206a.994.994 0 01-.628-.223L4.921 4.837a1.001 1.001 0 011.258-1.555l3.886 3.146c.43.348.496.978.148 1.406a.996.996 0 01-.778.372zM5.551 34.94a.999.999 0 01-.63-1.777l3.886-3.146a1 1 0 111.258 1.554l-3.886 3.146a.996.996 0 01-.628.223z'
      />
    </svg>
  )
}

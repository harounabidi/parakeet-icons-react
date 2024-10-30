import { JSX, SVGProps } from "react"

export default function Sun(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox='0 0 48 48' {...props} id='sun'>
      <circle cx='24' cy='24' r='16' fill='#f2ca00' />
      <path
        fill='#324561'
        d='M24 6a1 1 0 01-1-1V1a1 1 0 112 0v4a1 1 0 01-1 1zM5 25H1a1 1 0 110-2h4a1 1 0 110 2zM7.736 41.264a.999.999 0 01-.707-1.707l2.829-2.829a.999.999 0 111.414 1.414l-2.829 2.829a.997.997 0 01-.707.293zM10.565 11.565a.997.997 0 01-.707-.293L7.029 8.443a.999.999 0 111.414-1.414l2.829 2.829a.999.999 0 01-.707 1.707zM37.435 11.565a.999.999 0 01-.707-1.707l2.829-2.829a.999.999 0 111.414 1.414l-2.829 2.829a.996.996 0 01-.707.293zM47 25h-4a1 1 0 110-2h4a1 1 0 110 2zM40.264 41.264a.997.997 0 01-.707-.293l-2.829-2.829a.999.999 0 111.414-1.414l2.829 2.829a.999.999 0 01-.707 1.707zM24 48a1 1 0 01-1-1v-4a1 1 0 112 0v4a1 1 0 01-1 1z'
      />
    </svg>
  )
}
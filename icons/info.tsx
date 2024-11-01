import { JSX, SVGProps } from "react"

export default function Info(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox='0 0 48 48' {...props} id='icon-info'>
      <circle cx='24' cy='24' r='20' fill='#8fcae6' />
      <path
        fill='#324561'
        d='M22.625 13.694c0-.75.625-1.359 1.375-1.359.766 0 1.391.609 1.391 1.359A1.38 1.38 0 0124 15.069c-.75 0-1.375-.609-1.375-1.375zm.344 20.063V19.194c0-.656.422-1.109 1.031-1.109s1.031.453 1.031 1.109v14.562c0 .656-.422 1.109-1.031 1.109s-1.031-.452-1.031-1.108z'
      />
    </svg>
  )
}

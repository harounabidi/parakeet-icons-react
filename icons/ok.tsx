import { JSX, SVGProps } from "react"

export default function Ok(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox='0 0 48 48' {...props} id='ok'>
      <circle cx='24' cy='24' r='20' fill='#8fcae6' />
      <path
        fill='#324561'
        d='M22.4 33c-.232 0-.46-.081-.641-.231l-8.4-7a1.001 1.001 0 011.281-1.537l7.604 6.336 10.965-14.179a1 1 0 011.582 1.222l-11.6 15A.997.997 0 0122.4 33z'
      />
    </svg>
  )
}

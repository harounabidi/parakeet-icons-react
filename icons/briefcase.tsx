import { JSX, SVGProps } from "react"

export default function Briefcase(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox='0 0 48 48' {...props}>
      <path
        fill='#fca66c'
        d='M39,9H9c-2.757,0-5,2.243-5,5v20c0,2.757,2.243,5,5,5h30c2.757,0,5-2.243,5-5V14C44,11.243,41.757,9,39,9z'
      />
      <path
        fill='#324561'
        d='M40,25H8c-0.553,0-1,0.447-1,1s0.447,1,1,1h18v2h-5c-0.553,0-1,0.447-1,1s0.447,1,1,1h6c0.553,0,1-0.447,1-1v-3h12c0.553,0,1-0.447,1-1S40.553,25,40,25z'
      />
      <path
        fill='#324561'
        d='M30,11c-0.553,0-1-0.447-1-1V8c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2c0,0.553-0.447,1-1,1s-1-0.447-1-1V8c0-2.206,1.794-4,4-4h6c2.206,0,4,1.794,4,4v2C31,10.553,30.553,11,30,11z'
      />
    </svg>
  )
}

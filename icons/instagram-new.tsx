import { JSX, SVGProps } from "react"

export default function InstagramNew(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox='0 0 48 48' {...props} id='instagram-new'>
      <path
        fill='#fc9c9c'
        d='M32 5H16C9.935 5 5 9.935 5 16v16c0 6.065 4.935 11 11 11h16c6.065 0 11-4.935 11-11V16c0-6.065-4.935-11-11-11z'
      />
      <path
        fill='#324561'
        d='M24 34c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM35 11a2 2 0 10-.001 3.999A2 2 0 0035 11z'
      />
    </svg>
  )
}

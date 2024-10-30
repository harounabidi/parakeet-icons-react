import { JSX, SVGProps } from "react"

export default function Lock(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox='0 0 48 48' {...props} id='lock'>
      <path
        fill='#fc9c9c'
        d='M38 14H10c-2.757 0-5 2.243-5 5v18c0 2.757 2.243 5 5 5h28c2.757 0 5-2.243 5-5V19c0-2.757-2.243-5-5-5z'
      />
      <path
        fill='#324561'
        d='M34 16a1 1 0 01-1-1V8c0-3.309-2.691-6-6-6h-6c-3.309 0-6 2.691-6 6v7a1 1 0 11-2 0V8c0-4.411 3.589-8 8-8h6c4.411 0 8 3.589 8 8v7a1 1 0 01-1 1zM24 35c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm0-10c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z'
      />
    </svg>
  )
}

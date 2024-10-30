import { JSX, SVGProps } from "react"

export default function AppointmentReminders(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox='0 0 48 48' {...props}>
      <path
        fill='#f2ca00'
        d='M43.189 36.681C40.366 33.486 37 28.52 37 23v-5c0-7.168-5.832-13-13-13s-13 5.832-13 13v5c0 5.52-3.366 10.486-6.189 13.681a1.966 1.966 0 00-.32 2.133A1.988 1.988 0 006.323 40h35.354a1.99 1.99 0 001.833-1.187 1.963 1.963 0 00-.321-2.132z'
      />
      <path
        fill='#324561'
        d='M24 46c-3.309 0-6-2.691-6-6a1 1 0 112 0c0 2.206 1.794 4 4 4s4-1.794 4-4a1 1 0 112 0c0 3.309-2.691 6-6 6z'
      />
      <path
        fill='#f2ca00'
        d='M24 2c-2.206 0-4 1.794-4 4v2a1 1 0 001 1h6a1 1 0 001-1V6c0-2.206-1.794-4-4-4z'
      />
      <path fill='#324561' d='M39 32H9a1 1 0 110-2h30a1 1 0 110 2z' />
    </svg>
  )
}

import { JSX, SVGProps } from "react"

export default function MailboxClosedFlagDown(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox='0 0 48 48' {...props} id='mailbox-closed-flag-down'>
      <path
        fill='#8fcae6'
        d='M33 10H14C7.935 10 3 14.935 3 21v16c0 1.654 1.346 3 3 3h35c1.654 0 3-1.346 3-3V21c0-6.065-4.935-11-11-11z'
      />
      <path
        fill='#324561'
        d='M25 38a1 1 0 01-1-1V21c0-5.514-4.486-10-10-10a1 1 0 110-2c6.617 0 12 5.383 12 12v16a1 1 0 01-1 1z'
      />
      <path
        fill='#324561'
        d='M19 23H8a1 1 0 110-2h11a1 1 0 110 2zM44 28h-3c-1.103 0-2-.897-2-2v-3a1 1 0 112 0v3h3v-6H32a1 1 0 110-2h12c1.103 0 2 .897 2 2v6c0 1.103-.897 2-2 2z'
      />
    </svg>
  )
}

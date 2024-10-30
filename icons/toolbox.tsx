import { JSX, SVGProps } from "react"

export default function Toolbox(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox='0 0 48 48' {...props} id='toolbox'>
      <path
        fill='#fca66c'
        d='M40 10H8c-2.757 0-5 2.243-5 5v20c0 2.757 2.243 5 5 5h32c2.757 0 5-2.243 5-5V15c0-2.757-2.243-5-5-5z'
      />
      <path
        fill='#324561'
        d='M30 12a1 1 0 01-1-1V8a1 1 0 00-1-1h-8a1 1 0 00-1 1v3a1 1 0 11-2 0V8c0-1.654 1.346-3 3-3h8c1.654 0 3 1.346 3 3v3a1 1 0 01-1 1zM37 24h-3c-1.103 0-2-.897-2-2v-1H16v1c0 1.103-.897 2-2 2h-3c-1.103 0-2-.897-2-2v-1H3a1 1 0 110-2h7a1 1 0 011 1v2h3v-2a1 1 0 011-1h18a1 1 0 011 1v2h3v-2a1 1 0 011-1h7a1 1 0 110 2h-6v1c0 1.103-.897 2-2 2z'
      />
    </svg>
  )
}

import { JSX, SVGProps } from "react"

export default function Support(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox='0 0 48 48' {...props} id='support'>
      <path
        fill='#8fcae6'
        d='M44.416 11.298a1 1 0 00-.717-.665c-.341-.082-.695 1.02-.941 1.266l-5.025 5.026c-.935.935-3.457.937-4.394 0l-2.264-2.264c-.936-.936-1.936-2.458-1-3.394l6.026-6.025c.246-.246 1.347-.603 1.266-.941a1.002 1.002 0 00-.665-.717c-4.937-1.6-10.335.162-13.428 4.377-3.124 4.258-2.99 10.354.319 14.494 2.149 2.689 5.334 4.34 8.737 4.529a12.02 12.02 0 009.154-3.499 11.955 11.955 0 002.932-12.187z'
      />
      <path
        fill='#8fcae6'
        d='M32.207 21.793l-6-6a.999.999 0 00-1.414 0L4.314 36.271a4.004 4.004 0 000 5.657l1.757 1.757c.78.78 1.805 1.17 2.828 1.17a3.99 3.99 0 002.829-1.17l20.479-20.479a.998.998 0 000-1.413z'
      />
      <path
        fill='#324561'
        d='M35.535 19.125a4.386 4.386 0 01-3.11-1.286l-2.264-2.264a4.404 4.404 0 010-6.222l5.526-5.525a.999.999 0 111.414 1.414l-5.526 5.525a2.402 2.402 0 000 3.394l2.264 2.264a2.402 2.402 0 003.394 0l5.525-5.526a.999.999 0 111.414 1.414l-5.525 5.526a4.39 4.39 0 01-3.112 1.286zM9 40a.999.999 0 01-.707-1.707l14-14a.999.999 0 111.414 1.414l-14 14A.997.997 0 019 40z'
      />
    </svg>
  )
}
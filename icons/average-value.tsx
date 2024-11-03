import { JSX, SVGProps } from "react"

export default function AverageValue(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox='0 0 48 48' {...props}>
      <path
        fill='#12d9e3'
        d='M40 41H11c0-17.23 7.97-32 14.5-32S40 23.77 40 41z'
      />
      <path
        fill='#324561'
        d='M23 26h-3a1 1 0 110-2h3a1 1 0 110 2zM31 26h-3a1 1 0 110-2h3a1 1 0 110 2zM39 26h-3a1 1 0 110-2h3a1 1 0 110 2zM15 26h-3a1 1 0 110-2h3a1 1 0 110 2z'
      />
      <path
        fill='#324561'
        d='M42 42H9c-1.654 0-3-1.346-3-3V6a1 1 0 112 0v33a1 1 0 001 1h33a1 1 0 110 2z'
      />
    </svg>
  )
}

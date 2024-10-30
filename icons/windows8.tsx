import { JSX, SVGProps } from "react"

export default function Windows8(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox='0 0 48 48' {...props} id='windows8'>
      <path
        fill='#12d9e3'
        d='M42.004 6.422a2.94 2.94 0 00-2.315-.716h-.001L5.729 9.951A1.975 1.975 0 004 11.909v24.182c0 .994.743 1.836 1.729 1.958l33.96 4.245a2.951 2.951 0 002.315-.716A2.948 2.948 0 0043 39.369V8.631c0-.845-.363-1.65-.996-2.209z'
      />
      <path
        fill='#324561'
        d='M22 41a1 1 0 01-1-1V8a1 1 0 112 0v32a1 1 0 01-1 1z'
      />
      <path fill='#324561' d='M43 25H4a1 1 0 110-2h39a1 1 0 110 2z' />
    </svg>
  )
}

import { JSX, SVGProps } from "react"

export default function AddDatabase(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox='0 0 48 48' {...props}>
      <path
        fill='#babffc'
        d='M38 18c2.21 0 4 1.79 4 4v5c0 2.21-1.79 4-4 4 .14 0 .27.01.41.02-4.14.3-7.41 3.76-7.41 7.98 0 1.89.66 3.63 1.76 5H10c-2.21 0-4-1.79-4-4v-5c0-2.21 1.79-4 4-4-2.21 0-4-1.79-4-4v-5c0-2.21 1.79-4 4-4-2.21 0-4-1.79-4-4V9c0-2.21 1.79-4 4-4h28c2.21 0 4 1.79 4 4v5c0 2.21-1.79 4-4 4z'
      />
      <path
        fill='#324561'
        d='M39 19H9a1 1 0 110-2h30a1 1 0 110 2zM29 32H9a1 1 0 110-2h20a1 1 0 110 2zM39 48c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9zm0-16c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7z'
      />
      <path fill='#324561' d='M42 40h-6a1 1 0 110-2h6a1 1 0 110 2z' />
      <path
        fill='#324561'
        d='M39 43a1 1 0 01-1-1v-6a1 1 0 112 0v6a1 1 0 01-1 1z'
      />
    </svg>
  )
}

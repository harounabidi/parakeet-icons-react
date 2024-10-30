import { JSX, SVGProps } from "react"

export default function Myspace(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox='0 0 48 48' {...props} id='myspace'>
      <circle cx='9' cy='11' r='4' fill='#babffc' />
      <circle cx='35.5' cy='11.5' r='6.5' fill='#babffc' />
      <circle cx='21' cy='11' r='5' fill='#babffc' />
      <path
        fill='#babffc'
        d='M36.131 20.021a9.841 9.841 0 00-1.262 0C32.677 20.162 27 24 27 30.5L26 39v1c0 1.654 1.346 3 3 3h13c1.654 0 3-1.346 3-3V29.792c0-5.157-3.896-9.449-8.869-9.771zM9.587 17.028c-1.688-.164-2.374.396-3.622 1.53A6.019 6.019 0 004 23l-1 5v1c0 1.654 1.346 3 3 3h6c1.654 0 3-1.346 3-3v-5.785c0-3.179-2.377-5.897-5.413-6.187z'
      />
      <path
        fill='#babffc'
        d='M21 18c-3.859 0-6 3.141-6 7l-1 8v1c0 1.654 1.346 3 3 3h8c1.654 0 3-1.346 3-3v-9c0-3.859-3.141-7-7-7z'
      />
      <path
        fill='#324561'
        d='M15 34a1 1 0 01-1-1v-8c0-3.859 3.141-7 7-7a1 1 0 110 2c-2.757 0-5 2.243-5 5v8a1 1 0 01-1 1zM27 40a1 1 0 01-1-1v-9.5c0-4.989 3.896-9.152 8.869-9.479a1 1 0 01.13 1.996c-3.925.258-7 3.545-7 7.483V39A.998.998 0 0127 40zM4 29a1 1 0 01-1-1v-5c0-3.309 2.691-6 6-6a1 1 0 110 2c-2.206 0-4 1.794-4 4v5a1 1 0 01-1 1z'
      />
    </svg>
  )
}

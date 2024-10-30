import { JSX, SVGProps } from "react"

export default function BookmarkRibon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox='0 0 48 48' {...props} id='icon-bookmark-ribbon'>
      <path
        fill='#fc9c9c'
        d='M37 9h-1v36c-.21 0-.42-.07-.6-.2L24 36.25 12 44v1c-.16 0-.31-.04-.45-.11A.977.977 0 0111 44V9c0-2.76 2.24-5 5-5h16c2.76 0 5 2.24 5 5z'
      />
      <path
        fill='#324561'
        d='M12.001 45a1 1 0 01-.601-1.8l12-9a1 1 0 111.199 1.6l-12 9a.99.99 0 01-.598.2zM36 45a1 1 0 01-1-1V9a1 1 0 112 0v35a1 1 0 01-1 1z'
      />
    </svg>
  )
}

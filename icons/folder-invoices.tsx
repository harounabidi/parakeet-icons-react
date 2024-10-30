import { JSX, SVGProps } from "react"

export default function FolderInvoices(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox='0 0 48 48' {...props} id='icon-folder-invoices'>
      <path
        fill='#f2ca00'
        d='M40 11H4a1 1 0 00-1 1v24c0 2.757 2.243 5 5 5h32c2.757 0 5-2.243 5-5V16c0-2.757-2.243-5-5-5z'
      />
      <path
        fill='#324561'
        d='M40 20H8a1 1 0 110-2h32a1 1 0 110 2zM19.001 13a1 1 0 01-.896-.553l-2.447-4.895A.994.994 0 0014.764 7H6a1 1 0 00-1 1v4a1 1 0 11-2 0V8c0-1.654 1.346-3 3-3h8.764c1.144 0 2.172.636 2.684 1.658l2.447 4.895A1 1 0 0119.001 13z'
      />
    </svg>
  )
}

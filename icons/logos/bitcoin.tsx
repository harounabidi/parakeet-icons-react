import React from "react"

export default function Bitcoin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 48 48' {...props}>
      <circle cx='24' cy='24' r='20' fill='#f2ca00'></circle>
      <path
        fill='#324561'
        d='M17.424,33.875V14.183c0-0.666,0.393-1.075,1.029-1.075h6.826c3.754,0,6.297,2.165,6.297,5.389	c0,2.422-1.665,4.496-3.996,4.92v0.105c3.027,0.363,5.131,2.407,5.131,5.435c0,3.724-2.77,5.994-7.387,5.994h-6.871	C17.816,34.95,17.424,34.541,17.424,33.875z M24.234,22.811c3.315,0,5.253-1.514,5.253-4.087c0-2.376-1.741-3.784-4.647-3.784	h-5.357v7.871H24.234z M25.037,33.119c3.572,0,5.555-1.56,5.555-4.27c0-2.725-2.059-4.253-5.827-4.253h-5.282v8.522H25.037z'></path>
      <path
        fill='#324561'
        d='M23,14.8c-0.553,0-1-0.447-1-1V11c0-0.553,0.447-1,1-1s1,0.447,1,1v2.8	C24,14.353,23.553,14.8,23,14.8z'></path>
      <path
        fill='#324561'
        d='M23,38c-0.553,0-1-0.447-1-1v-2.8c0-0.553,0.447-1,1-1s1,0.447,1,1V37C24,37.553,23.553,38,23,38z'></path>
    </svg>
  )
}

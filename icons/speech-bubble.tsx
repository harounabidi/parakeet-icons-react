import { JSX, SVGProps } from "react"

export default function SpeechBubble(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox='0 0 48 48' {...props} id='speech-bubble'>
      <ellipse cx='24' cy='24' fill='#babffc' rx='22' ry='19' />
      <path
        fill='#324561'
        d='M4.562 43.453a1.999 1.999 0 01-1.717-.978 1.966 1.966 0 01.093-2.184c.915-1.272 2.115-3.335 2.637-5.942a.993.993 0 011.177-.784 1 1 0 01.784 1.177c-.591 2.957-1.943 5.285-2.975 6.718 2.405-.313 5.992-1.044 9.428-2.781a1 1 0 01.903 1.785c-3.689 1.865-7.516 2.646-10.075 2.974a2.22 2.22 0 01-.255.015z'
      />
    </svg>
  )
}

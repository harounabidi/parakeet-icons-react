import { JSX, SVGProps } from "react"

export default function MacOS(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox='0 0 48 48' {...props} id='mac-os'>
      <path
        fill='#babffc'
        d='M42.399 31.325a1 1 0 00-.57-.553c-2.991-1.132-4.99-3.846-5.217-7.081-.221-3.166 1.327-5.977 4.142-7.519a.999.999 0 00.299-1.503c-2.291-2.853-5.543-4.556-8.698-4.556-2.215 0-3.717.57-5.041 1.072-.991.376-1.847.701-2.837.701-1.094 0-2.084-.354-3.229-.763-1.319-.472-2.814-1.006-4.674-1.006-3.59 0-7.228 2.168-9.492 5.657-3.445 5.296-2.447 14.47 2.374 21.816 1.974 2.996 4.459 6.063 7.922 6.095h.076c1.436 0 2.406-.432 3.346-.85 1.017-.451 1.976-.878 3.724-.887h.083c1.695 0 2.622.424 3.602.872.924.423 1.878.859 3.313.859h.06c3.397-.025 5.979-3.262 8.055-6.424 1.266-1.93 1.76-2.941 2.751-5.136a1 1 0 00.011-.794z'
      />
      <path
        fill='#324561'
        d='M23.381 13c-.073 0-.146-.001-.219-.004a1 1 0 01-.951-.817c-.436-2.358.419-5.124 2.287-7.396 1.729-2.093 4.566-3.61 7.061-3.78.51-.011.98.336 1.057.851.369 2.48-.442 5.218-2.226 7.509C28.658 11.59 25.929 13 23.381 13zm7.323-9.845c-1.692.41-3.532 1.531-4.663 2.898-.497.606-1.972 2.6-1.946 4.896 1.726-.236 3.536-1.298 4.716-2.816l.001-.001c.6-.771 1.863-2.665 1.892-4.977z'
      />
    </svg>
  )
}
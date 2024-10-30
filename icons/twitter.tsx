import { JSX, SVGProps } from "react"

export default function Twitter(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox='0 0 48 48' {...props} id='twitter'>
      <path
        fill='#12d9e3'
        d='M46.766 10.134a1.004 1.004 0 00-1.171-.271c-.396.175-.8.335-1.213.479a9.671 9.671 0 001.38-2.717 1 1 0 00-1.457-1.17A16.707 16.707 0 0139.53 8.35a9.884 9.884 0 00-6.756-2.669c-5.416 0-9.822 4.371-9.822 9.743 0 .3.014.602.042.901A24.223 24.223 0 016.772 7.641c-.206-.252-2.967 3.299-2.967 5.037 0 1.975 2.116 4.732 3.195 6.32-.094-.046-2.271-.028-2.271-.028 0 3.114 1.5 5.952 3.873 7.754a.999.999 0 00-.731 1.284c1.004 3.1 2.476 5.438 5.514 6.35a16.74 16.74 0 01-8.28 2.159c-.688 0-1.337-.038-1.982-.117-.463-.057 8.42 4.917 13.403 4.917 16.338 0 26.102-12.16 26.102-24.884 0-.212-.004-.424-.01-.634a18.275 18.275 0 004.215-4.468 1 1 0 00-.067-1.197z'
      />
      <path
        fill='#324561'
        d='M16.061 34.775h-.02c-4.2-.082-7.887-2.801-9.171-6.766a1.001 1.001 0 01.731-1.284c-2.373-1.802-3.873-4.64-3.873-7.754v-.103a1 1 0 011.476-.879c.092.05.184.098.277.144a9.693 9.693 0 01-1.678-5.454 9.64 9.64 0 011.334-4.911 1.004 1.004 0 011.371-.351c.476.28.633.894.352 1.369a7.653 7.653 0 00-1.055 3.894c0 2.592 1.3 5.002 3.478 6.448.372.247.534.711.399 1.137-.136.425-.549.68-.983.696a9.779 9.779 0 01-2.825-.508 7.81 7.81 0 006.125 6.115 1 1 0 01.069 1.945 9.793 9.793 0 01-2.642.349 7.85 7.85 0 006.655 3.913 1 1 0 01-.02 2z'
      />
      <path
        fill='#324561'
        d='M16.524 42.318c-4.983 0-9.846-1.41-14.06-4.079a1 1 0 111.07-1.69 24.242 24.242 0 0012.989 3.769c15.086 0 24.102-12.144 24.102-23.884a1 1 0 112 0c.001 12.724-9.763 25.884-26.101 25.884z'
      />
    </svg>
  )
}
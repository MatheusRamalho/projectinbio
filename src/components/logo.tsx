import { SVGProps } from 'react'

export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={27}
      height={32}
      viewBox="0 0 27 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.543 0C.69 0 0 .682 0 1.524v7.619c0 .841.69 1.524 1.543 1.524h7.714c.852 0 1.543.682 1.543 1.523v7.78c0 .753.618 1.363 1.38 1.363h4.02c5.965 0 10.8-4.775 10.8-10.666S22.165 0 16.2 0H1.543zm0 21.333C.69 21.333 0 22.016 0 22.857v7.62C0 31.316.69 32 1.543 32h7.714c.852 0 1.543-.682 1.543-1.524v-7.619c0-.841-.69-1.524-1.543-1.524H1.543z"
        fill="#6A43FB"
      />
    </svg>
  )
}

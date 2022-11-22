interface IIconType {
  className: string
}

export function SortIcon({ className }: IIconType) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4
      9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177
      64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
      />
    </svg>
  )
}

export function SortUpIcon({ className }: IIconType) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z" />
    </svg>
  )
}

export function SortDownIcon({ className }: IIconType) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z" />
    </svg>
  )
}

export function ChevronDoubleLeftIcon({ className }: IIconType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
      />
    </svg>
  )
}

export function ChevronDoubleRightIcon({ className }: IIconType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 5l7 7-7 7M5 5l7 7-7 7"
      />
    </svg>
  )
}

export function ChevronRightIcon({ className }: IIconType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  )
}

export function ChevronLeftIcon({ className }: IIconType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  )
}

export function PlusIcon({ className }: IIconType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4v16m8-8H4"
      />
    </svg>
  )
}

export function MinusIcon({ className }: IIconType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 12H4"
      />
    </svg>
  )
}

export function ColumnsIcon({ className }: IIconType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18" />
    </svg>
  )
}

export function DotsCross() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.88281 16.0918C7.88281 15.6133 8.05143 15.2054 8.38867 14.8682C8.73047 14.5309 9.13835 14.3623 9.6123 14.3623C10.0908
        14.3623 10.4987 14.5309 10.8359 14.8682C11.1777 15.2054 11.3486 15.6133 11.3486 16.0918C11.3486 16.5703 11.1777 16.9805 10.8359
        17.3223C10.4987 17.6595 10.0908 17.8281 9.6123 17.8281C9.13835 17.8281 8.73047 17.6595 8.38867 17.3223C8.05143 16.9805 7.88281
        16.5703 7.88281 16.0918ZM14.791 16.0918C14.791 15.6133 14.9596 15.2054 15.2969 14.8682C15.6387 14.5309 16.0465 14.3623 16.5205
        14.3623C16.999 14.3623 17.4069 14.5309 17.7441 14.8682C18.0859 15.2054 18.2568 15.6133 18.2568 16.0918C18.2568 16.5703 18.0859
        16.9805 17.7441 17.3223C17.4069 17.6595 16.999 17.8281 16.5205 17.8281C16.0465 17.8281 15.6387 17.6595 15.2969 17.3223C14.9596 16.9805
        14.791 16.5703 14.791 16.0918ZM21.6992 16.0918C21.6992 15.6133 21.8678 15.2054 22.2051 14.8682C22.5469 14.5309 22.9548 14.3623 23.4287
        14.3623C23.9072 14.3623 24.3151 14.5309 24.6523 14.8682C24.9941 15.2054 25.165 15.6133 25.165 16.0918C25.165 16.5703 24.9941 16.9805
        24.6523 17.3223C24.3151 17.6595 23.9072 17.8281 23.4287 17.8281C22.9548 17.8281 22.5469 17.6595 22.2051 17.3223C21.8678 16.9805 21.6992
        16.5703 21.6992 16.0918Z"
        fill="black"
        fillOpacity="0.25"
      />
    </svg>
  )
}

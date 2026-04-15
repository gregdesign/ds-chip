import type { HTMLAttributes, ReactNode } from 'react'
import './Chip.css'

function DefaultAddIcon() {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      aria-hidden
      focusable="false"
      className="chip__svg"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        d="M8 3.25v9.5M3.25 8h9.5"
      />
    </svg>
  )
}

export type ChipProps = {
  children: ReactNode
  /** Omit the leading icon, or pass a custom icon node. When omitted, the default “add” glyph is shown. */
  icon?: ReactNode | null
} & HTMLAttributes<HTMLSpanElement>

export function Chip({
  children,
  icon,
  className,
  ...rest
}: ChipProps) {
  const resolvedIcon = icon === undefined ? <DefaultAddIcon /> : icon

  return (
    <span
      className={['chip', className].filter(Boolean).join(' ')}
      data-component="chip"
      {...rest}
    >
      {resolvedIcon ? (
        <span className="chip__icon">{resolvedIcon}</span>
      ) : null}
      <span className="chip__label">{children}</span>
    </span>
  )
}

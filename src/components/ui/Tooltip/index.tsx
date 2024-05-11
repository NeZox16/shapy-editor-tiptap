'use client'

import Tippy from '@tippyjs/react/headless'
import React, { useCallback } from 'react'

import { TippyProps, TooltipProps } from './types'
import { cn } from '@/src/lib/utils'

const isMac = typeof window !== 'undefined' ? navigator.platform.toUpperCase().indexOf('MAC') >= 0 : false

const ShortcutKey = ({ children }: { children: string }): JSX.Element => {
  const className =
    'inline-flex items-center justify-center w-5 h-5 p-1 text-[0.625rem] rounded font-semibold leading-none border border-gs-default-ghost text-gs-white border-b-2'

  if (children === 'Mod') {
    return <kbd className={className}>{isMac ? '⌘' : 'Ctrl'}</kbd> // ⌃
  }

  if (children === 'Shift') {
    return <kbd className={className}>⇧</kbd>
  }

  if (children === 'Alt') {
    return <kbd className={className}>{isMac ? '⌥' : 'Alt'}</kbd>
  }

  return <kbd className={className}>{children}</kbd>
}

export const Tooltip = ({
  children,
  enabled = true,
  title,
  shortcut,
  tippyOptions = {},
  className
}: TooltipProps): JSX.Element => {
  const renderTooltip = useCallback(
    (attrs: TippyProps) => (
      <span
        className={cn("flex items-center gap-2 px-2.5 py-1 bg-gs-default border border-gs-default-ghost rounded-lg shadow-sm z-[999]", className)}
        tabIndex={-1}
        data-placement={attrs['data-placement']}
        data-reference-hidden={attrs['data-reference-hidden']}
        data-escaped={attrs['data-escaped']}
      >
        {title && <span className="text-xs font-medium text-gs-white">{title}</span>}
        {shortcut && (
          <span className="flex items-center gap-2">
            {shortcut.map(shortcutKey => (
              <ShortcutKey key={shortcutKey}>{shortcutKey}</ShortcutKey>
            ))}
          </span>
        )}
      </span>
    ),
    [shortcut, title],
  )

  if (enabled) {
    return (
      <Tippy
        delay={500}
        offset={[0, 8]}
        touch={false}
        zIndex={99999}
        appendTo={document.body}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...tippyOptions}
        render={renderTooltip}
      >
        <span>{children}</span>
      </Tippy>
    )
  }

  return <>{children}</>
}

export default Tooltip

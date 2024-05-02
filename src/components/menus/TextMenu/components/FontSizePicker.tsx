import { DropdownButton, DropdownCategoryTitle } from '@/src/components/ui/Dropdown'
import { Icon } from '@/src/components/ui/Icon'
import { Surface } from '@/src/components/ui/Surface'
import { Toolbar } from '@/src/components/ui/Toolbar'
import * as Dropdown from '@radix-ui/react-dropdown-menu'
import { useCallback } from 'react'


export type FontSizePickerProps = {
  onChange: (value: string) => void // eslint-disable-line no-unused-vars
  value: string
  lang?: any
}

export const FontSizePicker = ({ onChange, value, lang }: FontSizePickerProps) => {
  const FONT_SIZES = [
    { label: lang.TextMenu.fontSize.xs, value: '12px' },
    { label: lang.TextMenu.fontSize.sm, value: '14px' },
    { label: lang.TextMenu.fontSize.md, value: '' },
    { label: lang.TextMenu.fontSize.lg, value: '18px' },
    { label: lang.TextMenu.fontSize.xl, value: '24px' },
  ]
  const currentValue = FONT_SIZES.find(size => size.value === value)
  const currentSizeLabel = currentValue?.label.split(' ')[0] || lang.TextMenu.fontSize.md

  const selectSize = useCallback((size: string) => () => onChange(size), [onChange])

  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <Toolbar.Button active={!!currentValue?.value}>
          {currentSizeLabel}
          <Icon name="ChevronDown" className="w-2 h-2" />
        </Toolbar.Button>
      </Dropdown.Trigger>
      <Dropdown.Content asChild>
        <Surface className="flex flex-col gap-1 px-2 py-4">
          {FONT_SIZES.map(size => (
            <DropdownButton
              isActive={value === size.value}
              onClick={selectSize(size.value)}
              key={`${size.label}_${size.value}`}
            >
              <span style={{ fontSize: size.value }}>{size.label}</span>
            </DropdownButton>
          ))}
        </Surface>
      </Dropdown.Content>
    </Dropdown.Root>
  )
}

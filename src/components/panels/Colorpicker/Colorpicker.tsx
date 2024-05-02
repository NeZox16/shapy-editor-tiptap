import { useCallback, useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { ColorButton } from './ColorButton'
import { Toolbar } from '../../ui/Toolbar'
import { Icon } from '../../ui/Icon'
import { themeColors } from '@/src/lib/constants'

export type ColorPickerProps = {
  color?: string
  onChange?: (color: string) => void
  onClear?: () => void
  lang?: any
}

export const ColorPicker = ({ color, onChange, onClear, lang }: ColorPickerProps) => {
  const [colorInputValue, setColorInputValue] = useState(color || '')

  const handleColorUpdate = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setColorInputValue(event.target.value)
  }, [])

  const handleColorChange = useCallback(() => {
    const isCorrectColor = /^#([0-9A-F]{3}){1,2}$/i.test(colorInputValue)

    if (!isCorrectColor) {
      if (onChange) {
        onChange('')
      }

      return
    }

    if (onChange) {
      onChange(colorInputValue)
    }
  }, [colorInputValue, onChange])

  return (
    <div className="flex flex-col gap-2">
      <HexColorPicker className="w-full" color={color || ''} onChange={onChange} />
      <input
        type="text"
        className="w-full p-2 text-black bg-white border rounded  border-neutral-200 d focus:outline-1 focus:ring-0 focus:outline-neutral-300"
        placeholder="#000000"
        value={colorInputValue}
        onChange={handleColorUpdate}
        onBlur={handleColorChange}
      />
      <div className="flex flex-wrap items-center gap-1 max-w-[15rem]">
        {themeColors.map(currentColor => (
          <ColorButton
            active={currentColor === color}
            color={currentColor}
            key={currentColor}
            onColorChange={onChange}
          />
        ))}
        <Toolbar.Button tooltip="Сбросить цвет по умолчанию" onClick={onClear}>
          <Icon name="Undo" />
        </Toolbar.Button>
      </div>
    </div>
  )
}

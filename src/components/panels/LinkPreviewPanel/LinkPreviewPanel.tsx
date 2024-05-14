import { Icon } from '@/src/components/ui/Icon'
import { Surface } from '@/src/components/ui/Surface'
import { Toolbar } from '@/src/components/ui/Toolbar'
import Tooltip from '@/src/components/ui/Tooltip'
import Link from 'next/link'

export type LinkPreviewPanelProps = {
  url: string
  onEdit: () => void
  onClear: () => void
}

export const LinkPreviewPanel = ({ onClear, onEdit, url = '/' }: LinkPreviewPanelProps) => {
  return (
    <Surface className="flex items-center gap-2 p-2">
      <Link href={url} target="_blank" rel="noopener noreferrer" className="text-sm underline break-all">
        {url}
      </Link>
      <Toolbar.Divider />
      <Tooltip title="Редактировать ссылку">
        <Toolbar.Button onClick={onEdit}>
          <Icon name="Pen" />
        </Toolbar.Button>
      </Tooltip>
      <Tooltip title="Удалить ссылку">
        <Toolbar.Button onClick={onClear}>
          <Icon name="Trash2" />
        </Toolbar.Button>
      </Tooltip>
    </Surface>
  )
}

import { Icon } from '@/src/components/ui/Icon'
import { Surface } from '@/src/components/ui/Surface'
import { Toolbar } from '@/src/components/ui/Toolbar'
import Tooltip from '@/src/components/ui/Tooltip'

export type LinkPreviewPanelProps = {
  url: string
  onEdit: () => void
  onClear: () => void
  lang?: any
}

export const LinkPreviewPanel = ({ onClear, onEdit, url, lang }: LinkPreviewPanelProps) => {
  return (
    <Surface className="flex items-center gap-2 p-2">
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm underline break-all">
        {url}
      </a>
      <Toolbar.Divider />
      <Tooltip title={lang.LinkPreviewPanel.edit}>
        <Toolbar.Button onClick={onEdit}>
          <Icon name="Pen" />
        </Toolbar.Button>
      </Tooltip>
      <Tooltip title={lang.LinkPreviewPanel.remove}>
        <Toolbar.Button onClick={onClear}>
          <Icon name="Trash2" />
        </Toolbar.Button>
      </Tooltip>
    </Surface>
  )
}

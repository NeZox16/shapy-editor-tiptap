import React, { FC, ReactNode, Ref, RefObject, useCallback, useState } from 'react'


import { cn } from '@/src/lib/utils'
import { Editor, NodeViewWrapper } from '@tiptap/react'
import { CustomIcon } from '@/src/components/ui/Icon'

interface HintCompProps {
    // children: ReactNode
    editor?:  Editor
    ref?: any
}

type THints = {
    id: number
    className: string
    hint: 'info' | 'warning' | 'danger' | 'success' | 'notice' | 'importent' | 'note' | 'tip' | 'question'
    icon: {
        name: string
        style?: {}
    }
}


const hints: THints[] = [
    {
        id: 0,
        className: 'border-[#284F9B] bg-[#284F9B]/10',
        hint: 'info',
        icon: {
            name: 'Info',
            style: {
                fill: 'transparent',
                stroke: '#284F9B'
            }
        }
    },
    {
        id: 1,
        className: 'border-[#F27E3D] bg-[#F27E3D]/10',
        hint: 'warning',
        icon: {
            name: "Warning",
            style: {
                fill: '#F27E3D'
            }
        }
    },
    {
        id: 2,
        className: 'border-[#A42E2E] bg-[#A42E2E]/10',
        hint: 'danger',
        icon: {
            name: "Danger",
            style: {
                fill: '#A42E2E'
            }
        }
    },
    {
        id: 3,
        className: 'border-[#17DC9B] bg-[#17DC9B]/10',
        hint: 'success',
        icon: {
            name: "Success",
            style: {
                fill: "#17DC9B"
            }
        }
    },
    {
        id: 4,
        className: 'border-[#0D09D3] bg-[#0D09D3]/10',
        hint: 'notice',
        icon: {
            name: "Notice",
            style: {
                fill: "#0D09D3"
            }
        }
    },
    {
        id: 5,
        className: 'border-[#4D0C8D] bg-[#4D0C8D]/10',
        hint: 'importent',
        icon: {
            name: "Importent",
            style: {
                fill: "#4D0C8D"
            }
        }
    },
    {
        id: 6,
        className: 'border-[#4A4E4E] bg-[#4A4E4E]/10',
        hint: 'note',
        icon:{
            name: "Note",
            style: {
                fill: "#4A4E4E"
            }
        }
    },
    {
        id: 7,
        className: 'border-[#11B85E] bg-[#11B85E]/10',
        hint: 'tip',
        icon: {
            name: "Tip",
            style: {
                fill: "#11B85E"
            }
        }
    },
    {
        id: 8,
        className: 'border-[#F0F35A] bg-[#F0F35A]/10',
        hint: 'question',
        icon: {
            name: "Question",
            style: {
                fill: "#F0F35A"
            }
        } 
    },
]

export const HintComp: FC<HintCompProps> = ({editor, ref}, props) => {
    const [value, setValue] = useState(0)


    const increment = () => {
        setValue((value + 1) % hints.length)
    }
    
    const handlerClick = useCallback((hint: 'info' | 'warning' | 'danger' | 'success' | 'notice' | 'importent' | 'note' | 'tip' | 'question') => {
            editor?.chain().focus(undefined, { scrollIntoView: false }).setHint(hint).run()
    }, [editor])


  return <button ref={ref} data-hint={hints[value].hint} className={cn('w-6 h-6 ml-2')} onClick={() => {increment(); handlerClick(hints[(value + 1) % hints.length].hint)}} {...props}>
        {hints[value] ? <CustomIcon name={hints[value].icon.name} {...hints[value].icon?.style} /> : ''}
    </button>
}

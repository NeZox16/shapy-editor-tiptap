import React, { FC, ReactNode, Ref, RefObject, useCallback, useState } from 'react'


import { cn } from '@/src/lib/utils'
import { Editor, NodeViewWrapper } from '@tiptap/react'
import { CustomIcon } from '@/src/components/ui/Icon'
import { Toolbar } from '@/src/components/ui/Toolbar'
import { Tooltip } from '@/src/components/ui/Tooltip/Tooltip'

interface HintCompProps {
    editor?:  Editor
    ref?: any
    attrs: 'info' | 'warning' | 'danger' | 'success' | 'notice' | 'important' | 'note' | 'tip' | 'question'
}

type THints = {
    id: number
    className: string
    hint: 'info' | 'warning' | 'danger' | 'success' | 'notice' | 'important' | 'note' | 'tip' | 'question'
    icon: {
        name: string
        style?: {}
    }
}


const hints = {
    "info": {
        id: 0,
        className: 'border-[#284F9B] bg-[#284F9B]/50',
        hint: 'info',
        arrowFill: '284F9B',
        tooltip: 'Информация',
        icon: {
            name: 'Info',
            style: {
                fill: 'transparent',
                stroke: '#284F9B'
            }
        }
    },
    "warning": {
        id: 1,
        className: 'border-[#F27E3D] bg-[#F27E3D]/50',
        hint: 'warning',
        arrowFill: 'F27E3D',
        tooltip: 'Предостережение',
        icon: {
            name: "Warning",
            style: {
                fill: '#F27E3D'
            }
        }
    },
    "danger": {
        id: 2,
        className: 'border-[#A42E2E] bg-[#A42E2E]/50',
        hint: 'danger',
        arrowFill: 'A42E2E',
        tooltip: 'Опасно',
        icon: {
            name: "Danger",
            style: {
                fill: '#A42E2E'
            }
        }
    },
    "success": {
        id: 3,
        className: 'border-[#17DC9B] bg-[#17DC9B]/50',
        hint: 'success',
        arrowFill: '17DC9B',
        tooltip: 'Успех',
        icon: {
            name: "Success",
            style: {
                fill: "#17DC9B"
            }
        }
    },
    "notice": {
        id: 4,
        className: 'border-[#0D09D3] bg-[#0D09D3]/50',
        hint: 'notice',
        arrowFill: '0D09D3',
        tooltip: 'Внимание',
        icon: {
            name: "Notice",
            style: {
                fill: "#0D09D3"
            }
        }
    },
    "important": {
        id: 5,
        className: 'border-[#4D0C8D] bg-[#4D0C8D]/50',
        hint: 'important',
        arrowFill: '4D0C8D',
        tooltip: 'Важно',
        icon: {
            name: "Important",
            style: {
                fill: "#4D0C8D"
            }
        }
    },
    "note": {
        id: 6,
        className: 'border-[#4A4E4E] bg-[#4A4E4E]/50',
        hint: 'note',
        arrowFill: '4A4E4E',
        tooltip: 'Примечание',
        icon:{
            name: "Note",
            style: {
                fill: "#4A4E4E"
            }
        }
    },
    "tip": {
        id: 7,
        className: 'border-[#11B85E] bg-[#11B85E]/50',
        hint: 'tip',
        arrowFill: '11B85E',
        tooltip: 'Совет',
        icon: {
            name: "Tip",
            style: {
                fill: "#11B85E"
            }
        }
    },
    "question": {
        id: 8,
        className: 'border-[#F0F35A] bg-[#F0F35A]/50',
        hint: 'question',
        arrowFill: 'F0F35A',
        tooltip: 'Вопрос?',
        icon: {
            name: "Question",
            style: {
                fill: "#F0F35A"
            }
        } 
    },
}


export const HintComp: FC<HintCompProps> = ({ editor, attrs }) => {
    const [currentHint, setCurrentHint] = useState(attrs); 
    const isEditable = editor?.isEditable

    const handleClick = (hint: any) => {
        setCurrentHint(hint);
        if (editor) {
            editor.chain().focus(undefined, { scrollIntoView: false }).setHint(hint).run();
            editor.isActive('hintType', { hint: hint });
        }
    };

    const getHint = () => {
        const keys = Object.keys(hints);
        const currentIndex = keys.indexOf(currentHint);
        const nextIndex = (currentIndex + 1) % keys.length;
        return keys[nextIndex];
    };
    
    const editBlock = isEditable ? () => handleClick(getHint()) : () => {}

    return (
            <Tooltip
                targetChildren={hints[currentHint] && hints[currentHint].icon && ( 
                    <CustomIcon className='size-7' name={hints[currentHint].icon.name} {...hints[currentHint].icon.style} />
                )}
                targetClassName={cn('ml-2', isEditable && 'cursor-poiter', !isEditable && 'cursor-default')}
                contentClassName={hints[currentHint] && hints[currentHint].className}
                onClick={editBlock}
                dataHint={(hints[currentHint] && hints[currentHint].hint) && hints[currentHint].hint}
                arrowFill={hints[currentHint] && hints[currentHint].arrowFill}
            >
                {hints[currentHint]?.tooltip && hints[currentHint].tooltip}
            </Tooltip>
    );
};

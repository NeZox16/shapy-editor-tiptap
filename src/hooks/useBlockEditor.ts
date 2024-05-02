import { Editor, useEditor } from "@tiptap/react";
import type { Doc as YDoc } from "yjs";

import { ExtensionKit } from "@/src/extensions/extension-kit";
import { initialContent } from "@/src/lib/data/initialContent";

declare global {
  interface Window {
    editor: Editor | null;
  }
}

export const useBlockEditor = ({ ydoc }: { ydoc: YDoc }) => {
  const editor = useEditor(
    {
      autofocus: true,
      onCreate: ({ editor }) => {
        if (editor.isEmpty) {
          editor.commands.setContent(initialContent);
        }
      },
      extensions: [...ExtensionKit({})],
      editorProps: {
        attributes: {
          autocomplete: "off",
          autocorrect: "off",
          autocapitalize: "off",
          class: "min-h-full",
        },
      },
    },
    []
  );

  return { editor };
};

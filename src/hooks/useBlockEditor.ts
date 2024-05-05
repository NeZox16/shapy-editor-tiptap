import { Editor, useEditor } from "@tiptap/react";
import type { Doc as YDoc } from "yjs";

import { ExtensionKit } from "@/src/extensions/extension-kit";
import { initialContent } from "@/src/lib/data/initialContent";

declare global {
  interface Window {
    editor: Editor | null;
  }
}

type TUseBlockEditor = {
  editable?: boolean;
};

export const useBlockEditor = ({ editable = true }: TUseBlockEditor) => {
  const editor = useEditor(
    {
      editable: editable,
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
          class: "",
        },
      },
    },
    []
  );

  return { editor };
};

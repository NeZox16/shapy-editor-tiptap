import { Editor, useEditor } from "@tiptap/react";
import type { Doc as YDoc } from "yjs";

import { ExtensionKit } from "@/src/extensions/extension-kit";

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
          const item = window.localStorage.getItem("p_d");
          if (item) {
            editor.commands.setContent(JSON.parse(item));
          }
        }
      },
      onUpdate: ({ editor }) => {
        const json = editor.getJSON();
        window.localStorage.setItem("p_d", JSON.stringify(json));
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

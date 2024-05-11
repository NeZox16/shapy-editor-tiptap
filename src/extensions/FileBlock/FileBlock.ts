import { ReactNodeViewRenderer } from "@tiptap/react";

import { Node, mergeAttributes } from "@tiptap/core";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    fileBlock: {
      setFileBlock: () => ReturnType;
    };
  }
}

export const FileBlock = Node.create({
  name: "fileBlock",

  parseHTML() {
    return [
      {
        tag: "div",
      },
    ];
  },

  renderHTML({ HTMLAttributes, node }) {
    return ["div", mergeAttributes(HTMLAttributes, HTMLAttributes), 0];
  },
});

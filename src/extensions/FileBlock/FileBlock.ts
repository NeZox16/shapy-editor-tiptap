import { ReactNodeViewRenderer } from "@tiptap/react";

import { Node, mergeAttributes } from "@tiptap/core";
import { FileBlockView } from "./view";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    fileBlock: {
      setFileBlock: (name: string, size: string, type: string) => ReturnType;
    };
  }
}

export const FileBlock = Node.create({
  name: "fileBlock",

  group: "block",

  defining: true,

  isolating: true,

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

  addAttributes() {
    return {
      name: {
        default: "",
        parseHTML: (element) => element.getAttribute("data-name"),
        renderHTML: (attributes) => ({
          "data-name": attributes.nameFile,
        }),
      },
      size: {
        default: "",
        parseHTML: (element) => element.getAttribute("data-size"),
        renderHTML: (attributes) => ({
          "data-size": attributes.sizeFile,
        }),
      },
      type: {
        default: "",
        parseHTML: (element) => element.getAttribute("data-type"),
        renderHTML: (attributes) => ({
          "data-type": attributes.typeFile,
        }),
      },
    };
  },

  addCommands() {
    return {
      setFileBlock:
        (name, type, size) =>
        ({ commands }) => {
          return commands.insertContent({
            type: "fileBlock",
            attrs: { name: name, size: size, type: type },
          });
        },
    };
  },

  addNodeView() {
    return ReactNodeViewRenderer(FileBlockView);
  },
});

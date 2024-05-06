import { Node } from "@tiptap/core";

export const HintContent = Node.create({
  name: "hintContent",

  content: "paragraph*",

  defining: true,

  marks: "_",

  parseHTML() {
    return [
      {
        tag: "blockquote",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["blockquote", HTMLAttributes, 0];
  },

  addKeyboardShortcuts() {
    return {
      Backspace: () => false,
    };
  },
});

import { Node, ReactNodeViewRenderer } from "@tiptap/react";
import { mergeAttributes } from "@tiptap/core";
import { HintView } from "../components";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    hint: {
      setHint: (
        hint:
          | "info"
          | "warning"
          | "danger"
          | "success"
          | "notice"
          | "importent"
          | "note"
          | "tip"
          | "question"
      ) => ReturnType;
    };
  }
}

export const HintType = Node.create({
  name: "hintType",

  group: "block",

  isolating: true,

  defining: true,

  parseHTML() {
    return [
      {
        tag: "hintType",
      },
    ];
  },

  renderHTML({ HTMLAttributes, node }) {
    return [
      "hintType",
      mergeAttributes(HTMLAttributes, { "data-hint": node.attrs.hint }),
    ];
  },

  addAttributes() {
    return {
      hint: {
        default: "info",
        parseHTML: (element) => element.getAttribute("data-hint"),
        renderHTML: (attributes) => ({
          "data-hint": attributes.hint,
        }),
      },
    };
  },
  addCommands() {
    return {
      setHint:
        (hint) =>
        ({ commands }) => {
          return commands.updateAttributes("hintType", { hint });
        },
    };
  },
  addNodeView() {
    return ReactNodeViewRenderer(HintView);
  },
});

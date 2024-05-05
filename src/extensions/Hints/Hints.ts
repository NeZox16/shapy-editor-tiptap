import { Node, ReactNodeViewRenderer } from "@tiptap/react";
import { mergeAttributes } from "@tiptap/core";
import { HintView } from "./components";
import { HintContent } from "./HintContent";
import { HintType } from "./HintIcon";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    hintBlock: {
      setInsertHint: () => ReturnType;
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

export const extensionName = "blockhint";

export const Hints = Node.create({
  name: "blockhint",

  group: "block",

  content: "hintType hintContent",

  isolating: true,

  addExtensions() {
    return [HintType, HintContent];
  },

  renderHTML({ HTMLAttributes, node }) {
    return [
      "figure",
      mergeAttributes(HTMLAttributes, { "data-type": this.name }),
      ["div", mergeAttributes(HTMLAttributes, { "data-type": this.name }), 0],
    ];
  },

  addKeyboardShortcuts() {
    return {
      Enter: () => false,
    };
  },

  addAttributes() {
    return {
      ...this.parent?.(),
    };
  },

  addCommands() {
    return {
      setInsertHint:
        () =>
        ({ state, chain }) => {
          const position = state.selection.$from.start();
          const selectionContent = state.selection.content();

          return chain()
            .focus()
            .insertContent({
              type: this.name,
              content: [
                {
                  type: "hintType",
                },
                {
                  type: "hintContent",
                  content: selectionContent.content.toJSON() || [
                    {
                      type: "paragraph",
                      attrs: {
                        textAlign: "left",
                      },
                    },
                  ],
                },
              ],
            })
            .focus(position + 1)
            .run();
        },
    };
  },
});

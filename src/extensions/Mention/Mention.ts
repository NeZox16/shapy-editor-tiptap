import { Mention as MentionTiptap } from "@tiptap/extension-mention";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { mergeAttributes } from "@tiptap/core";
import { MentionView } from "./view/MentionView";

export const Mention = MentionTiptap.extend({
  name: "mantionCard",

  parseHTML() {
    return [
      {
        tag: "mention-card",
      },
    ];
  },
  renderHTML({ HTMLAttributes, node }) {
    return [
      "mention-card",
      mergeAttributes(
        { href: `/profile/${node.attrs.label ?? node.attrs.id}` },
        HTMLAttributes
      ),
    ];
  },
  addNodeView() {
    return ReactNodeViewRenderer(MentionView);
  },
});

import { Editor } from "@tiptap/react";
import { useMemo } from "react";
import { ContentPickerOptions } from "../components/ContentTypePicker";

export const useTextmenuContentTypes = (editor: Editor, lang: any) => {
  const options = useMemo<ContentPickerOptions>(() => {
    return [
      {
        type: "category",
        label: lang.hierarchy.label,
        id: "hierarchy",
      },
      {
        icon: "Pilcrow",
        onClick: () =>
          editor
            .chain()
            .focus()
            .lift("taskItem")
            .liftListItem("listItem")
            .setParagraph()
            .run(),
        id: "paragraph",
        disabled: () => !editor.can().setParagraph(),
        isActive: () =>
          editor.isActive("paragraph") &&
          !editor.isActive("orderedList") &&
          !editor.isActive("bulletList") &&
          !editor.isActive("taskList"),
        label: lang.hierarchy.p,
        type: "option",
      },
      {
        icon: "Heading1",
        onClick: () =>
          editor
            .chain()
            .focus()
            .lift("taskItem")
            .liftListItem("listItem")
            .setHeading({ level: 1 })
            .run(),
        id: "heading1",
        disabled: () => !editor.can().setHeading({ level: 1 }),
        isActive: () => editor.isActive("heading", { level: 1 }),
        label: lang.hierarchy.h1,
        type: "option",
      },
      {
        icon: "Heading2",
        onClick: () =>
          editor
            .chain()
            .focus()
            .lift("taskItem")
            .liftListItem("listItem")
            .setHeading({ level: 2 })
            .run(),
        id: "heading2",
        disabled: () => !editor.can().setHeading({ level: 2 }),
        isActive: () => editor.isActive("heading", { level: 2 }),
        label: lang.hierarchy.h2,
        type: "option",
      },
      {
        icon: "Heading3",
        onClick: () =>
          editor
            .chain()
            .focus()
            .lift("taskItem")
            .liftListItem("listItem")
            .setHeading({ level: 3 })
            .run(),
        id: "heading3",
        disabled: () => !editor.can().setHeading({ level: 3 }),
        isActive: () => editor.isActive("heading", { level: 3 }),
        label: lang.hierarchy.h3,
        type: "option",
      },
      {
        type: "category",
        label: lang.lists.label,
        id: "lists",
      },
      {
        icon: "List",
        onClick: () => editor.chain().focus().toggleBulletList().run(),
        id: "bulletList",
        disabled: () => !editor.can().toggleBulletList(),
        isActive: () => editor.isActive("bulletList"),
        label: lang.lists.ul,
        type: "option",
      },
      {
        icon: "ListOrdered",
        onClick: () => editor.chain().focus().toggleOrderedList().run(),
        id: "orderedList",
        disabled: () => !editor.can().toggleOrderedList(),
        isActive: () => editor.isActive("orderedList"),
        label: lang.lists.ol,
        type: "option",
      },
      {
        icon: "ListTodo",
        onClick: () => editor.chain().focus().toggleTaskList().run(),
        id: "todoList",
        disabled: () => !editor.can().toggleTaskList(),
        isActive: () => editor.isActive("taskList"),
        label: lang.lists.todo,
        type: "option",
      },
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor, editor.state]);

  return options;
};

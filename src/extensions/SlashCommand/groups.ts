import { Group } from "./types";

export const GROUPS: Group[] = [
  {
    name: "format",
    title: "Формат",
    commands: [
      {
        name: "heading1",
        label: "Заголовок 1",
        iconName: "Heading1",
        description: "High priority section title",
        aliases: ["h1"],
        action: (editor) => {
          editor.chain().focus().setHeading({ level: 1 }).run();
        },
      },
      {
        name: "heading2",
        label: "Заголовок 2",
        iconName: "Heading2",
        description: "Medium priority section title",
        aliases: ["h2"],
        action: (editor) => {
          editor.chain().focus().setHeading({ level: 2 }).run();
        },
      },
      {
        name: "heading3",
        label: "Заголовок 3",
        iconName: "Heading3",
        description: "Low priority section title",
        aliases: ["h3"],
        action: (editor) => {
          editor.chain().focus().setHeading({ level: 3 }).run();
        },
      },
      {
        name: "bulletList",
        label: "Упорядоченный список",
        iconName: "List",
        description: "Unordered list of items",
        aliases: ["ul"],
        action: (editor) => {
          editor.chain().focus().toggleBulletList().run();
        },
      },
      {
        name: "numberedList",
        label: "Нумерованный список",
        iconName: "ListOrdered",
        description: "Ordered list of items",
        aliases: ["ol"],
        action: (editor) => {
          editor.chain().focus().toggleOrderedList().run();
        },
      },
      {
        name: "taskList",
        label: "Список задач",
        iconName: "ListTodo",
        description: "Task list with todo items",
        aliases: ["todo"],
        action: (editor) => {
          editor.chain().focus().toggleTaskList().run();
        },
      },
      {
        name: "blockquote",
        label: "Блок-цитата",
        iconName: "Quote",
        description: "Element for quoting",
        action: (editor) => {
          editor.chain().focus().setBlockquote().run();
        },
      },
      {
        name: "hint",
        label: "Блок-подсказок",
        iconName: "Info",
        description: "Element for hinting",
        action: (editor) => {
          editor.chain().focus().setInsertHint().run();
        },
      },
      {
        name: "codeBlock",
        label: "Блок кода",
        iconName: "SquareCode",
        description: "Code block with syntax highlighting",
        shouldBeHidden: (editor) => editor.isActive("columns"),
        action: (editor) => {
          editor.chain().focus().setCodeBlock().run();
        },
      },
    ],
  },
  {
    name: "insert",
    title: "Вставка",
    commands: [
      {
        name: "table",
        label: "Таблица",
        iconName: "Table",
        description: "Insert a table",
        shouldBeHidden: (editor) => editor.isActive("columns"),
        action: (editor) => {
          editor
            .chain()
            .focus()
            .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
            .run();
        },
      },
      {
        name: "image",
        label: "Изображение",
        iconName: "Image",
        description: "Insert an image",
        aliases: ["img"],
        action: (editor) => {
          editor.chain().focus().setImageUpload().run();
        },
      },
      {
        name: "columns",
        label: "Столбцы",
        iconName: "Columns2",
        description: "Add two column content",
        aliases: ["cols"],
        shouldBeHidden: (editor) => editor.isActive("columns"),
        action: (editor) => {
          editor
            .chain()
            .focus()
            .setColumns()
            .focus(editor.state.selection.head - 1)
            .run();
        },
      },
      {
        name: "horizontalRule",
        label: "Горизонтальная линия",
        iconName: "Minus",
        description: "Insert a horizontal divider",
        aliases: ["hr"],
        action: (editor) => {
          editor.chain().focus().setHorizontalRule().run();
        },
      },
      {
        name: "toc",
        label: "Оглавление",
        iconName: "Book",
        aliases: ["outline"],
        description: "Insert a table of contents",
        shouldBeHidden: (editor) => editor.isActive("columns"),
        action: (editor) => {
          editor.chain().focus().insertTableOfContents().run();
        },
      },
    ],
  },
];

export default GROUPS;

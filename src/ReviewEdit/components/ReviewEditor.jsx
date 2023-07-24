import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';

import { InputBase, ToggleButtonGroup, ToggleButton } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBold,
  faItalic,
  faStrikethrough,
  faHighlighter,
  faEye,
  faHeading,
  faListUl,
  faListOl,
  faQuoteRight,
} from '@fortawesome/free-solid-svg-icons';

import Spoiler from '../util/Spoiler';

const Title = ({ onReviewTitleChange }) => {
  return (
    <InputBase
      label='title'
      placeholder='Title (optional)'
      fullWidth
      onChange={(event) => {
        onReviewTitleChange(event.target.value);
      }}
      sx={{
        color: 'white',
        backgroundColor: '#262626',
        borderRadius: '20px',
        px: 1,
      }}
    />
  );
};

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <ToggleButtonGroup
      aria-label='text formatting'
      sx={{
        // Apply to all ToggleButton in this group
        '.MuiToggleButtonGroup-grouped': {
          width: { xs: 36, md: 48 },
          color: 'white',
          '&.Mui-selected': {
            color: 'white',
            backgroundColor: '#383838',
          },
        },
      }}
    >
      {/* Bold */}
      <ToggleButton
        aria-label='bold'
        value='bold'
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        selected={editor.isActive('bold') ? true : false}
      >
        <FontAwesomeIcon icon={faBold} />
      </ToggleButton>

      {/* Italic */}
      <ToggleButton
        aria-label='italic'
        value='italic'
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        selected={editor.isActive('italic') ? true : false}
      >
        <FontAwesomeIcon icon={faItalic} />
      </ToggleButton>

      {/* Strike */}
      <ToggleButton
        aria-label='strike'
        value='strike'
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        selected={editor.isActive('strike') ? true : false}
      >
        <FontAwesomeIcon icon={faStrikethrough} />
      </ToggleButton>

      {/* Highlight */}
      <ToggleButton
        aria-label='highlight'
        value='highlight'
        onClick={() => editor.chain().focus().toggleHighlight({ color: '#666637' }).run()}
        disabled={!editor.can().chain().focus().toggleHighlight({ color: '#666637' }).run()}
        selected={editor.isActive('highlight', { color: '#666637' }) ? true : false}
      >
        <FontAwesomeIcon icon={faHighlighter} />
      </ToggleButton>

      {/* Spoiler */}
      <ToggleButton
        aria-label='spoiler'
        value='spoiler'
        onClick={() => editor.chain().focus().toggleSpoiler().run()}
        disabled={!editor.can().chain().focus().toggleSpoiler().run()}
        selected={editor.isActive('spoiler') ? true : false}
      >
        <FontAwesomeIcon icon={faEye} />
      </ToggleButton>

      {/* Header */}
      <ToggleButton
        aria-label='orderedList'
        value='orderedList'
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        disabled={!editor.can().chain().focus().toggleHeading({ level: 3 }).run()}
        selected={editor.isActive('heading', { level: 3 }) ? true : false}
      >
        <FontAwesomeIcon icon={faHeading} />
      </ToggleButton>

      {/* Bullet list */}
      <ToggleButton
        aria-label='bulletList'
        value='bulletList'
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        disabled={!editor.can().chain().focus().toggleBulletList().run()}
        selected={editor.isActive('bulletList') ? true : false}
      >
        <FontAwesomeIcon icon={faListUl} />
      </ToggleButton>

      {/* Ordered list */}
      <ToggleButton
        aria-label='orderedList'
        value='orderedList'
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        disabled={!editor.can().chain().focus().toggleOrderedList().run()}
        selected={editor.isActive('orderedList') ? true : false}
      >
        <FontAwesomeIcon icon={faListOl} />
      </ToggleButton>

      {/* Block quote */}
      <ToggleButton
        aria-label='blockquote'
        value='blockquote'
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        disabled={!editor.can().chain().focus().toggleBlockquote().run()}
        selected={editor.isActive('blockquote') ? true : false}
      >
        <FontAwesomeIcon icon={faQuoteRight} />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export const ReviewEditor = ({ onReviewContentChange, onReviewTitleChange }) => {
  // If you are using tiptap editor with tailwind
  // You need to either
  // 1: explicitly configure tag with tailwind class to it because no default class is applied
  // or 2: use tailwind prose for default style
  const editor = useEditor({
    extensions: [
      Highlight.configure({
        multicolor: true,
      }),
      Spoiler,
      StarterKit.configure({
        paragraph: {
          HTMLAttributes: {
            class: 'text-white',
          },
        },
        heading: {
          HTMLAttributes: {
            class: 'text-white',
          },
        },
        bold: {
          HTMLAttributes: {
            class: 'text-white',
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: 'marker:text-white',
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: 'marker:text-white',
          },
        },
      }),
    ],
    editorProps: {
      attributes: {
        // Default tailwind typography style https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
        class:
          'prose p-2 bg-neutral-800 min-h-[300px] max-w-none rounded-sm\
                focus:outline focus:outline-2 focus:outline-zinc-500 focus:rounded-sm',
      },
    },
    content: `
      <h3>
        Hi there,
      </h3>
      <mark data-color="#666637" style="background-color: #666637; color: inherit">Highlighted text</mark>
      <p>
        this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
      </p>

      <ul>
        <li>
          That’s a bullet list with one …
        </li>
        <li>
          … or two list items.
        </li>
      </ul>

      <ol>
        <li>
          That’s a oredered list with one …
        </li>
        <li>
          … or two list items.
        </li>
      </ol>

      <p>
        I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forgot to check the other examples too.
      </p>

      <blockquote>
        Wow, that’s amazing. Good work, boy! 👏
        <br />
        — Mom
      </blockquote>

      <span data-type="spoiler">
        Test Spoiler
      <span data-type="spoiler">
    `,
    onUpdate({ editor }) {
      onReviewContentChange(editor.getHTML());
    },
    onCreate({ editor }) {
      onReviewContentChange(editor.getHTML());
    },
  });

  return (
    <div className='rounded-md bg-neutral-700'>
      <div className='px-1 pt-1'>
        <Title onReviewTitleChange={onReviewTitleChange} />
      </div>

      <div className='px-1 pt-1'>
        <MenuBar editor={editor} />
      </div>

      <div className='p-1'>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default ReviewEditor;

import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import Spoiler from '../../ReviewEdit/util/Spoiler';

const useViewOnlyEditor = ({ review }) => {
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
        class: 'prose max-w-none',
      },
    },
    content: review.content,
    editable: false,
  });

  return editor;
};

export default useViewOnlyEditor;

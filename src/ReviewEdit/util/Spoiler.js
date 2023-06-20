import { Mark, mergeAttributes } from '@tiptap/core';

// create extension with react https://tiptap.dev/guide/node-views/react

export const Spoiler = Mark.create({
  name: 'spoiler',

  renderHTML({ HTMLAttributes }) {
    const elem = document.createElement('span');
    const hideClass = 'bg-[#ffffff] text-[#ffffff]';
    const borderClass = 'border-2 border-dotted border-stone-500';

    Object.entries(
      mergeAttributes(
        { 'data-type': this.name },
        { show: 'false' },
        { class: `${hideClass} ${borderClass}` },
        HTMLAttributes,
      ),
    ).forEach(([attr, val]) => elem.setAttribute(attr, val));

    elem.addEventListener('click', () => {
      if (elem.getAttribute('show') === 'true') {
        elem.setAttribute('class', `${hideClass} ${borderClass}`);
        elem.setAttribute('show', 'false');
      } else {
        elem.removeAttribute('class');
        elem.setAttribute('class', `${borderClass}`);
        elem.setAttribute('show', 'true');
      }
    });

    // Avoid double click selection
    elem.addEventListener(
      'mousedown',
      function (event) {
        if (event.detail > 1) {
          event.preventDefault();
        }
      },
      false,
    );

    return elem;
  },

  parseHTML() {
    return [
      {
        tag: `span[data-type="${this.name}"]`,
      },
    ];
  },

  addCommands() {
    return {
      toggleSpoiler:
        () =>
        ({ editor, commands }) => {
          if (editor.isActive('spoiler')) {
            return commands.toggleMark('spoiler');
          }
          return commands.toggleMark('spoiler', {
            'data-type': 'spoiler',
            show: 'false',
            class: 'bg-[#ffffff] text-[#ffffff]',
          });
        },
    };
  },
});

export default Spoiler;

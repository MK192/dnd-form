import { useDraggable } from '@dnd-kit/core';
import { useContext } from 'react';

// context
import { FormInputContext } from '../context/FormInputsContext';

type Props = {
  type: string;
  name: string;
  placeholder: string;
  label?: string;
};

export default function FormInput({
  type,
  name,
  placeholder,
  label = '',
}: Props) {
  const { setFormInputs } = useContext(FormInputContext);

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `draggable-${type}}`,
    data: [{ _type: type, _name: '', _placeholder: '', _label: '' }],
  });

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px,0)` }
    : undefined;

  return (
    <div
      className="border-2 border-gray w-[150px] h-[150px] flex flex-col cursor-grabbing"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <button
        className="self-end w-[30px] bg-slate-400 mb-[30px] z-20"
        onMouseDown={(e) => {
          e.stopPropagation();
          setFormInputs((prev) => [
            ...prev,
            {
              id: Date.now().toString(),
              _type: type,
              _name: name,
              _placeholder: placeholder,
              _label: label,
            },
          ]);
        }}
      >
        +
      </button>
      <div className="flex flex-col justify-start items-start p-2">
        {name}
        <div className="p-2 border-2 border-gray w-full text-left">
          <p className="text-gray-500">{placeholder} </p>
        </div>
      </div>
    </div>
  );
}

/* button use onMouseDown event because onClick don't work as
expected inside div with setNodeRef
*/

/* TODO adding new item on button click activates 2 times.
Number of items stay same, but from performance view it is 
not good */

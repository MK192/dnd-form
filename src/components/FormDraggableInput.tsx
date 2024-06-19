import { useDraggable } from '@dnd-kit/core';
import { useContext } from 'react';

// context
import { FormInputContext } from '@context/FormInputsContext';

// components
import { Button } from '@components/Buttons';

// enums
import { EInputType } from '@enums/inputs';

type Props = {
  type:
    | EInputType.RADIO
    | EInputType.TEXT
    | EInputType.NUMBER
    | EInputType.SELECT;
  label: string;
  placeholder: string;
};

export default function FormDraggableInput({
  type,
  label,
  placeholder,
}: Props) {
  const { setFormInputs } = useContext(FormInputContext);
  const addPlaceholder =
    type === EInputType.RADIO || type === EInputType.SELECT ? 'Option' : ' ';
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `draggable-${type}}`,

    data: [
      { _type: type, _name: '', _placeholder: addPlaceholder, _label: '' },
    ],
  });

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px,0)` }
    : undefined;

  return (
    <div className="relative z-50 ">
      <div
        className="shadow-[0px_1px_3px_rgba(0,0,0,0.3)] w-24 sm:w-[150px] flex flex-col cursor-grabbing"
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
      >
        <div className="flex flex-col justify-start items-start p-2 mt-10">
          {label}
          <div className="p-2 border-2 border-gray w-full text-left">
            <p className="text-gray-500">{placeholder} </p>
          </div>
        </div>
      </div>
      <Button
        rest="self-end absolute top-0 right-0"
        dropVersion={false}
        handleClick={() =>
          setFormInputs((prev) => [
            ...prev,
            {
              id: Date.now().toString(),
              _type: type,
              _name: '',
              _placeholder: addPlaceholder,
              _label: '',
            },
          ])
        }
      >
        +
      </Button>
    </div>
  );
}

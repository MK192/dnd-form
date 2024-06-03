import { Dispatch, SetStateAction } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// type
import { FormInputType } from '../type/form';

// utils
import { removeInput } from '../utils/form';

type Props = {
  dropedItem: FormInputType;
  index: number;
  formInputs: FormInputType[];
  setFormInputs: Dispatch<SetStateAction<[] | FormInputType[]>>;
};

export default function DropedItem({
  dropedItem,
  index,
  formInputs,
  setFormInputs,
}: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: dropedItem.id,
      transition: { duration: 300, easing: 'ease-out' },
    });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div className="relative">
      <div
        className="h-[150px] bg-white rounded-sm  mb-4 cursor-grabbing"
        key={index}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={style}
      >
        <p className="absolute top-0 left-5 bg-black text-white w-10 rounded">
          {index + 1}
        </p>

        <div className="flex flex-col pt-8 items-start p-4">
          <p className="text-gray-500">{`<${dropedItem._type}/>`}</p>
          <p>{dropedItem._label}</p>
          <div className="border-[1px] w-full h-[40px] border-gray-300 text-left p-2">
            <p className="text-gray-400">{dropedItem._placeholder}</p>
          </div>
        </div>
      </div>

      {/* listeners from useSortable provided in div prevent normal onClick function
     invoke, multiple clicks are needed to activate function. 
     Because of that i made 1 more div to be on top and button is outside 
     div with listeners*/}
      <button
        className="absolute top-0 right-0 bg-slate-200 w-10 cursor-pointer z-20"
        onClick={() => setFormInputs(removeInput(dropedItem.id, formInputs))}
      >
        X
      </button>
    </div>
  );
}
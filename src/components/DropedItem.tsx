import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { ArrowsUpDownIcon } from '@heroicons/react/16/solid';

//components
import { Button } from '@components/Buttons';

// type
import { FormInputType } from '@type/form';

// enums
import { EInputType } from '@enums/inputs';

// functions
import { removeInput, swapInputs } from '@functions/form';

type Props = {
  dropedItem: FormInputType;
  index: number;
  formInputs: FormInputType[];
  setFormInputs: Dispatch<SetStateAction<[] | FormInputType[]>>;
  handleClick: () => void;
};

export default function DropedItem({
  dropedItem,
  index,
  formInputs,
  setFormInputs,
  handleClick,
}: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: dropedItem?.id,
      transition: { duration: 450, easing: 'ease-in-out' },
    });
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState<number | null>(null);
  const ref = useRef<HTMLInputElement | null>(null);
  const checkOutsideClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setShowInput(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', checkOutsideClick);
    return () => {
      document.removeEventListener('mousedown', checkOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (!showInput && typeof inputValue === 'number') {
      const newArray = [...swapInputs(index, inputValue, formInputs)];
      setFormInputs(newArray);
    }
  }, [setShowInput, showInput]);

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  const ItemPosition = index + 1;
  const maxInputValue = formInputs.length - 1;

  return (
    <div className="relative">
      <div
        className="bg-white rounded-sm mb-4 cursor-grabbing border-[1px] border-gray-300"
        key={index}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        onClick={() => {
          handleClick();
        }}
        style={style}
      >
        <p className="absolute top-0 left-5 bg-black text-white w-10 rounded">
          {ItemPosition}
        </p>

        <div className="flex flex-col pt-8 items-start p-4">
          <p className="text-gray-500">{`<${dropedItem?._type}/>`}</p>
          {dropedItem?._name ? null : (
            <div className="my-1 text-red-500 flex items-center gap-3">
              <p className=" text-red-500 border-[1px] border-red-500 rounded-[50%] w-5 text-xs">
                !
              </p>
              <p className="hidden sm:block">Name is Required</p>
            </div>
          )}
          <p>{dropedItem?._label}</p>
          <div className="border-[1px] w-full h-[40px] border-gray-300 text-left p-2">
            <p className="text-gray-400 truncate">{dropedItem?._placeholder}</p>
          </div>
        </div>
      </div>

      {/* DROPPED ITEM BUTTONS */}

      {/* listeners from useSortable provided in div prevent normal onClick function
     invoke, multiple clicks are needed to activate function. 
     Because of that i made 1 more div to be on top and button is outside 
     div with listeners*/}
      <div className="absolute top-0 right-0 flex ">
        {showInput ? (
          <input
            value={inputValue ?? 0}
            min={0}
            max={maxInputValue}
            ref={ref}
            type={EInputType.NUMBER}
            onChange={(e) => setInputValue(Number(e.target.value))}
            className="border-[1px] border-gray-200 px-4"
          />
        ) : (
          <Button
            handleClick={() => {
              setShowInput(true);
              setInputValue(0);
            }}
          >
            <ArrowsUpDownIcon className="w-5 text-gray-500" />
          </Button>
        )}

        <Button
          handleClick={() =>
            setFormInputs(removeInput(dropedItem?.id, formInputs))
          }
        >
          X
        </Button>
      </div>
    </div>
  );
}

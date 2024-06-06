import { Dispatch, useContext } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';

// context
import { FormInputContext } from '../context/FormInputsContext';

// components
import DropedItem from './DropedItem';

//type
import { FormInputType } from '../type/form';

type Props = {
  setEditInput: Dispatch<React.SetStateAction<FormInputType | null>>;
};
export default function DropContainer({ setEditInput }: Props) {
  const { formInputs, setFormInputs } = useContext(FormInputContext);
  const { setNodeRef } = useDroppable({
    id: 'droppable',
  });

  return (
    <div
      className="bg-slate-100 w-[65%] border-4 border-blue-100 p-4 z-20"
      ref={setNodeRef}
    >
      <h1 className="mb-9">Drop Container</h1>
      <SortableContext items={formInputs}>
        {formInputs.map((item, index) => (
          <DropedItem
            dropedItem={item}
            index={index}
            key={index}
            formInputs={formInputs}
            setFormInputs={setFormInputs}
            handleClick={() => setEditInput(item)}
          />
        ))}
      </SortableContext>
    </div>
  );
}

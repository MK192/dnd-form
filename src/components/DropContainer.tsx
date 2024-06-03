import { Dispatch, useContext } from 'react';
import { useDroppable } from '@dnd-kit/core';

// context
import { FormInputContext } from '../context/FormInputsContext';

// components
import DropedItem from './DropedItem';

type Props = {
  setIsInputEdit: Dispatch<React.SetStateAction<boolean>>;
};
export default function DropContainer() {
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

      {formInputs.map((item, index) => (
        <DropedItem
          dropedItem={item}
          index={index}
          key={index}
          formInputs={formInputs}
          setFormInputs={setFormInputs}
        />
      ))}
    </div>
  );
}

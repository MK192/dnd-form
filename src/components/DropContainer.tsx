import { Dispatch, useContext, useEffect } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';

// components
import DropedItem from '@components/DropedItem';

// context
import { FormInputContext } from '@context/FormInputsContext';

//type
import { FormInputType } from '@type/form';

type Props = {
  setEditInput: Dispatch<React.SetStateAction<FormInputType | null>>;
  setShowForm: Dispatch<React.SetStateAction<boolean>>;
};
export default function DropContainer({ setEditInput, setShowForm }: Props) {
  const { formInputs, setFormInputs } = useContext(FormInputContext);
  const { setNodeRef } = useDroppable({
    id: 'droppable',
  });

  useEffect(() => {
    setEditInput(null);
  }, [formInputs, setEditInput]);

  return (
    <section
      className="relative w-7/12 lg:w-[40%] bg-slate-100  border-2 border-blue-100 p-4 z-20"
      ref={setNodeRef}
    >
      <h2 className="mb-9">Drop Container</h2>
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

      <button
        type="button"
        className="absolute top-2 right-2 border-2 w-15 p-2 border-blue-500 rounded-lg lg:hidden bg-white"
        onClick={() => setShowForm(true)}
      >
        Show Form
      </button>
    </section>
  );
}

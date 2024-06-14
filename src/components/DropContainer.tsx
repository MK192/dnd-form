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
};
export default function DropContainer({ setEditInput }: Props) {
  const { formInputs, setFormInputs } = useContext(FormInputContext);
  const { setNodeRef } = useDroppable({
    id: 'droppable',
  });

  useEffect(() => {
    setEditInput(null);
  }, [formInputs, setEditInput]);

  return (
    <section
      className="bg-slate-100 w-[40%] border-2 border-blue-100 p-4 z-20"
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
    </section>
  );
}

import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import { useContext } from 'react';

// components
import InputList from './InputList';
import DropContainer from './DropContainer';

// context
import { FormInputContext } from '../context/FormInputsContext';

// type
import { FormInputType } from '../type/form';

export default function MainContainer() {
  const { formInputs, setFormInputs } = useContext(FormInputContext);

  const addDraggInput = (input: FormInputType) => {
    const newInput: FormInputType = {
      id: Date.now().toString(),
      _type: input._type,
      _name: input._name,
      _label: input._label,
      _placeholder: input._placeholder,
    };
    console.log(newInput);
    let arr = formInputs;
    arr.push(newInput);
    setFormInputs(arr);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    console.log(event);
    if (active?.id === over?.id) {
      return;
    }
    if (
      event.active.data.current &&
      event.active.data.current[0] &&
      event.over?.id
    ) {
      addDraggInput(event.active.data.current[0]);
    }

    setFormInputs((inputs) => {
      const oldIndex = inputs.findIndex((input) => input?.id === active?.id);
      const newIndex = inputs.findIndex((input) => input?.id === over?.id);
      return arrayMove(formInputs, oldIndex, newIndex);
    });
  };

  return (
    <div className="bg-white h-full flex">
      <DndContext onDragEnd={handleDragEnd}>
        <InputList />
        <SortableContext items={formInputs}>
          <DropContainer />
        </SortableContext>
      </DndContext>
    </div>
  );
}

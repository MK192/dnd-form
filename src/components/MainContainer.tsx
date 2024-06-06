import { useContext, useState } from 'react';
import {
  DndContext,
  TouchSensor,
  MouseSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';

// components
import DropContainer from './DropContainer';
import InputList from './InputList';
import EditInput from './EditInput';

// context
import { FormInputContext } from '../context/FormInputsContext';

// utils
import { handleDragEnd } from '../functions/form';

// type
import { FormInputType } from '../type/form';

export default function MainContainer() {
  const [editInput, setEditInput] = useState<FormInputType | null>(null);
  const { setFormInputs } = useContext(FormInputContext);
  const touchSensor = useSensor(TouchSensor);
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const sensors = useSensors(touchSensor, mouseSensor);

  return (
    <div className="bg-white h-full flex">
      <DndContext
        sensors={sensors}
        onDragEnd={(e) => handleDragEnd(e, setFormInputs)}
      >
        {editInput ? (
          <EditInput editInput={editInput} setEditInput={setEditInput} />
        ) : (
          <InputList />
        )}
        <DropContainer setEditInput={setEditInput} />
      </DndContext>
    </div>
  );
}

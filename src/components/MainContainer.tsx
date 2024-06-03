import { useContext, useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';

// components
import InputList from './InputList';
import DropContainer from './DropContainer';

// context
import { FormInputContext } from '../context/FormInputsContext';

// utils
import { handleDragEnd } from '../utils/form';

export default function MainContainer() {
  const { formInputs, setFormInputs } = useContext(FormInputContext);

  return (
    <div className="bg-white h-full flex">
      <DndContext onDragEnd={(e) => handleDragEnd(e, setFormInputs)}>
        <InputList />
        <SortableContext items={formInputs}>
          <DropContainer />
        </SortableContext>
      </DndContext>
    </div>
  );
}

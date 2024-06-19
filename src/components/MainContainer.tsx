import { useContext, useState } from 'react';
import {
  DndContext,
  TouchSensor,
  MouseSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';

// components
import DropContainer from '@components/DropContainer';
import InputListContainer from '@components/InputListContainer';
import EditInputContainer from '@components/EditInputContainer';
import GeneratedFormContainer from '@components/GeneratedFormContainer';
import GeneratedFormResponsive from '@components/Forms/GeneratedForm/GeneratedFormResponsive';

// context
import { FormInputContext } from '@context/FormInputsContext';

// functions
import { handleDragEnd } from '@functions/form';

//hooks
import useIsLargeScreen from 'hooks/useIsLargeScreen';

// type
import { FormInputType } from '@type/form';

export default function MainContainer() {
  const [editInput, setEditInput] = useState<FormInputType | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const { setFormInputs } = useContext(FormInputContext);
  const isLargeScreen = useIsLargeScreen();
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const sensors = useSensors(touchSensor, mouseSensor);

  return (
    <main className="flex bg-container h-full lg:p-7 ">
      <DndContext
        sensors={sensors}
        onDragEnd={(e) => handleDragEnd(e, setFormInputs)}
      >
        {editInput ? (
          <EditInputContainer
            editInput={editInput}
            setEditInput={setEditInput}
          />
        ) : (
          <InputListContainer />
        )}

        {!showForm || isLargeScreen ? (
          <DropContainer
            setEditInput={setEditInput}
            setShowForm={setShowForm}
          />
        ) : null}
      </DndContext>

      {showForm ? <GeneratedFormResponsive setShowForm={setShowForm} /> : null}
      <GeneratedFormContainer />
    </main>
  );
}

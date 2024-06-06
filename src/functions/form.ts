import { Dispatch } from 'react';
import { arrayMove } from '@dnd-kit/sortable';
import { DragEndEvent } from '@dnd-kit/core';

//type
import { FormInputType } from '../type/form';

/* remove input from droppable container 
@ params 
id - id of array element that should be removed from array
inputs - array of inputs inside droppable container
*/
export const removeInput = (id: string, inputs: FormInputType[]) => {
  return inputs.filter((input) => input.id !== id);
};

/* add item to array of inputs.. 
@params
input - object/new input that is added to array of inputs
setFormInputs - set function for updating formInputs state array
*/

export const addDraggInput = (
  input: FormInputType,
  setFormInputs: Dispatch<React.SetStateAction<FormInputType[] | []>>
) => {
  const newInput: FormInputType = {
    id: Date.now().toString(),
    _type: input._type,
    _name: input._name,
    _label: input._label,
    _placeholder: input._placeholder,
  };

  setFormInputs((prev) => [...prev, newInput]);
};

/* function activate when dragging of element is finished.
If element is dropped over droppable container addDraggInput
is called and new input is added to formInputs array.
Item is then positioned in array according to position and element
over which this item is added.
@params  
event -  drag end event with active and over properties used
to determine position of item.
event.active.data.current[0] provide data specified in useDraggable hook
setFormInputs - set function for updating formInputs state array
*/
export const handleDragEnd = (
  event: DragEndEvent,
  setFormInputs: Dispatch<React.SetStateAction<FormInputType[] | []>>
) => {
  const { active, over } = event;

  if (active?.id === over?.id) {
    return;
  }
  if (
    event.active.data.current &&
    event.active.data.current[0] &&
    event.over?.id
  ) {
    addDraggInput(event.active.data.current[0], setFormInputs);
  }

  setFormInputs((inputs) => {
    const oldIndex = inputs.findIndex((input) => input?.id === active?.id);
    const newIndex = inputs.findIndex((input) => input?.id === over?.id);

    return arrayMove(inputs, oldIndex, newIndex);
  });
};

/* function to change place of 2 dropped items. Function activate
when user enter value in input field and click somewhere else.*/
export const swapInputs = (
  inputIndex: number,
  swapInputIndex: number,
  array: FormInputType[]
) => {
  if (inputIndex !== swapInputIndex && swapInputIndex < array.length) {
    const prom = array[inputIndex];
    array[inputIndex] = array[swapInputIndex];
    array[swapInputIndex] = prom;
  }

  return array;
};

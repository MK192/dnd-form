import { Dispatch } from 'react';
import { arrayMove } from '@dnd-kit/sortable';
import { DragEndEvent } from '@dnd-kit/core';

//type
import { FormInputType, GeneratedFormType } from '@type/form';

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
  let isItemAdded = false;

  if (active?.id === over?.id) {
    return;
  }
  if (active.data.current && active.data.current[0] && over?.id) {
    addDraggInput(active.data.current[0], setFormInputs);
    isItemAdded = true;
  }

  if (isItemAdded || over?.id)
    setFormInputs((inputs) => {
      const oldIndex = inputs.findIndex((input) => input?.id === active?.id);
      const newIndex = inputs.findIndex((input) => input?.id === over?.id);

      return arrayMove(inputs, oldIndex, newIndex);
    });
};

/* function to change place of 2 dropped items. Function activate
when user enter value in input field and click somewhere else.
@params
inputIndex, swapInputIndex - index-es of inputs that should swap places
array - array of inputs 
*/
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

/* this function should edit selected input from drop container 
@params inputId - id of edited input
        formValues - values taken from form on submit
        array - updated array with changes */
export const editFormInput = (
  inputId: string,
  formValues: FormInputType,
  array: FormInputType[]
) => {
  const index = array.findIndex((element) => element.id === inputId);
  const { _type, _name, _label, _placeholder, _options } = formValues;

  const editedElement = <FormInputType>{
    id: inputId,
    _type: _type,
    _name: _name,
    _label: _label,
    _placeholder: _placeholder,
  };
  if (_options) editedElement._options = _options;

  array.splice(index, 1, editedElement);
  return array;
};

/* function activate alert message. If form is successfully submited than values
should be shown, if name is not provided then alert should be  'All fields should have names'
@params formValues- values taken from form on submit
        formInputs - values for inputs like placeholder, name, label ...
        */

export const generatedFormSubmit = (
  formValues: GeneratedFormType,
  formInputs: FormInputType[]
) => {
  let message = 'Form submited with values:';

  for (let i = 0; i < formInputs.length; i++) {
    if (formInputs[i]._name) {
      message += `\n ${[formInputs[i]._name]}: ${formValues.fields[
        i
      ].value.toString()}`;
    } else {
      message = 'All fields should have names';
      break;
    }
  }
  alert(message);
};

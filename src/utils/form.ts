// type
import { FormInputType } from '../type/form';

export const addInput = (array: FormInputType[], newItem: FormInputType) => {
  return array.push(newItem);
};

export const removeInput = (id: string, inputs: FormInputType[]) => {
  return inputs.filter((input) => input.id !== id);
};

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

// type
import { FormInputType } from '../type/form';

interface FormInputContext {
  formInputs: [] | FormInputType[];
  setFormInputs: Dispatch<SetStateAction<[] | FormInputType[]>>;
}

export const FormInputContext = createContext<FormInputContext>({
  formInputs: [],
  setFormInputs: function (): void {
    throw new Error('Function not implemented.');
  },
});

type Props = {
  children: ReactNode;
};

const FormContext = ({ children }: Props) => {
  const [formInputs, setFormInputs] = useState<[] | FormInputType[]>([
    {
      id: '53252365363',
      _type: 'number',
      _placeholder: 'enter a number',
      _label: 'Test',
      _name: 'Test 1',
    },
    {
      id: '532322352365363',
      _type: 'number',
      _placeholder: 'enter a number 2',
      _label: 'Test 2',
      _name: 'Test 2',
    },
  ]);

  return (
    <FormInputContext.Provider value={{ formInputs, setFormInputs }}>
      {children}
    </FormInputContext.Provider>
  );
};

export default FormContext;

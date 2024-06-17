import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

// type
import { GeneratedFormType } from '@type/form';

interface IGeneratedFormContext {
  formFields: [] | GeneratedFormType[];
  setFormFields: Dispatch<SetStateAction<[] | GeneratedFormType[]>>;
}

export const GeneratedFormContext = createContext<IGeneratedFormContext>({
  formFields: [],
  setFormFields: function (): void {
    throw new Error('Function not implemented.');
  },
});

type Props = {
  children: ReactNode;
};

const GFormContext = ({ children }: Props) => {
  const [formFields, setFormFields] = useState<[] | GeneratedFormType[]>([]);

  return (
    <GeneratedFormContext.Provider value={{ formFields, setFormFields }}>
      {children}
    </GeneratedFormContext.Provider>
  );
};

export default GFormContext;

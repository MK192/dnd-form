import { Dispatch } from 'react';

// components
import { EditForm } from './Forms/EditForm';

// Type
import { FormInputType } from '../type/form';

type Props = {
  editInput: FormInputType;
  setEditInput: Dispatch<React.SetStateAction<FormInputType | null>>;
};
export default function EditInputContainer({ editInput, setEditInput }: Props) {
  return (
    <section className="w-[30%] border-2 border-blue-100 p-4 flex flex-col items-center">
      <p>
        Edit : <span className="font-bold">{editInput._name}</span>
      </p>
      <div className="flex flex-col w-9/12 mt-12">
        <EditForm editInput={editInput} setEditInput={setEditInput} />
      </div>
    </section>
  );
}

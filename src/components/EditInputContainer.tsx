import { Dispatch } from 'react';

// components
import { EditForm } from '@components/Forms/EditForm';

// Type
import { FormInputType } from '@type/form';

type Props = {
  editInput: FormInputType;
  setEditInput: Dispatch<React.SetStateAction<FormInputType | null>>;
};
export default function EditInputContainer({ editInput, setEditInput }: Props) {
  return (
    <section className="w-5/12 lg:w-[30%] px-1 py-4 border-2 bg-white border-blue-100 sm:px-4 flex flex-col items-center">
      <p className="mb-9">
        Edit : <span className="font-bold">{editInput._name}</span>
      </p>
      <div className="flex flex-col w-full mobile:w-9/12 ">
        <EditForm editInput={editInput} setEditInput={setEditInput} />
      </div>
    </section>
  );
}

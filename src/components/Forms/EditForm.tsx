import { Dispatch } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

//components
import FormButton from '../Buttons/FormButton';

//schema
import { inputsEditSchema } from '../../schema/Inputs';

//type
import { FormInputType, EditInputType } from '../../type/form';

type Props = {
  setEditInput: Dispatch<React.SetStateAction<FormInputType | null>>;
};

export default function EditForm({ setEditInput }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EditInputType>({ resolver: zodResolver(inputsEditSchema) });

  return (
    <form
      className="flex flex-col gap-7 "
      onSubmit={handleSubmit((formValues) => {
        console.log(formValues);
      })}
    >
      <div className="flex flex-col items-start">
        <label>Type</label>
        <input type="text" className="w-full border-2 border-gray-300" />
      </div>
      <div className="flex flex-col items-start">
        <label>Name</label>
        <input type="text" className="w-full border-2 border-gray-300" />
      </div>
      <div className="flex flex-col items-start">
        <label>Label</label>
        <input type="text" className="w-full border-2 border-gray-300" />
      </div>
      <div className="flex flex-col items-start">
        <label>Placeholder</label>
        <input type="text" className="w-full border-2 border-gray-300" />
      </div>
      <div className="flex mt-11 gap-5 justify-center">
        <FormButton handleClick={() => setEditInput(null)}>Cancel</FormButton>
        <FormButton type="submit">Confirm</FormButton>
      </div>
    </form>
  );
}

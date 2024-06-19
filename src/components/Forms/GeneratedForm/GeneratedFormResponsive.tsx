import { Dispatch, useContext, useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

//components
import EditFormButton from '@components/Buttons/EditFormButton';
import GeneratedFormInput from './GeneratedFormInput';

//context
import { FormInputContext } from '@context/FormInputsContext';

//schema
import { generatedFormSchema } from '@schema/generatedFormSchema';

//type
import { GeneratedFormType } from '@type/form';

//functions
import { generatedFormSubmit } from '@functions/form';

type Props = {
  setShowForm: Dispatch<React.SetStateAction<boolean>>;
};
export default function GeneratedFormResponsive({ setShowForm }: Props) {
  const { formInputs } = useContext(FormInputContext);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<GeneratedFormType>({
    resolver: zodResolver(generatedFormSchema),
  });
  const { fields, append } = useFieldArray({
    name: 'fields',
    control,
  });

  useEffect(() => {
    reset();
    formInputs.forEach(() => {
      append({
        value: '',
      });
    });
  }, [append, formInputs, reset]);

  return (
    <form
      className="bg-white pt-16 w-7/12 lg:w-[40%] lg:hidden relative p-4 flex flex-col gap-4 items-center"
      onSubmit={handleSubmit((formValues) => {
        generatedFormSubmit(formValues, formInputs);
      })}
    >
      {fields.map((input, index) => (
        <GeneratedFormInput
          key={input.id}
          _type={formInputs[index]?._type}
          _label={formInputs[index]?._label}
          _placeholder={formInputs[index]?._placeholder}
          _options={formInputs[index]?._options}
          index={index}
          register={register}
          error={errors.fields && errors.fields[index]?.value?.message}
        />
      ))}

      <EditFormButton buttonColor="bg-blue-500 mt-6" type="submit">
        Submit
      </EditFormButton>

      <button
        type="button"
        className="absolute top-2 right-2 border-2 w-15 p-2 border-blue-500 rounded-lg  bg-white"
        onClick={() => setShowForm(false)}
      >
        Close Form
      </button>
    </form>
  );
}

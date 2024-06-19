import { Dispatch, useContext, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

//components
import EditFormButton from '@components/Buttons/EditFormButton';
import EditFormText from '@components/Forms/EditForm/EditFormText';
import EditFormSelect from '@components/Forms/EditForm/EditFormSelect';
import FormOptions from '@components/Forms/EditForm/FormOptions';

//context
import { FormInputContext } from '@context/FormInputsContext';

//schema
import { editFormSchema } from '@schema/editFormSchema';

//type
import { FormInputType } from '@type/form';

// functions
import { editFormInput } from '@functions/form';

// enums
import { EInputType } from '@enums/inputs';

type Props = {
  editInput: FormInputType;
  setEditInput: Dispatch<React.SetStateAction<FormInputType | null>>;
};

export default function EditForm({ editInput, setEditInput }: Props) {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormInputType>({
    resolver: zodResolver(editFormSchema),
    defaultValues: useMemo(() => {
      return editInput;
    }, [editInput]),
  });

  useEffect(() => {
    reset(editInput);
  }, [editInput, reset]);

  const newType = watch('_type');

  const { formInputs, setFormInputs } = useContext(FormInputContext);
  const options = [
    { value: 'radio', name: 'Radio' },
    { value: 'text', name: 'Text' },
    { value: 'number', name: 'Number' },
    { value: 'select', name: 'Select' },
  ];

  return (
    <form
      className="flex flex-col gap-7 w-full"
      onSubmit={handleSubmit((formValues) => {
        console.log(formValues);
        setFormInputs([...editFormInput(editInput.id, formValues, formInputs)]);
      })}
    >
      <EditFormSelect
        labelText="Type"
        {...register('_type')}
        error={errors._type?.message}
        options={options}
      />
      <EditFormText
        labelText="Name (required)"
        {...register('_name')}
        error={errors._name?.message}
      />
      <EditFormText
        labelText="Label"
        {...register('_label')}
        error={errors._label?.message}
      />

      {newType === EInputType.RADIO || newType === EInputType.SELECT ? (
        <FormOptions control={control} register={register} errors={errors} />
      ) : (
        <EditFormText
          labelText="Placeholder"
          {...register('_placeholder')}
          error={errors._placeholder?.message}
        />
      )}

      <div className="flex flex-col-reverse gap-3 mt-3 sm:mt-11  sm:flex-row sm:gap-8 justify-center items-center">
        <EditFormButton type="button" handleClick={() => setEditInput(null)}>
          Cancel
        </EditFormButton>
        <EditFormButton type="submit" buttonColor="bg-blue-500">
          Confirm
        </EditFormButton>
      </div>
    </form>
  );
}

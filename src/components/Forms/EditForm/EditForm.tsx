import { Dispatch, useContext, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

//components
import EditFormButton from '@components/Buttons/EditFormButton';
import EditFormInput from '@components/Forms/EditForm/EditFormText';
import EditFormSelect from '@components/Forms/EditForm/EditFormSelect';
import FormOptions from '@components/Forms/FormOptions';

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
  ];

  return (
    <form
      className="flex flex-col gap-7 "
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
      <EditFormInput
        labelText="Name (required)"
        {...register('_name')}
        error={errors._name?.message}
      />
      <EditFormInput
        labelText="Label"
        {...register('_label')}
        error={errors._label?.message}
      />

      {newType === EInputType.RADIO ? (
        <FormOptions control={control} register={register} errors={errors} />
      ) : (
        <EditFormInput
          labelText="Placeholder"
          {...register('_placeholder')}
          error={errors._placeholder?.message}
        />
      )}
      <div className="flex mt-11  gap-16 justify-center">
        <EditFormButton type="button" handleClick={() => setEditInput(null)}>
          Cancel
        </EditFormButton>
        <EditFormButton type="submit">Confirm</EditFormButton>
      </div>
    </form>
  );
}

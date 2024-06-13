import { TrashIcon } from '@heroicons/react/16/solid';
import {
  UseFormRegister,
  useFieldArray,
  Control,
  FieldErrors,
} from 'react-hook-form';

// component
import EditFormButton from '../Buttons/EditFormButton';
import EditFormInput from './EditForm/EditFormText';

//type
import { FormInputType } from '../../type/form';

type Props = {
  control: Control<FormInputType>;
  register: UseFormRegister<FormInputType>;
  errors: FieldErrors<FormInputType>;
};
export default function FormOptions({ control, register, errors }: Props) {
  const { fields, append, remove } = useFieldArray({
    name: '_radioOptions',
    control,
  });
  console.log(errors);
  return (
    <div className="flex flex-col items-start ">
      <EditFormButton
        buttonColor="bg-red-500"
        handleClick={() =>
          append({
            value: '',
          })
        }
      >
        Options +{' '}
      </EditFormButton>

      <div className="mt-4">
        <p className="text-red-500 ">
          {errors._radioOptions?.message || errors._radioOptions?.root?.message}
        </p>
        {fields.map((field, index) => {
          return (
            <div className="flex  gap-1 " key={field.id}>
              <EditFormInput
                labelText={`Radio Option`}
                error={
                  errors?._radioOptions &&
                  errors?._radioOptions[index]?.value?.message
                }
                {...register(`_radioOptions.${index}.value` as const)}
              />
              <TrashIcon
                className="w-6 text-red-500 self-end cursor-pointer "
                onClick={() => remove(index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

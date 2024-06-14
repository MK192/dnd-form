import { UseFormRegister } from 'react-hook-form';

//components
import GeneratedFormText from './GeneratedFormText';
import GeneratedFormNumber from './GeneratedFormNumber';
import GeneratedFormRadio from './GeneratedFormRadio';

//type
import { RadioType, GeneratedFormType } from '@type/form';

//enum
import { EInputType } from '@enums/inputs';

type Props = {
  _placeholder: string | undefined;
  _type: string;
  _label: string | undefined;
  index: number;
  _radioOptions?: RadioType[] | undefined;
  error?: string | undefined;
  register: UseFormRegister<GeneratedFormType>;
};

const GeneratedFormInput = ({
  _placeholder,
  _type,
  _label,
  index,
  _radioOptions,
  error,
  register,
}: Props) => {
  switch (_type) {
    case EInputType.TEXT:
      return (
        <GeneratedFormText
          error={error}
          _label={_label}
          _placeholder={_placeholder}
          {...register(`fields.${index}.value` as const)}
        />
      );
    case EInputType.NUMBER:
      return (
        <GeneratedFormNumber
          error={error}
          _label={_label}
          _placeholder={_placeholder}
          {...register(`fields.${index}.value` as const, {
            valueAsNumber: true,
          })}
        />
      );

    default:
      return (
        <GeneratedFormRadio
          _radioOptions={_radioOptions}
          error={error}
          {...register(`fields.${index}.value` as const)}
        />
      );
  }
};

export default GeneratedFormInput;

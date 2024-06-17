import { UseFormRegister } from 'react-hook-form';

//components
import GeneratedFormText from './GeneratedFormText';
import GeneratedFormNumber from './GeneratedFormNumber';
import GeneratedFormRadio from './GeneratedFormRadio';
import GeneratedFormSelect from './GeneratedFormSelect';

//type
import { OptionsType, GeneratedFormType } from '@type/form';

//enum
import { EInputType } from '@enums/inputs';

type Props = {
  _placeholder: string | undefined;
  _type: string;
  _label: string | undefined;
  index: number;
  _options?: OptionsType[] | undefined;
  error?: string | undefined;
  register: UseFormRegister<GeneratedFormType>;
};

const GeneratedFormInput = ({
  _placeholder,
  _type,
  _label,
  index,
  _options,
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
    case EInputType.SELECT:
      return (
        <GeneratedFormSelect
          error={error}
          _options={_options}
          _label={_label}
          {...register(`fields.${index}.value` as const)}
        />
      );
    default:
      return (
        <GeneratedFormRadio
          _options={_options}
          _label={_label}
          error={error}
          {...register(`fields.${index}.value` as const)}
        />
      );
  }
};

export default GeneratedFormInput;

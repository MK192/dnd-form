import { forwardRef } from 'react';

// enum
import { EInputType } from '@enums/inputs';

type Props = {
  error?: string;
  _placeholder: string | undefined;
  _label: string | undefined;
};

const GeneratedFormNumber = forwardRef<HTMLInputElement, Props>(
  ({ _label, error, _placeholder, ...other }: Props, ref) => {
    return (
      <div className="flex flex-col items-start w-full">
        <label>{_label}</label>
        <input
          type={EInputType.NUMBER}
          className="w-full rounded-sm border-[1px] border-gray-300 px-2"
          ref={ref}
          {...other}
          placeholder={_placeholder}
        />
        <p className="text-red-500">{error ? error : null}</p>
      </div>
    );
  }
);

export default GeneratedFormNumber;

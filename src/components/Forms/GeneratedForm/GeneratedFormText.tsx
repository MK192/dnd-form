import { forwardRef } from 'react';

// enum
import { EInputType } from '@enums/inputs';

type Props = {
  error?: string | undefined;
  _placeholder: string | undefined;
  _label: string | undefined;
};

const GeneratedFormText = forwardRef<HTMLInputElement, Props>(
  ({ _label, error, _placeholder, ...other }: Props, ref) => {
    return (
      <div className="flex flex-col items-start w-full">
        <label>
          {_label} <span className="text-red-500">{error ? error : null}</span>
        </label>
        <input
          type={EInputType.TEXT}
          className="w-full rounded-sm border-[1px] px-2"
          ref={ref}
          {...other}
          placeholder={_placeholder}
        />
      </div>
    );
  }
);

export default GeneratedFormText;

import { forwardRef } from 'react';

type Props = {
  error?: string;
  _placeholder: string | undefined;
  _label: string | undefined;
};

const GeneratedFormNumber = forwardRef<HTMLInputElement, Props>(
  ({ _label, error, _placeholder, ...other }: Props, ref) => {
    return (
      <div className="flex flex-col items-start w-full">
        <label>
          {_label} <span className="text-red-500">{error ? error : null}</span>
        </label>
        <input
          type="number"
          className="w-full rounded-sm border-[1px] border-gray-300 px-2"
          ref={ref}
          {...other}
          placeholder={_placeholder}
        />
      </div>
    );
  }
);

export default GeneratedFormNumber;

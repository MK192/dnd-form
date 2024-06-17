import { forwardRef } from 'react';

//type
import { OptionsType } from '@type/form';

type Props = {
  error?: string | undefined;
  _label: string | undefined;
  _options: OptionsType[] | undefined;
};

const GeneratedFormSelect = forwardRef<HTMLSelectElement, Props>(
  ({ error, _label, _options, ...other }: Props, ref) => {
    console.log(_options);
    return (
      <fieldset className="flex flex-col gap-1 items-start w-full">
        {_label ? <label>{_label}</label> : null}
        {error ? <span className="text-red-500">{error}</span> : null}
        <div className="flex items-center gap-1 w-full">
          <select
            ref={ref}
            {...other}
            className="w-full  px-2 rounded-sm border-[1px] border-gray-300 "
          >
            {_options?.map((option) => (
              <option value={option.value} key={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
    );
  }
);

export default GeneratedFormSelect;

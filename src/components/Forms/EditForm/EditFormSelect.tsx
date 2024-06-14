import { forwardRef } from 'react';

//type
import { OptionsType } from '@type/form';

type Props = {
  labelText: string;
  error: string | undefined;
  options: OptionsType[];
};
const EditFormSelect = forwardRef<HTMLSelectElement, Props>(
  ({ labelText, error, options, ...other }: Props, ref) => {
    return (
      <div className="flex flex-col items-start">
        <p>
          {labelText} {error ? <span>{error}</span> : null}
        </p>
        <select
          ref={ref}
          {...other}
          className="w-full shadow-[-1px_0px_4px_rgba(0,0,0,0.3)] px-2"
        >
          {options.map((option) => (
            <option value={option.value} key={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default EditFormSelect;

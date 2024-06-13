import { forwardRef } from 'react';

//type
import { RadioType } from '../../../type/form';

type Props = {
  error?: string | undefined;
  _radioOptions: RadioType[] | undefined;
};

const GeneratedFormRadio = forwardRef<HTMLInputElement, Props>(
  ({ error, _radioOptions, ...other }: Props, ref) => {
    return (
      <fieldset className="flex flex-col gap-1 items-start w-full">
        {error ? <span className="text-red-500">{error}</span> : null}
        {_radioOptions?.map((radio) => (
          <div key={radio.value} className="flex items-center gap-1">
            <input
              type="radio"
              value={radio.value}
              ref={ref}
              {...other}
              defaultChecked
            />
            <label>{radio.value}</label>
          </div>
        ))}
      </fieldset>
    );
  }
);

export default GeneratedFormRadio;

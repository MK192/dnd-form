import { forwardRef } from 'react';

//type
import { RadioType } from '@type/form';

// enum
import { EInputType } from '@enums/inputs';

type Props = {
  error?: string | undefined;
  _label: string | undefined;
  _options: RadioType[] | undefined;
};

const GeneratedFormRadio = forwardRef<HTMLInputElement, Props>(
  ({ error, _label, _options, ...other }: Props, ref) => {
    return (
      <fieldset className="flex flex-col gap-1 items-start w-full">
        {_label ? <label>{_label}</label> : null}
        {error ? <span className="text-red-500">{error}</span> : null}
        {_options?.map((radio) => (
          <div key={radio.value} className="flex items-center gap-1">
            <input
              type={EInputType.RADIO}
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

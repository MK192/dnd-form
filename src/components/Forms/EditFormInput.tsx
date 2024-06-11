import { forwardRef } from 'react';

type Props = {
  labelText: string;
  error?: string;
};

const EditFormInput = forwardRef<HTMLInputElement, Props>(
  ({ labelText, error, ...other }: Props, ref) => {
    return (
      <div className="flex flex-col items-start w-full">
        <label>
          {labelText}{' '}
          <span className="text-red-500">{error ? error : null}</span>
        </label>
        <input
          type="text"
          className="w-full shadow-[-1px_0px_4px_rgba(0,0,0,0.3)]	 px-2"
          ref={ref}
          {...other}
        />
      </div>
    );
  }
);

export default EditFormInput;

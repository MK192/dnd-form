import { ReactNode } from 'react';

type Props = {
  dropVersion?: boolean;
  rest?: string;
  handleClick: () => void;
  buttonRef?: React.RefObject<HTMLButtonElement>;
  children: ReactNode;
};

export default function Button({
  dropVersion = true,
  rest,
  handleClick,
  buttonRef,
  children,
}: Props) {
  const dropButtonStyle = `bg-slate-100 w-8 cursor-pointer border-[1px] border-gray-300 ${rest} flex justify-center items-center`;
  const addDragButtonStyle = `w-[30px] bg-slate-400 ${rest} flex justify-center items-center`;
  const version = dropVersion ? dropButtonStyle : addDragButtonStyle;

  return (
    <button
      type="button"
      className={version}
      onClick={handleClick}
      ref={buttonRef}
    >
      {children}
    </button>
  );
}

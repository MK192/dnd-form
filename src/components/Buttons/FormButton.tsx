import { ReactNode } from 'react';

type Props = {
  buttonColor?: string;
  textColor?: string;
  children: ReactNode;
  handleClick?: () => void;
  type?: 'submit' | 'button';
};

export default function FormButton({
  buttonColor = 'bg-black',
  textColor = 'text-white',
  children,
  handleClick,
  type = 'button',
}: Props) {
  return (
    <button
      type={type}
      className={`rounded w-20 p-2 ${buttonColor} ${textColor}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

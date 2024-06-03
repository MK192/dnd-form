// components
import FormInput from './FormInput';

export default function InputList() {
  return (
    <div className="w-[35%] border-4 border-blue-100 p-4">
      <h1 className="mb-9">Components</h1>
      <div className="flex gap-6 flex-wrap">
        <FormInput type="text" name="text" placeholder="Text" />
        <FormInput type="number" name="number" placeholder="Number" />
        <FormInput type="radio" name="option" placeholder="Option" />
      </div>
    </div>
  );
}

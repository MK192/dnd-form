// components
import FormDraggableInput from './FormDraggableInput';

export default function InputList() {
  return (
    <div className="w-[35%] border-4 border-blue-100 p-4">
      <h2 className="mb-9">Form Inputs</h2>
      <div className="flex gap-6 flex-wrap">
        <FormDraggableInput type="text" label="text" placeholder="Text" />
        <FormDraggableInput type="number" label="number" placeholder="Number" />
        <FormDraggableInput type="radio" label="radio" placeholder="Option" />
      </div>
    </div>
  );
}

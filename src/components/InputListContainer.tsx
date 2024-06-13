// components
import FormDraggableInput from './FormDraggableInput';

export default function InputListContainer() {
  return (
    <section className="w-[30%] border-2 border-blue-100 p-4">
      <h2 className="mb-9">Form Inputs</h2>
      <div className="flex gap-4 flex-wrap justify-center">
        <FormDraggableInput type="text" label="text" placeholder="Text" />
        <FormDraggableInput type="number" label="number" placeholder="Number" />
        <FormDraggableInput type="radio" label="radio" placeholder="Option" />
      </div>
    </section>
  );
}

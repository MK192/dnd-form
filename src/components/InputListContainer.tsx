//components
import FormDraggableInput from '@components/FormDraggableInput';

//enums
import { EInputType } from '@enums/inputs';

export default function InputListContainer() {
  return (
    <section className="w-[30%] border-2 border-blue-100 p-4">
      <h2 className="mb-9">Form Inputs</h2>
      <div className="flex gap-4 flex-wrap justify-center">
        <FormDraggableInput
          type={EInputType.TEXT}
          label="text"
          placeholder="Text"
        />
        <FormDraggableInput
          type={EInputType.NUMBER}
          label="number"
          placeholder="Number"
        />
        <FormDraggableInput
          type={EInputType.RADIO}
          label="radio"
          placeholder="Option"
        />
        <FormDraggableInput
          type={EInputType.SELECT}
          label="select"
          placeholder="Select"
        />
      </div>
    </section>
  );
}

//components
import FormDraggableInput from '@components/FormDraggableInput';

//enums
import { EInputType } from '@enums/inputs';

export default function InputListContainer() {
  return (
    <section className="flex py-4 flex-col w-5/12 lg:w-[30%] border-2 border-blue-100 sm:p-4 bg-white">
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

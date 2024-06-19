// components
import { GeneratedForm } from '@components/Forms/GeneratedForm';

export default function GeneratedFormContainer() {
  return (
    <section className="hidden lg:block w-[30%] p-4 border-2 bg-white border-blue-100">
      <h2 className="mb-9">Generated Form</h2>
      <GeneratedForm />
    </section>
  );
}

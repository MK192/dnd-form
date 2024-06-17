import { z } from 'zod';

const textInput = z.object({
  value: z.string().min(1, {
    message: `value missing`,
  }),
});

const numberInput = z.object({
  value: z.number({ message: 'number is expected' }),
});

const inputUnion = z.union([numberInput, textInput]);

export const generatedFormSchema = z.object({
  fields: z.array(inputUnion),
});

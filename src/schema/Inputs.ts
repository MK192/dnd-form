import { z } from 'zod';

const TYPE = ['radio', 'text', 'number', ''] as const;

const radioOptionsArray = z.object({
  value: z
    .string()
    .min(1, { message: `can't be empty` })
    .max(256, { message: `Max number of characters is 256` }),
});

export const inputsEditSchema = z
  .object({
    _type: z.enum(TYPE, { message: 'can be number, text or radio' }),
    _name: z
      .string()
      .min(1, { message: `field can't be empty` })
      .max(256, { message: `max number of characters is 256` }),
    _label: z.string(),
    _placeholder: z.string(),
    _radioOptions: z.array(radioOptionsArray).optional(),
  })
  .refine(
    (data) =>
      data._type !== 'radio' ||
      (data._radioOptions && data._radioOptions?.length > 1),
    {
      message: 'Radio should have at least 2 options',
      path: ['_radioOptions'],
    }
  );

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

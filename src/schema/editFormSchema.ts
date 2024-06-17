import { z } from 'zod';

const TYPE = ['radio', 'text', 'number', 'select', ''] as const;

const OptionsArray = z.object({
  value: z
    .string()
    .min(1, { message: `can't be empty` })
    .max(256, { message: `Max number of characters is 256` }),
});

export const editFormSchema = z
  .object({
    _type: z.enum(TYPE, { message: 'can be number, text or radio' }),
    _name: z
      .string()
      .min(1, { message: `field can't be empty` })
      .max(256, { message: `max number of characters is 256` }),
    _label: z.string(),
    _placeholder: z.string(),
    _options: z.array(OptionsArray).optional(),
  })
  .refine(
    (data) =>
      (data._type !== 'radio' && data._type !== 'select') ||
      (data._options && data._options?.length > 1),
    {
      message: 'Two Options are minimum',
      path: ['_options'],
    }
  );

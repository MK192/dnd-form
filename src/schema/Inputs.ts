import { z } from 'zod';
const TYPE = ['radio', 'text', 'number', ''] as const;

const radioOptionsArray = z.object({
  value: z
    .string()
    .min(1, { message: `can't be empty` })
    .max(256, { message: `Max number of characters is 256` }),
});
export const inputsEditSchema = z.object({
  _type: z.enum(TYPE, { message: 'can be number, text or radio' }).optional(),
  _name: z
    .string()
    .min(1, { message: `field can't be empty` })
    .max(256, { message: `max number of characters is 256` }),
  _label: z.string(),
  _placeholder: z.string(),
  _radioOptions: z.array(radioOptionsArray).optional(),
});

import { z } from 'zod';

export const inputsEditSchema = z.object({
  type: z.enum(['text', 'number', 'option']),

  name: z
    .string()
    .min(1, { message: `field can't be empty` })
    .max(256, { message: `max number of characters is 256` }),
  label: z.string(),
  placeholder: z.string(),
});

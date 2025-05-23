import { z } from 'zod';

export const emailSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' })
});

export type EmailSubscriptionValues = z.infer<typeof emailSchema>;

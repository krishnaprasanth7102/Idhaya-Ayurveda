import { z } from "zod";
import type { Messages } from "@/lib/i18n";

export function createAppointmentSchema(
  errors: Messages["appointment"]["errors"],
) {
  return z.object({
    name: z.string().trim().min(2, errors.name).max(100, errors.name),
    phone: z
      .string()
      .trim()
      .regex(/^[+\d().\s-]{8,20}$/, errors.phone),
    date: z.string().min(1, errors.date),
    treatment: z.string().min(1, errors.treatment),
    message: z.string().max(500, errors.message).optional().or(z.literal("")),
  });
}

export type AppointmentFormValues = z.infer<
  ReturnType<typeof createAppointmentSchema>
>;

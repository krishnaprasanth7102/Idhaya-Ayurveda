"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { clinic, type Locale } from "@/config/clinic";
import type { Messages } from "@/lib/i18n";
import { createAppointmentSchema, type AppointmentFormValues } from "@/lib/validation";

export function AppointmentForm({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Messages;
}) {
  const schema = useMemo(
    () => createAppointmentSchema(dict.appointment.errors),
    [dict.appointment.errors],
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      date: "",
      treatment: "",
      message: "",
    },
  });

  const onSubmit = (values: AppointmentFormValues) => {
    const selectedOption = dict.appointment.treatmentOptions.find(
      (option) => option.value === values.treatment,
    );
    const details =
      locale === "ml"
        ? [
            "നമസ്കാരം ഇധയ ആയുർവേദം, ഒരു അപ്പോയിന്റ്മെന്റ് അഭ്യർത്ഥിക്കുന്നു.",
            `${dict.appointment.fields.name}: ${values.name}`,
            `${dict.appointment.fields.phone}: ${values.phone}`,
            `${dict.appointment.fields.date}: ${values.date}`,
            `${dict.appointment.fields.treatment}: ${selectedOption?.label ?? values.treatment}`,
            values.message
              ? `${dict.appointment.fields.message}: ${values.message}`
              : "",
          ]
        : [
            "Hello Idhaya Ayurveda, I would like to request an appointment.",
            `${dict.appointment.fields.name}: ${values.name}`,
            `${dict.appointment.fields.phone}: ${values.phone}`,
            `${dict.appointment.fields.date}: ${values.date}`,
            `${dict.appointment.fields.treatment}: ${selectedOption?.label ?? values.treatment}`,
            values.message
              ? `${dict.appointment.fields.message}: ${values.message}`
              : "",
          ];
    const message = details.filter(Boolean).join("\n");
    window.open(
      `${clinic.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_18px_40px_rgba(11,61,38,0.08)] sm:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium text-[var(--text)]" htmlFor="appointment-name">
          {dict.appointment.fields.name}
          <input
            {...register("name")}
            id="appointment-name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "appointment-name-error" : undefined}
            className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-3 text-[var(--text)] transition focus:border-[var(--brand-green)]"
          />
          {errors.name ? (
            <span id="appointment-name-error" className="mt-1 block text-xs text-red-600 dark:text-red-300" role="alert">
              {errors.name.message}
            </span>
          ) : null}
        </label>

        <label className="block text-sm font-medium text-[var(--text)]" htmlFor="appointment-phone">
          {dict.appointment.fields.phone}
          <input
            {...register("phone")}
            id="appointment-phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "appointment-phone-error" : undefined}
            className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-3 text-[var(--text)] transition focus:border-[var(--brand-green)]"
          />
          {errors.phone ? (
            <span id="appointment-phone-error" className="mt-1 block text-xs text-red-600 dark:text-red-300" role="alert">
              {errors.phone.message}
            </span>
          ) : null}
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium text-[var(--text)]" htmlFor="appointment-date">
          {dict.appointment.fields.date}
          <input
            {...register("date")}
            id="appointment-date"
            type="date"
            aria-invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? "appointment-date-error" : undefined}
            className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-3 text-[var(--text)] transition focus:border-[var(--brand-green)]"
          />
          {errors.date ? (
            <span id="appointment-date-error" className="mt-1 block text-xs text-red-600 dark:text-red-300" role="alert">
              {errors.date.message}
            </span>
          ) : null}
        </label>

        <label className="block text-sm font-medium text-[var(--text)]" htmlFor="appointment-treatment">
          {dict.appointment.fields.treatment}
          <select
            {...register("treatment")}
            id="appointment-treatment"
            aria-invalid={Boolean(errors.treatment)}
            aria-describedby={errors.treatment ? "appointment-treatment-error" : undefined}
            className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-3 text-[var(--text)] transition focus:border-[var(--brand-green)]"
          >
            <option value="">{dict.appointment.selectTreatment}</option>
            {dict.appointment.treatmentOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.treatment ? (
            <span id="appointment-treatment-error" className="mt-1 block text-xs text-red-600 dark:text-red-300" role="alert">
              {errors.treatment.message}
            </span>
          ) : null}
        </label>
      </div>

      <label className="block text-sm font-medium text-[var(--text)]" htmlFor="appointment-message">
        {dict.appointment.fields.message}
        <textarea
          {...register("message")}
          id="appointment-message"
          rows={4}
          maxLength={500}
          className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-3 text-[var(--text)] transition focus:border-[var(--brand-green)]"
        />
        {errors.message ? (
          <span className="mt-1 block text-xs text-red-600 dark:text-red-300" role="alert">
            {errors.message.message}
          </span>
        ) : null}
      </label>

      <div className="flex flex-col items-start gap-4">
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--brand-green)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-green-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-green-soft)] focus-visible:ring-offset-2"
        >
          {dict.actions.sendRequest}
        </button>
        <p className="max-w-2xl text-sm leading-6 text-[var(--muted)]">
          {dict.appointment.privacyNote}
        </p>
      </div>
    </form>
  );
}

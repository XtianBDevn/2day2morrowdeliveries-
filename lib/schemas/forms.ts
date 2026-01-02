import { z } from "zod";

// Contact form schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Estimate/Quote form schema
export const estimateFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  pickupAddress: z.string().min(5, "Please enter a valid pickup address"),
  deliveryAddress: z.string().min(5, "Please enter a valid delivery address"),
  shipmentType: z.enum([
    "Palletized",
    "Crated",
    "Loose",
    "Containers",
    "Specialized",
  ]),
  weight: z.string().min(1, "Please enter the weight"),
  dimensions: z.string().optional(),
  timeframe: z.enum(["Same Day", "Next Day", "2-3 Days", "Flexible"]),
  additionalInfo: z.string().optional(),
});

export type EstimateFormData = z.infer<typeof estimateFormSchema>;

export const shipmentTypes = [
  { value: "Palletized", label: "Palletized Freight" },
  { value: "Crated", label: "Crated Items" },
  { value: "Loose", label: "Loose Items" },
  { value: "Containers", label: "Full Containers" },
  { value: "Specialized", label: "Specialized Equipment" },
];

export const timeframes = [
  { value: "Same Day", label: "Same Day" },
  { value: "Next Day", label: "Next Day" },
  { value: "2-3 Days", label: "2-3 Days" },
  { value: "Flexible", label: "Flexible" },
];

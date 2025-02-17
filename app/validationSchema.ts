import { z } from "zod";

export const issueSchema = z.object({
  // this schema is used for the object we send to the database
  title: z.string().min(1).max(255), // but we'll use this same schema for client side form validation
  description: z.string().min(1).max(65535),
});

export const patchIssueSchema = z.object({
  // this schema is used for the object we send to the database
  title: z.string().min(1).max(255).optional(), // but we'll use this same schema for client side form validation
  description: z.string().min(1).max(65535).optional(),
  assignedToUserId: z.string().min(1).max(255).optional().nullable(), // nullable means even If the field is present, it can be null instead of a string.
  
});
 
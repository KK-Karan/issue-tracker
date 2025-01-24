import { z } from "zod";

export const CreateIssueSchema = z.object({ // this schema is used for the object we send to the database
  title: z.string().min(1).max(255), // but we'll use this same schema for client side form validation
  description: z.string().min(1)
});

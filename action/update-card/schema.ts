import { z } from "zod";

export const UpdateCard = z.object({
  title: z.optional(
    z
      .string({
        required_error: "Title is required",
        invalid_type_error: "Title is invalid",
      })
      .min(3, {
        message: "Title is too short",
      })
  ),
  boardId: z.string(),
  description: z.optional(
    z.string({
      required_error: "Description is required",
      invalid_type_error: "Description is required",
    })
  ),
  id: z.string(),
});

import { z } from "zod";

export const UpdateList = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title is invalid",
    })
    .min(3, {
      message: "Title is too short",
    }),
  id: z.string({
    required_error: "ID is required",
    invalid_type_error: "ID is invalid",
  }),
  boardId: z.string(),
});

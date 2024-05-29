import { z } from "zod";

export const CopyList = z.object({
  id: z.string({
    required_error: "ID is required",
    invalid_type_error: "ID is invalid",
  }),
  boardId: z.string(),
});

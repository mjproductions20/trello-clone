import { z } from "zod";

export const DeleteBoard = z.object({
  id: z.string({
    required_error: "ID is required",
    invalid_type_error: "ID is invalid",
  }),
});

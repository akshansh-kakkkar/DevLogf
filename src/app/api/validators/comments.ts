import z from "zod";

export const commentSchema = z.object({
    content : z
    .string()
    .min(1, "comment required")
    .max(500)
})
import { z } from "zod";
import { err, ok } from "neverthrow";


export const parseWorkerMessageWithSchema = <T extends z.ZodRawShape>(schema: z.ZodObject<T>, message: unknown) => {
	const result = schema.safeParse(message);

	if (!result.success) {
		return err({
			message: result.error.flatten()
		})
	}

	return ok({
		data: result.data
	})
}
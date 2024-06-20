import { ScriptContext } from "../module.gen.ts";
import { UserNote } from "../utils/types.ts";

export interface Request {
	userId: string
}

export interface Response {
	notes: UserNote[]
}

export async function run(
	ctx: ScriptContext,
	req: Request,
): Promise<Response> {
    
	// Get the user notes via userId
	const foundNotes = await ctx.db.userNotes.findMany({
		where: {
			userId: req.userId,
			hidden: false
		},
		orderBy: { createdAt: "desc" }
	});

	return { notes: foundNotes };

}


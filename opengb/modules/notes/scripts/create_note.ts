import { ScriptContext } from "../module.gen.ts";
import { UserNote } from "../utils/types.ts";

export interface Request {
	userId: string,
    note: UserNote
}

export interface Response {
	note: UserNote
}

export async function run(
	ctx: ScriptContext,
	req: Request,
): Promise<Response> {
    
	// Rate limit the users (will add soonish)

	// Create the note in the database
	const note = await ctx.db.userNotes.create({
		data: {
			userId: req.userId,
			title: req.note.title,
			tags: req.note.tags,
			description: req.note.description
		}
	});

	return { note }

}


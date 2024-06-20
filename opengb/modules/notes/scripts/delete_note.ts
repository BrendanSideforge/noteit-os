import { ScriptContext } from "../module.gen.ts";

export interface Request {
	noteId: number,
	userId: string
}

export interface Response {
    noteId: number
}

export async function run(
	ctx: ScriptContext,
	req: Request,
): Promise<Response> {
    
	// Delete it from prisma
	await ctx.db.userNotes.delete({
		where: {
			userId: req.userId,
			id: req.noteId
		}
	});

	return { noteId: req.noteId };

}


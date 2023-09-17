import type express from "express";

export default async function (_req: express.Request, res: express.Response): Promise<void> {
	res.status(200).json({ message: "test" });
}

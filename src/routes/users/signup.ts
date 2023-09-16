import mysql from "mysql2/promise";
import { hashPass } from "@/libs/password";
import type express from "express";

export default async function (req: express.Request, res: express.Response): Promise<void> {
	let connection: mysql.Connection | null = null;
	let status: number;
	let message = "";

	const username: string = req.body.username;
	const userid: string = req.body.userid;
	const password: string = req.body.password;
	const email: string = req.body.email;

	try {
		connection = await mysql.createConnection({
			host: "db",
			user: "root",
			password: "root",
			database: "dev"
		});

		await connection.beginTransaction();
		await connection.query("INSERT INTO users set ?", {
			userid,
			username,
			email,
			password: await hashPass(password)
		});
		await connection.commit();

		status = 200;
		message = "成功";
	} catch (e) {
		if (connection !== null) {
			await connection.rollback();
		}

		status = 500;
		if (e instanceof Error) {
			message = e.message;
		}
	}

	if (connection !== null) {
		await connection.end();
	}

	res.status(status).json({ message });
}

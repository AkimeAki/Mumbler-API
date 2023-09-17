import express from "express";
import router from "./router";

const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((_req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "*");
	res.header("Access-Control-Allow-Headers", "*");
	next();
});

// 末尾スラッシュは404
app.use((req, res, next) => {
	if (req.path.slice(-1) === "/" && req.path.length > 1) {
		res.status(404).json({ message: "404" });
	} else {
		next();
	}
});

app.use(router);

app.listen(4002, () => {
	console.log("Start on port 4002.");
});

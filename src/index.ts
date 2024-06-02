import express, { Express } from "express";
import router from "./routes";

const app: Express = express();
app.use(express.json());
app.use(router);

app.listen(8000, () => console.log(`Rodando na porta 8000`));

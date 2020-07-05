import express from "express";
import { TesteController } from "@controllers/teste";

const app = express();

app.get("/", (request, response) =>
  response.json(new TesteController().teste())
);

app.listen(3333);

import "dotenv/config";

import fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import { authRoutes } from "./routes/auth";
import { memoriesRoutes } from "./routes/memories";

const app = fastify();

app.register(cors, {
  origin: true, //todas URLs de front-end poderão acessar nosso back-end
});

app.register(jwt, {
  secret: "spacetime",
});

app.register(authRoutes);
app.register(memoriesRoutes);

app
  .listen({
    port: 3333,
    host: "localhost",
  })
  .then(() => {
    console.log("HTTP server running on http://localhost:3333");
  });

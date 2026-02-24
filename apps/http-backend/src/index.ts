import express from "express";
import jwt from "jsonwebtoken";
import {JWT_SECRET} from "@repo/backend-common/config";
import { middleware } from "./middleware";

import {CreateUserSchema } from "@repo/common/types"
const app = express();

app.post("/signup", (req, res) => {
    const data = CreateUserSchema.safeParse(req.body);
});

app.post("/signin", (req, res) => {
  const userId = 1;
  jwt.sign({
    userId
  },JWT_SECRET )
});

app.post("/room",middleware, (req, res) => {
  
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
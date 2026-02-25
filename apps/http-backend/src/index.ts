import express from "express";
import jwt from "jsonwebtoken";
import {JWT_SECRET} from "@repo/backend-common/config";
import { middleware } from "./middleware";
import { prismaClient } from "@repo/db";

import {CreateUserSchema } from "@repo/common/types"
const app = express();

app.post("/signup", async (req, res) => {
    const parsedData = CreateUserSchema.safeParse(req.body);
    if  (!parsedData.success){
        res.status(400).json({error: "Invalid data"});
        return;
    }

    try{
      await prismaClient.user.create({
      data:{
        email: parsedData.data.username,
        password: parsedData.data.password,
        name :parsedData.data.name,
        photo: ""
      }
    })
    }
    catch(e){
      res.status(500).json({error: "User creation failed"});
      return;
    }
});

app.post("/signin", (req, res) => {
  const userId = 1;
  jwt.sign({
    userId
  },JWT_SECRET )
});

app.post("/room",middleware, (req, res) => {
  
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
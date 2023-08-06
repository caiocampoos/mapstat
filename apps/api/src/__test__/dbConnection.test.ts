import mongoose from "mongoose";
import { it, expect } from "vitest";
import { connectDB } from "../db/connect";

it("connects to mongodb", () => {
  expect(async () => {
    const connection = await connectDB({});
  }).not.toThrow();
});

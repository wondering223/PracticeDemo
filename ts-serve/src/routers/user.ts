import Koa from "koa";
import {get, post } from "../framework/route-decors";

const users = [
  {
    name: "tom",
  },
];

export default class User {
  @get("/users")
  public list(ctx: Koa.Context) {
    ctx.body = {
      code: 1,
      data: users,
    };
  }
  @post("/users")
  public add(ctx: Koa.Context) {
    users.push(ctx.request.body);
    ctx.body = { code: 1 };
  }
}

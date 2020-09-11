import Koa from "koa";
import KoaRouter from "koa-router";

const router = new KoaRouter();

const decorate = (router: KoaRouter) => (method: 'get' | 'post' | 'delete' | 'put') => (
  path: string
) => (target: any, proterty: any) => {
  router[method](path, target[proterty]);
};

const methods = decorate(router);

export const get = methods("get");

export const post = methods("post");

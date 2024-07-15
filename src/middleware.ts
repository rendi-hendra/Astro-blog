import type { APIContext } from "astro";

export function onRequest(context: APIContext, next: Function) {
  //   if (context.url.pathname == "/") {
  //     console.log(context.url.pathname);
  //     return context.redirect("/login", 302);
  //   }

  // return a Response or the result of calling `next()`
  return next();
}

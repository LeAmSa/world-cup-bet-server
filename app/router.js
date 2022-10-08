import Router from "@koa/router";
import * as users from "./users/index.js";
import * as bets from "./bets/index.js";
import * as matches from "./matches/index.js";

export const router = new Router();

//USERS
router.get("/login", users.login);
router.post("/users", users.create);

//BETS
router.post("/bets", bets.create);

//MATCHES
router.get("/matches", matches.list);

//BETS DO USUÁRIO
router.get("/:username", users.bets);

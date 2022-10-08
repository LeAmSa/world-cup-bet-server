import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken"; //criar token do usuário que será enviado ao front

const prisma = new PrismaClient();

export const create = async (ctx) => {
  if (!ctx.headers.authorization) {
    ctx.status = 401;
    return;
  }

  const [type, token] = ctx.headers.authorization.split(" ");

  //verificando se o token é válido
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);

    //verificando se há apostas de placares, caso não haja, para a execução
    if (!ctx.request.body.homeTeamScore && !ctx.request.body.awayTeamScore) {
      ctx.status = 400;
      return;
    }

    const userId = data.sub;
    const { matchId } = ctx.request.body;
    const homeTeamScore = parseInt(ctx.request.body.homeTeamScore);
    const awayTeamScore = parseInt(ctx.request.body.awayTeamScore);

    //Existe a aposta do userId para o matchId?
    //Não: cria a aposta
    //Sim: atualiza o placar que tiver sido alterado
    try {
      const [bet] = await prisma.bet.findMany({
        where: { userId, matchId },
      });

      ctx.body = bet
        ? await prisma.bet.update({
            where: {
              id: bet.id,
            },
            data: {
              homeTeamScore,
              awayTeamScore,
            },
          })
        : await prisma.bet.create({
            data: {
              userId,
              matchId,
              homeTeamScore,
              awayTeamScore,
            },
          });
    } catch (error) {
      console.log(error);
      ctx.body = error;
      ctx.status = 500;
    }
  } catch (error) {
    ctx.status = 401;
    return;
  }
};

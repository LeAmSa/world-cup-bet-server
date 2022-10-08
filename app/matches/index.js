import { PrismaClient } from "@prisma/client";
import { addDays, formatISO } from "date-fns";

const prisma = new PrismaClient();

export const list = async (ctx) => {
  const currentDate = ctx.request.query.gameTime;

  const where = currentDate
    ? {
        gameTime: {
          //datas maiores ou iguais a
          gte: currentDate,
          //datas menores que o dia seguinte
          lt: formatISO(addDays(new Date(currentDate), 1)),
        },
      }
    : {};

  try {
    const matches = await prisma.match.findMany({
      where,
    });
    ctx.body = matches;
    ctx.status = 200;
  } catch (error) {
    console.log(error);
    ctx.body = error;
    ctx.status = 500;
  }
};

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"; //criptografar senha
import jwt from "jsonwebtoken"; //criar token do usuário que será enviado ao front

const prisma = new PrismaClient();

export const create = async (ctx) => {
  const password = await bcrypt.hash(ctx.request.body.password, 10);

  const data = {
    name: ctx.request.body.name,
    username: ctx.request.body.username,
    email: ctx.request.body.email,
    password: password,
  };

  try {
    //{password, ...user} => forma de evitar que apareça a senha na resposta da requisição
    const { password, ...user } = await prisma.user.create({
      data: data,
    });

    ctx.body = user;
    ctx.status = 201;
  } catch (error) {
    console.log(error);
    ctx.body = error;
    ctx.status = 500;
  }
};

export const login = async (ctx) => {
  const [type, token] = ctx.headers.authorization.split(" ");
  const [email, plainTextPassword] = atob(token).split(":");

  //Verificando se o user existe no db
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    ctx.status = 404;
    return;
  }

  //Comparando as senhas
  const passwordMatch = await bcrypt.compare(plainTextPassword, user.password);

  if (!passwordMatch) {
    ctx.status = 404;
    return;
  }

  const { password, ...result } = user;

  //gerando o token do front
  const accessToken = jwt.sign(
    {
      sub: user.id,
      name: user.name,
      expiresIn: "7d",
    },
    process.env.JWT_SECRET
  );

  ctx.body = {
    user: result,
    accessToken,
  };
};

export const bets = async (ctx) => {
  const username = ctx.request.params.username;

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (!user) {
    ctx.status = 404;
    return;
  }

  const bets = await prisma.bet.findMany({
    where: {
      userId: user.id,
    },
  });

  ctx.body = {
    name: user.name,
    bets,
  };
};

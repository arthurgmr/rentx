import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import auth from "@config/auth";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repository/UsersRepository";
import { UsersTokensRepository } from "@modules/accounts/infra/typeorm/repository/UsersTokensRespository";
import { AppError } from "@shared/errors/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing!", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    // sub is idUser;
    const { sub: userId } = verify(token, auth.secret_token) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(userId);

    if (!user) {
      throw new AppError("User does not exists!", 401);
    }

    request.user = {
      id: userId,
    };

    next();
  } catch {
    throw new AppError("Invalid token!", 401);
  }
}

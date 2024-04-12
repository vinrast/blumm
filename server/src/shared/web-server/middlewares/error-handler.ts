import { ErrorHandler } from '@src/shared/utils/error-handlers/ErrorHandler';
import { NextFunction, Request, Response } from 'express';

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  if (error instanceof ErrorHandler) {
    console.error(error.showOnConsole());
    return error.messageToClient(res);
  }
  console.error(error);
  return res.status(500).json({ error: 'server error' });
};

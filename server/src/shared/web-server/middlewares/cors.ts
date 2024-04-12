import { Request, Response, NextFunction } from 'express';

export const cors = (req: Request, res: Response, next: NextFunction) => {
  res.set('access-control-allow-origin', '*');
  res.set('access-control-allow-headers', '*');
  res.set('access-control-allow-methods', '*');
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  next();
};

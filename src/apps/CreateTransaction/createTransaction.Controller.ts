import { Request, Response } from 'express';

export const searchTransaction = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  console.log(`testando`);
  return res.json({ message: `Hello World` });
};

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import WilderModel from "../../models/WilderModel";
import dbConnect from "../../lib/dbConnect";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await dbConnect();
  await WilderModel.create(req.body);
  res.status(200).json(req.body);
}

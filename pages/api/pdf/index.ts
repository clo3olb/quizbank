import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    // case "GET":
    //   break;
    // case "POST":
    //   break;
    default:
      res.status(405).end();
  }
}

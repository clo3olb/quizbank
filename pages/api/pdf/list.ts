import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

function getFileNames(): string[] {
  const fileNames = fs.readdirSync("./public/pdf_images");
  return fileNames;
}

type Data = string[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      const data = getFileNames();
      res.status(200).json(data);
      break;
    case "POST":
      break;
    default:
      res.status(405).end();
  }
}

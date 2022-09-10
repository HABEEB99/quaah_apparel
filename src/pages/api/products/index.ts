import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../utils/sanity";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const productsQuery = `*[_type == 'product']`;

    const data = await client.fetch(productsQuery);

    res.status(200).json(data);
  }
};

export default handler;

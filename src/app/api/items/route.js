// export const dynamic = 'force-static'

import dbConnect from "@/lib/dbConnect";

 
export async function GET() {
  const collection = await dbConnect('users')
  const data = await collection.find().toArray();
 
  return Response.json(data)
}


export async function POST(req) {
    const postedData = await req.json();

    return Response.json({postedData})
}
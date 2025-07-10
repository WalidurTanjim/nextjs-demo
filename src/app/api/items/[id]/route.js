import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, params) {
    const { id } = await params?.params;
    // console.log("Get single data:", id);

    const query = { _id: new ObjectId(id) };
    const result = await dbConnect('users').findOne(query);

    return Response.json(result)

    // return Response.json({ id })
}

export async function PATCH(req, params) {
    const { id } = await params?.params;
    // console.log("PATCH single data:", id);

    const findQuery = { _id: new ObjectId(id) };
    const updatedDoc = {
        $set: {
            role: 'admin'
        }
    }

    const result = await dbConnect('users').updateOne(findQuery, updatedDoc);

    return Response.json(result);
}

export async function DELETE(req, params) {
    const { id } = await params?.params;
    // console.log("Delete single data:", id);

    const query = { _id: new ObjectId(id) };
    const result = await dbConnect('users').deleteOne(query);

    return Response.json(result);
}
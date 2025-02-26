import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MongoDb_Uri;

export default function dbConnect(collectionName) {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db(process.env.Database_Name).collection(collectionName);
}

from model import Request
import motor.motor_asyncio

URL = "mongodb+srv://siddharthkumar195:torquise6980@friendverse.gyvoyhc.mongodb.net/?retryWrites=true&w=majority"


client = motor.motor_asyncio.AsyncIOMotorClient(f'{URL}')
database = client.FriendVerse
collection = database.requests

async def add_request(request: Request):
    document = request
    result = await collection.insert_one(document)
    return document
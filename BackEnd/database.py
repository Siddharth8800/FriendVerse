from model import Request
import motor.motor_asyncio

URL = ""


client = motor.motor_asyncio.AsyncIOMotorClient(f'{URL}')
database = client.FriendVerse
collection = database.requests

async def add_request(request: Request):
    document = request
    result = await collection.insert_one(document)
    return document

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from database import add_request
from model import Request

app = FastAPI()

origin = ["http://localhost:5173"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origin,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"This is the first": "Page"}

@app.post("/api/req", response_model=Request)
async def set_data(request: Request):
    response = await add_request(request.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")
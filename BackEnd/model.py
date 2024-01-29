from pydantic import BaseModel

class Request(BaseModel):
    Name: str
    Age: str
    FavoriteArtish: str
    FavoriteSong: str
    FavoritePodacat: str
    Status: bool
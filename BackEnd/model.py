from pydantic import BaseModel

class Request(BaseModel):
    Name: str
    Age: str
    FavouriteArtist: str
    FavouriteSong: str
    FavouritePodcast: str
    Status: bool
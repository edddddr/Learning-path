from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def get_hello() -> dict[str, str]:
    return {"hello": "wordddld"}
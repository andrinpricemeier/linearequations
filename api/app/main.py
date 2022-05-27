import uvicorn
from fastapi import FastAPI
from .routers import solver
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()
app.include_router(solver.router)
origins = [
    "https://linear-equations.com",
    "http://localhost:3000",
]
app = CORSMiddleware(
    app=app, allow_origins=origins, allow_methods=["*"], allow_headers=["*"]
)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8080)

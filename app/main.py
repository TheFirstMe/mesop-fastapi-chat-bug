from fastapi import FastAPI
from fastapi.middleware.wsgi import WSGIMiddleware

from app.api.main import api_router

from app import ui

app = FastAPI()

app.include_router(api_router, prefix="/api")

app.mount("/", WSGIMiddleware(ui.app))

from functools import lru_cache
from .solver.linear_equation import LinearEquation
from pydantic import BaseSettings
from .auth import Authenticator


class Settings(BaseSettings):
    api_key: str

    class Config:
        env_file = ".env"


@lru_cache()
def get_settings():
    return Settings()

async def get_linear_equation() -> LinearEquation:
    return LinearEquation()

async def linear_equation_dependency() -> LinearEquation:
    return await get_linear_equation()


async def authenticator_dependency() -> Authenticator:
    settings = get_settings()
    return Authenticator(settings.api_key)

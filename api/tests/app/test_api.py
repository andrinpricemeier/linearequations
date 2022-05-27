from app.routers.solver import UnsolvedEquation
from fastapi.testclient import TestClient
from app.main import app
import json

client = TestClient(app)


def test_successful_solving():
    coefficients = [[2, 1], [-1, 1]]
    rhs = [5, 2]
    response = client.post(
        "/linearequation/analysis",
        json={
            "coefficients": coefficients,
            "rhs": rhs
        },
        headers={"x-api-key": "DUMMY"},
    )
    solution = response.json()
    assert response.status_code == 200
    assert solution is not None
    assert solution["solution"] is not None
    assert solution["solution"][0] == 1
    assert solution["solution"][1] == 3

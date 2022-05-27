from typing import List
import traceback

from ..solver.coefficient_matrix import CoefficientMatrix
from ..solver.rhs_vector import RhsVector
from ..solver.solution_vector import SolutionVector
from ..dependencies import linear_equation_dependency
from ..solver.linear_equation import LinearEquation
from fastapi import APIRouter, Depends, HTTPException
from ..auth_middleware import perform_auth
from pydantic import BaseModel

router = APIRouter()


class UnsolvedEquation(BaseModel):
    coefficients: List[List[float]]
    rhs: List[float]


class EquationSolution(BaseModel):
    solution: List[float]


@router.get("/linearequation/smoketest")
async def smoketest(equation: LinearEquation = Depends(linear_equation_dependency)):
    print("Smoke test passed.")
    return "Smoke test passed."


@router.post("/linearequation/analysis", response_model=EquationSolution)
async def solve_equation(
    unsolved_equation: UnsolvedEquation,
    equation: LinearEquation = Depends(linear_equation_dependency),
    _=Depends(perform_auth),  # Throw an error on authentication failure.
):
    try:
        print("Received request.")
        coefficients = CoefficientMatrix()
        for row in unsolved_equation.coefficients:
            coefficients.add_row(row)
        rhs = RhsVector()
        for b in unsolved_equation.rhs:
            rhs.add_value(b)
        equation_solution: SolutionVector = equation.solve(coefficients, rhs)
        response = {}
        response["solution"] = equation_solution.as_array()
        print("solution:")
        print(equation_solution.as_array())
        print("Equation solved successfully.")
        return response
    except Exception as ex:
        print("Failed to solve equation. Returning failure.")
        print(repr(ex))
        print(traceback.format_exc())
        raise HTTPException(status_code=500, detail=str(ex))

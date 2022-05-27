from .coefficient_matrix import CoefficientMatrix
from .rhs_vector import RhsVector
from .solution_vector import SolutionVector
import numpy as np


class LinearEquation:
    def solve(self, A: CoefficientMatrix, b: RhsVector) -> SolutionVector:
        A_as_grid = A.as_grid()
        b_as_array = b.as_array()
        x_as_array = np.linalg.solve(A_as_grid, b_as_array)
        solution_vector: SolutionVector = SolutionVector.from_array(x_as_array)
        return solution_vector

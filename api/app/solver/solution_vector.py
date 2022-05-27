from typing import Any, List


class SolutionVector:
    def __init__(self) -> None:
        self.variables: List[float] = []

    def add_value(self, value: float) -> None:
        self.variables.append(value)

    def as_array(self) -> List[float]:
        return self.variables

    @staticmethod
    def from_array(values: List[float]) -> Any:
        solution = SolutionVector()
        for value in values:
            solution.add_value(value)
        return solution

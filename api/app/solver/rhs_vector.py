from typing import List


class RhsVector:
    def __init__(self) -> None:
        self.values: List[float] = []

    def add_value(self, value: float) -> None:
        self.values.append(value)

    def as_array(self) -> List[float]:
        return self.values

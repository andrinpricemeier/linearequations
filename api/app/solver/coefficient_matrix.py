from typing import List


class CoefficientMatrix:
    def __init__(self) -> None:
        self.rows: List[List[float]] = []

    def add_row(self, row: List[float]) -> None:
        assert row is not None and len(row) > 0, "Given coefficient row is empty."
        self.rows.append(row)

    def as_grid(self) -> List[List[float]]:
        return self.rows

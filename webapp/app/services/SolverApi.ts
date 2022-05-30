import axios from "axios";
import type { Coefficients } from "../components/CoefficientMatrix";

export class SudolverApi {
  async solve(coefficients: Coefficients, rhs: string[]): Promise<any> {
    const result = await axios.post(
      (window as any).ENV!.API_URL,
      { coefficients: coefficients, rhs: rhs },
      {
        headers: {
          "content-type": "application/json",
          "x-api-key": (window as any).ENV!.API_KEY,
        },
      }
    );
    return result.data.solution;
  }
}

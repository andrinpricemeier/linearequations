import axios from "axios";
import type { Coefficients } from "../components/CoefficientMatrix";

export class SudolverApi {
  private readonly apiUrl: string;
  private readonly apiKey: string;

  constructor() {
    const windowEnv = (window as any).ENV;
    if (windowEnv) {
      this.apiUrl = windowEnv.API_URL;
      this.apiKey = windowEnv.API_KEY;
    } else {
      this.apiUrl = "/linearequation/analysis";
      this.apiKey = "DUMMY";
    }
  }

  async solve(coefficients: Coefficients, rhs: string[]): Promise<any> {
    const result = await axios.post(
      this.apiUrl,
      { coefficients: coefficients, rhs: rhs },
      {
        headers: {
          "content-type": "application/json",
          "x-api-key": this.apiKey,
        },
      }
    );
    return result.data.solution;
  }
}

import logging
import numpy as np
import azure.functions as func
import json

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Solving linear equation.')
    try:
        params = req.get_json()
        logging.info(params)
        a = params["coefficients"]
        b = params["constants"]
        x = np.linalg.solve(a, b)
        logging.info(x)
        return func.HttpResponse(json.dumps({ "unknowns": list(x)}), mimetype="application/json")
    except Exception:
        logging.exception("Unexpected error occurred.")
        return func.HttpResponse("Something went wrong.", status_code=500)

import time
from subprocess import check_call
import requests

check_call(
    "docker run --rm --name=linearequation-smoketest -p 8080:8080 -d linearequation:latest".split()
)
time.sleep(5)
try:
    response = requests.get(
        "http://localhost:8080/linearequation/smoketest", timeout=10
    )
    response.raise_for_status()
    print("Smoketest successful.")
finally:
    check_call("docker kill linearequation-smoketest".split())

# syntax = docker/dockerfile:1.4.2

# Install PDM dependencies
FROM python:3.7 AS app-deps
RUN <<EOF
pip install --no-cache-dir -U pip==22.1 setuptools==62.2.0 wheel==0.37.1
pip install --no-cache-dir pdm==1.15.0
pip install --no-cache-dir uvicorn[standard]==0.17.6
EOF
RUN mkdir /app && cp $(which uvicorn) /app/uvicorn
COPY pyproject.toml pdm.lock /app/
WORKDIR /app
RUN pdm install --prod --no-lock --no-editable

FROM python:3.7-slim
# Make packages available to our server.
ENV PYTHONPATH=/app/pkgs
# Get notified of C segfaults
ENV PYTHONFAULTHANDLER=1
# Copy over dependencies, models and code.
COPY --from=app-deps /app/__pypackages__/3.7/lib /app/pkgs
COPY --from=app-deps /app/uvicorn /app
COPY app/ /app
COPY .env /app/
EXPOSE 8080
CMD ["/app/uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8080"]
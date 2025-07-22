# backend/Dockerfile

FROM python:3.11-slim
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

COPY . .

# Use Gunicorn for serving Django
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "your_project.wsgi:application"]
EXPOSE 8000

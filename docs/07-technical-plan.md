# Technical Plan

## Frontend
Next.js + TypeScript + Tailwind CSS

Reason:
- Modern full-stack frontend standard
- TypeScript improves code quality
- Tailwind makes UI development faster
- Portfolio projects look more professional with Next.js

## Backend
FastAPI

Reason:
- Python-based, so it works naturally with AI/ML code
- Fast and clean API development
- Good for async tasks like CV analysis
- Easier to connect with ML pipelines

## Database
PostgreSQL

Reason:
- Stores users, CV metadata, skills, roadmaps, and progress data
- Reliable and production-like
- Better portfolio signal than using only local files

## AI / ML Layer
Python NLP pipeline + LLM integration

First version:
- Extract text from CV
- Extract skills
- Compare skills with target role
- Generate roadmap

Possible tools:
- PyMuPDF or pdfplumber for PDF text extraction
- spaCy / keyword matching / sentence-transformers for skill extraction
- OpenAI API or local LLM for roadmap generation

## File Storage
Local storage for MVP, later cloud storage

Reason:
- Local is simpler for first version
- Later upgrade to AWS S3 / Cloudinary / Supabase Storage

## Authentication
JWT-based authentication

Reason:
- Common backend auth pattern
- Works well with frontend/backend separation
- Good learning value

## Deployment
Docker + Render/Railway

Reason:
- Docker shows production thinking
- Render/Railway are beginner-friendly for deployment
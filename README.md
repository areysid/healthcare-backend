# 🏥 Healthcare Backend

A backend system for a healthcare application built with **Node.js**, **Express**, **Prisma**, and **PostgreSQL**.  
It allows secure user authentication and management of patients, doctors, and patient-doctor mappings.

---

## ✨ Features

- JWT Authentication (Register & Login)
- Patient management (CRUD APIs)
- Doctor management (CRUD APIs)
- Patient ↔ Doctor mapping APIs
- Prisma ORM for database modeling
- PostgreSQL (local or cloud-hosted via Supabase)
- Environment variable-based configuration

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express  
- **ORM:** Prisma  
- **Database:** PostgreSQL (Local / Supabase)  
- **Auth:** JWT  

---

## ⚙️ Project Setup

You can set up the project in **two ways**:

### 🔹 Option 1: Local PostgreSQL

1. Install [PostgreSQL](https://www.postgresql.org/download/).
2. Create a database:
    ```sql
    CREATE DATABASE healthcare_db;
    ```
3. Update your `.env` file with local database credentials (see `.env.example`).

4. Run migrations:
    ```bash
    npx prisma migrate dev --name init
    ```
5. Start the server:
    ```bash
    npm install
    npm start
    ```

---

### 🔹 Option 2: Supabase (Hosted PostgreSQL)

1. Sign up at [Supabase](https://supabase.com/) and create a project.
2. Copy the connection string from the database settings.
3. Update your `.env` file:
    ```ini
    DATABASE_URL="postgresql://postgres:yourpassword@db.supabase.co:5432/postgres"
    JWT_SECRET="your_secret"
    ```
4. Deploy Prisma migrations:
    ```bash
    npx prisma migrate deploy
    ```
5. Start the server:
    ```bash
    npm install
    npm start
    ```

---

## 📂 Project Structure

```
healthcare-backend/
│── src/
│   ├── index.js          # Entry point
│   ├── routes/           # API routes
│   ├── controllers/      # Controllers
│   ├── prisma/           # Prisma schema
│── .env                  # Environment variables
│── package.json
│── README.md
```

---

## 🔑 Environment Variables

Create a `.env` file in the root:

```env
# .env.example

#Set PORT
# PORT = 5000

# Local Example
DATABASE_URL="postgresql://postgres:password@localhost:5432/healthcare_db"

# Supabase Example
# DATABASE_URL="postgresql://postgres:password@db.supabase.co:5432/postgres"

# JWT secret for signing tokens
JWT_SECRET="your_jwt_secret"
```

---

## 📌 API Endpoints

### 🔹 Authentication

- `POST /api/auth/register` → Register user
- `POST /api/auth/login` → Login & get JWT

### 🔹 Patients

- `POST /api/patients/` → Add new patient
- `GET /api/patients/` → Get all patients (user-specific)
- `GET /api/patients/:id` → Get patient details
- `PUT /api/patients/:id` → Update patient
- `DELETE /api/patients/:id` → Delete patient

### 🔹 Doctors

- `POST /api/doctors/` → Add new doctor
- `GET /api/doctors/` → Get all doctors
- `GET /api/doctors/:id` → Get doctor details
- `PUT /api/doctors/:id` → Update doctor
- `DELETE /api/doctors/:id` → Delete doctor

### 🔹 Patient-Doctor Mappings

- `POST /api/mappings/` → Assign doctor to patient
- `GET /api/mappings/` → Get all mappings
- `GET /api/mappings/:patient_id` → Get all doctors for patient
- `DELETE /api/mappings/:id` → Remove mapping

---

## 🧪 Testing

Use Postman or any API client to test endpoints.

**Login first → copy JWT → add to Authorization header:**

```
Authorization: Bearer <your_token>
```

---

## ✅ Expected Outcome

- Users can register & login.
- Patients & doctors can be managed securely.
- Doctors can be assigned to patients.
- Works with local PostgreSQL or Supabase-hosted PostgreSQL.

---

## 🚀 Run

```bash
npm install
npm start
```

Server runs at:

```
http://localhost:5000
```

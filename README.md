# 🎓 E-Learning Platform

A comprehensive and interactive Learning Management System (LMS) designed to facilitate education management. The platform provides a decoupled architecture with a dynamic frontend and a robust API backend, offering dedicated spaces for directors, professors, and students[cite: 6].

## 🏗️ Architecture & Tech Stack

This project is divided into two main parts:

### 💻 Frontend (`/frontend`)
* **Framework:** ReactJS built with Vite for fast, modern web development[cite: 6].
* **Styling:** Tailwind CSS for a highly responsive and custom UI[cite: 6].
* **HTTP Client:** Axios configured for seamless API communication[cite: 6].
* **Features:** Dedicated dashboards for Students, Professors, and Directors, course visualization, and interactive quiz/task interfaces[cite: 6].

### ⚙️ Backend (`/backend`)
* **Framework:** Laravel (PHP)[cite: 6].
* **Authentication:** Laravel Sanctum for secure, token-based API authentication[cite: 6].
* **Database:** Relational database (MySQL) managed via Laravel Migrations and Eloquent ORM[cite: 6].
* **Core Modules:** Management of Users (Roles, Departments, Sectors), Courses, Documents, QCMs (Quizzes/Questions/Choices), Tasks, and Submissions[cite: 6].

---

## 🚀 Installation Instructions

### Prerequisites
Make sure you have the following installed on your machine:
* [Node.js](https://nodejs.org/) & npm
* [PHP](https://www.php.net/) & [Composer](https://getcomposer.org/)
* A local database server (e.g., MySQL, XAMPP, or Laravel Herd)

### 1. Initial Setup
Clone the repository and navigate to the project folder:
```bash
git clone <repository_url>
cd <project_directory>

```

### 2. Frontend Setup (ReactJS)

Open a terminal and navigate to the frontend directory:

```bash
cd frontend
# Install dependencies
npm install

# Start the React development server
npm run dev

```

The frontend should now be running (usually on `http://localhost:5173`).

### 3. Backend Setup (Laravel)

Open a **new** terminal and navigate to the backend directory:

```bash
cd backend

# Delete the "composer.lock" file (if necessary for fresh dependency resolution)
rm composer.lock

# Create the environment configuration file
cp .env.example .env

# Install all PHP dependencies declared in "composer.json"
composer install

# Generate a unique application key
php artisan key:generate

```

**Database Configuration:**
Open the `.env` file in the `backend/` folder and change the database name configuration to match your local setup:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=e-learning-platform
DB_USERNAME=root
DB_PASSWORD=

```

**Run Migrations & Start Server:**

```bash
# Add migrations to the database (creates all necessary tables)
php artisan migrate

# Optional: Seed the database with initial data (if seeders are configured)
# php artisan db:seed

# Start the Laravel server
php artisan serve

```

The backend API should now be accessible at `http://127.0.0.1:8000`.

*(Note: Ensure you also run `npm install` and `npm run dev` in the backend directory if you are using Laravel Mix/Vite for backend assets).*

---

## 🔐 Security Notes

> **Environment Variables:** The `.env` file contains sensitive information (database credentials, application keys, etc.). It is included in the `.gitignore` file by default. Never commit this file to your public repository.
> **API Protection:** All critical backend routes are protected using Laravel Sanctum middleware. Ensure proper token handling in your React frontend requests to access authenticated resources.
> 
> 

```

```

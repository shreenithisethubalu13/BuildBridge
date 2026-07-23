# 🏗️ BuildBridge

> A Full-Stack Construction Site & Contractor Workflow Management System built using Spring Boot, MySQL, HTML, CSS, Bootstrap, JavaScript, and REST APIs.

---

## 📖 Project Overview

BuildBridge is a web-based Construction Site & Contractor Workflow Management System designed to simplify and digitize construction project management. It provides a centralized platform for managing contractors, supervisors, project tasks, daily work logs, and customer inquiries while ensuring smooth communication between stakeholders.

The application follows a layered architecture using Spring Boot and REST APIs for the backend, MySQL for data persistence, and HTML, CSS, Bootstrap, and JavaScript for the frontend. It is designed with scalability, maintainability, and real-world project workflows in mind.

---
## ❓ Problem Statement

Construction projects involve multiple stakeholders, including clients, supervisors, and contractors. Managing project information manually through paperwork, spreadsheets, or scattered communication often leads to delays, miscommunication, inefficient task tracking, and difficulty monitoring daily progress.

Existing manual workflows make it challenging to:
- Track construction tasks efficiently.
- Assign contractors to projects.
- Record daily work logs.
- Handle customer inquiries.
- Monitor project progress in a centralized system.

A digital solution is required to streamline these operations and improve collaboration among all stakeholders.

---

## 💡 Solution

BuildBridge provides a centralized web-based platform that digitizes construction project management by integrating task management, contractor assignments, work log tracking, inquiry management, and role-based access into a single application.

The system enables supervisors and contractors to collaborate efficiently while maintaining organized project records through a secure and scalable full-stack architecture.

---
## ✨ Features

### 🔐 Authentication & Authorization
- Secure user registration and login.
- Role-based access for different users.
- JWT-based authentication for protected API access.

### 👷 Contractor Management
- Register and manage contractor details.
- Assign contractors to construction projects.
- Track contractor assignments and status.

### 🏗️ Construction Task Management
- Create, update, and delete construction tasks.
- Assign priorities and statuses to tasks.
- Monitor project progress efficiently.

### 📋 Daily Work Log Management
- Record daily construction activities.
- Maintain work history for better project tracking.
- Improve transparency between supervisors and contractors.

### 📨 Inquiry Management
- Allow clients to submit project-related inquiries.
- Track inquiry status.
- Respond and manage customer communication effectively.

### 👨‍💼 Supervisor Dashboard
- View and monitor assigned projects.
- Manage contractor assignments.
- Track overall project progress.

### 🌐 RESTful APIs
- Well-structured REST APIs following Spring Boot best practices.
- Tested using Postman for reliable backend communication.

### 💾 Database Integration
- Store project, contractor, inquiry, and task information securely using MySQL.
- Efficient data retrieval using Spring Data JPA.

---
# 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Java | Core programming language used for backend development. |
| Spring Boot | Developed REST APIs and backend business logic using a layered architecture. |
| Spring Data JPA | Simplified database operations using repository interfaces. |
| Spring Security + JWT | Implemented secure authentication and authorization. |
| MySQL | Stored project, contractor, task, and inquiry data. |
| HTML5 | Structured the frontend pages. |
| CSS3 | Styled the user interface. |
| Bootstrap | Built a responsive and modern UI. |
| JavaScript | Added dynamic frontend functionality and API integration. |
| REST APIs | Enabled communication between frontend and backend. |
| Maven | Managed project dependencies and builds. |
| Git & GitHub | Version control and project collaboration. |
| Postman | Tested and verified REST API endpoints. |

---
# 📂 Project Structure

```
BuildBridge
│
├── backend                 # Spring Boot Backend
│   ├── src
│   ├── pom.xml
│   └── ...
│
├── frontend                # HTML, CSS, Bootstrap & JavaScript
│
├── screenshots             # Project screenshots
│
├── docs                    # Documentation & Architecture
│
├── README.md
└── .gitignore
```

---
# 🏛️ System Architecture

```
                 User
                   │
                   ▼
        HTML • CSS • Bootstrap
                   │
             JavaScript
                   │
              REST APIs
                   │
          Spring Boot Backend
                   │
      Service Layer (Business Logic)
                   │
         Repository Layer (JPA)
                   │
                MySQL Database
```

The application follows a layered architecture consisting of the Presentation Layer (Frontend), Controller Layer, Service Layer, Repository Layer, and Database Layer. This architecture improves maintainability, scalability, and separation of concerns.

---
# 🔄 Project Workflow

1. User logs into the application.
2. Authentication is validated using JWT.
3. The frontend communicates with the backend through REST APIs.
4. Spring Boot processes the request.
5. Business logic is handled in the Service Layer.
6. Data is stored and retrieved using Spring Data JPA.
7. MySQL manages persistent project data.
8. The response is returned to the frontend and displayed to the user.

---
# 📈 Current Implementation Status

- ✅ User Authentication
- ✅ Role-Based Access Control
- ✅ Contractor Management
- ✅ Construction Task Management
- ✅ Inquiry Management
- ✅ Daily Work Log Management
- ✅ REST API Integration
- ✅ Database Integration
- ✅ Responsive Frontend
- ✅ Git Version Control

---
# ⚙️ Installation Guide

## Clone the Repository

```bash
git clone https://github.com/shreenithisethubalu13/BuildBridge.git
```

## Backend Setup

```bash
cd backend
```

Open the backend project in your preferred IDE.

Configure the MySQL database in:

```
application.properties
```

Run the Spring Boot application.

---

## Frontend Setup

Open the `frontend` folder.

Run the HTML files using Live Server (VS Code) or any web browser.

---

## Database

Create a MySQL database.

Update the database credentials inside:

```
backend/src/main/resources/application.properties
```

Then start the backend server.

---
# 🔌 REST API Modules

The backend exposes RESTful APIs for the following modules:

- Authentication
- Users
- Contractors
- Assignments
- Construction Tasks
- Daily Work Logs
- Project Inquiries

All APIs were tested using **Postman**.

---
# 📸 Screenshots

Project screenshots will be added here.

- Login Page
- Dashboard
- Contractor Management
- Construction Tasks
- Inquiry Management
- Daily Work Logs
- Database Tables
- Postman API Testing

---
# 🚀 Future Enhancements

- Cloud Deployment (AWS/Azure)
- Docker Containerization
- CI/CD Pipeline
- Email Notifications
- Real-Time Chat
- Analytics Dashboard
- Mobile Application
- File Upload Support
- Project Reports (PDF/Excel)
- AI-Based Project Progress Prediction

---
# 👩‍💻 Developer

**Shreenithi S**

B.Tech Artificial Intelligence & Data Science

Dr. Mahalingam College of Engineering and Technology

Passionate about Backend Development, Full-Stack Web Development, Artificial Intelligence, and building real-world software solutions.

---

⭐ If you found this project interesting, consider giving it a star on GitHub!
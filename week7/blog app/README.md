
## 🌐 Project Overview
A **MERN stack blog application** built with:
- **Backend**: Node.js + Express.js, MongoDB (Mongoose ORM)
- **Frontend**: React (with Vite for fast builds and HMR)
- **Authentication**: JWT-based login system with role-based access control
- **Deployment-ready**: Can be hosted on platforms like Vercel/Netlify (frontend) and Render/Heroku (backend)

---

## 👥 User Roles and Capabilities

### 🔹 Regular User
- **Authentication**: Register, login, logout
- **Articles**:
  - Create new articles
  - Edit and delete **only their own** articles
  - View all published articles
- **Comments**:
  - Add comments on any article
  - Edit/delete their own comments
- **Profile**:
  - View and update personal details
  - See list of their authored articles

### 🔹 Admin
- **All User capabilities**, plus:
- **User Management**:
  - View all registered users
  - Edit or delete any user
  - Activate/deactivate accounts
- **Article Management**:
  - Edit or delete **any article**
  - Activate/deactivate articles (e.g., hide inappropriate content)
- **Dashboard**:
  - Access admin-only APIs
  - View statistics (e.g., number of users, articles, comments)
  - Perform moderation tasks

---

## ⚙️ How the App Works

### 1. **Authentication Flow**
- User registers → credentials stored in MongoDB (hashed passwords with bcrypt).
- On login → backend issues a **JWT token**.
- Token stored in localStorage/sessionStorage → used for API requests.
- Middleware checks token validity and role before granting access.

### 2. **Article Management**
- Articles stored in MongoDB with fields:
  - `title`, `content`, `authorId`, `status` (active/inactive), `timestamps`
- Users can CRUD their own articles.
- Admins can CRUD **any** article.

### 3. **Role-Based Access Control (RBAC)**
- Middleware checks `req.user.role` (User/Admin).
- Example:
  - `GET /articles` → accessible to all logged-in users.
  - `DELETE /articles/:id` → allowed if `req.user.id === article.authorId` OR `req.user.role === 'admin'`.

### 4. **Frontend Behavior**
- React Router handles navigation.
- Conditional rendering based on role:
  - **User Dashboard** → personal articles, profile, comments.
  - **Admin Dashboard** → user list, article moderation, statistics.
- Protected routes ensure only authorized roles can access certain pages.

---

## 📊 Example API Endpoints

| Endpoint                  | Method | Role Access | Description |
|----------------------------|--------|-------------|-------------|
| `/api/auth/register`       | POST   | Public      | Register new user |
| `/api/auth/login`          | POST   | Public      | Login and get JWT |
| `/api/articles`            | GET    | User/Admin  | View all articles |
| `/api/articles/:id`        | PUT    | User/Admin  | Edit article (own or any if admin) |
| `/api/articles/:id`        | DELETE | User/Admin  | Delete article (own or any if admin) |
| `/api/users`               | GET    | Admin       | View all users |
| `/api/users/:id/status`    | PATCH  | Admin       | Activate/deactivate user |

---

## 🎨 Frontend UI Highlights
- **Navbar**: Shows different links depending on role (e.g., Admin Dashboard).
- **Article Editor**: Rich text editor for writing posts.
- **Profile Page**: Displays user info and authored articles.
- **Admin Dashboard**: Tables for users/articles with action buttons (edit, delete, toggle status).


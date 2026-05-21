Project Overview:

This is a MERN stack blog application with a backend (Node.js/Express, MongoDB) and a frontend (React, Vite).
The app supports user authentication, article management, and role-based access.
User Roles and Their Functions:

User:

Registers and logs in to the app.
Can view articles.
Can write, edit, and delete their own articles.
Can comment on articles.
Has a profile page.
Admin:

Has all User capabilities.
Can view all users and articles.
Can manage (edit/delete) any article or user.
Can activate/deactivate users and articles.
Has access to admin-specific APIs and dashboard.
How the App Works:

Users register and log in via the frontend, which communicates with backend APIs.
After login, users can create, edit, and delete their own articles.
Admins have additional privileges to manage all content and users.
The backend uses role-based authentication to restrict access to certain APIs.
The frontend displays different UI components and routes based on the user’s role (User or Admin).
\# System Architecture



\## MERN Architecture (High-Level)



Frontend (React)

&nbsp;  |

&nbsp;  | — API calls (Axios/Fetch)

&nbsp;  |

Backend (Node.js + Express)

&nbsp;  |

&nbsp;  | — Mongoose/MongoDB Queries

&nbsp;  |

Database (MongoDB)



---



\## Component Breakdown



\### Frontend

\- React + Context API or Redux

\- Components:

&nbsp; - Home

&nbsp; - ProductList

&nbsp; - ProductDetail

&nbsp; - Cart

&nbsp; - Checkout

&nbsp; - Admin Dashboard

&nbsp; - Admin Product CRUD



\### Backend

\- Express routes

\- Controllers

\- Models (Mongoose schemas)

\- Middlewares (auth, error handling)

\- Services (optional)



---



\## Flow Example: Fetch Products



React → `/api/products` → Express Router → Product Controller → MongoDB → Response



---



\## Authentication Flow (JWT)

1\. User logs in → backend returns JWT.

2\. React stores token in localStorage.

3\. Protected routes require Authorization header.

4\. Middleware verifies token.




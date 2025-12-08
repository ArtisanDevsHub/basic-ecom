# Database Design (MongoDB Collections)

## Users
- _id
- name
- email
- password (hashed)
- role: "user" | "admin"
- createdAt

## Products
- _id
- name
- description
- price
- category
- image
- stock
- rating
- createdAt

## Orders
- _id
- userId
- items: [ { productId, qty, price } ]
- totalAmount
- status
- createdAt

## Cart (Optional if not embedded)
- userId
- items: [ { productId, qty } ]

---

# Relationships
- Users → Orders = One-to-Many
- Users → Cart = One-to-One

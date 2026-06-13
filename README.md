# Product API - CRUD Application

## Overview

This project is a RESTful API built using Node.js, Express.js, MongoDB, and Mongoose. It allows users to perform CRUD (Create, Read, Update, Delete) operations on products.

## Features

* Create Product
* Get All Products
* Get Product By ID
* Update Product
* Delete Product
* Input Validation using Express Validator
* Error Handling Middleware
* MongoDB Atlas Integration

## Technologies Used

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Express Validator
* Dotenv

## Project Structure

```text
product-api/
│
├── server.js
├── .env
├── .gitignore
├── package.json
│
├── models/
│   └── Product.js
│
├── controllers/
│   └── productController.js
│
├── routes/
│   └── productRoutes.js
│
└── middleware/
    └── errorHandler.js
```

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd product-api
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### Run the Server

```bash
node server.js
```

Server will start on:

```text
http://localhost:5000
```

## API Endpoints

### Create Product

```http
POST /products
```

Request Body:

```json
{
  "name": "Laptop",
  "price": 50000,
  "description": "Gaming Laptop"
}
```

### Get All Products

```http
GET /products
```

### Get Product By ID

```http
GET /products/:id
```

### Update Product

```http
PUT /products/:id
```

### Delete Product

```http
DELETE /products/:id
```

## Validation

The API validates:

* Product name is required.
* Product price must be numeric.

## Error Handling

Centralized error handling middleware is implemented to return appropriate error responses.



# Product API

This is a simple CRUD API built using Node.js, Express.js, and MongoDB.

The API allows users to:

* Create a product
* View all products
* View a single product
* Update a product
* Delete a product

## Technologies Used

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Express Validator

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd product-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a .env File

Add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4. Run the Project

```bash
node server.js
```

If everything is configured correctly, you should see:

```text
MongoDB Connected
Server running on port 5000
```

## API Endpoints

### Create Product

```http
POST /products
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

* Product name is required.
* Product price must be a number.

## Author

Azaz Ansari

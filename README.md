# Product-management-system
Overview
--------
<a href="https://product-management-system-3-8fiv.onrender.com">LIVE DEMO</a>
This is a simple product management system built using Node.js, Express.js, and MongoDB. It allows users to register, log in, and manage products by adding, updating, and deleting them.

Features
--------

*   User authentication (Login & Registration)
    
*   Add, update, and delete products
    
*   Image upload functionality (using Multer)
    
*   Middleware for authentication and validation
    
*   Cookie-based session management
    
*   Form validation using `express-validator`
    
*   Technologies Used
    -----------------
    
    *   Node.js
        
    *   Express.js
        
    *   MongoDB
        
    *   Multer (for image uploads)
        
    *   Cookie-parser
        
    *   Express-session
        
    *   Express-validator
        
    *   Installation
        ------------
        
    *   git clone https://github.com/yourusername/product-management-system.git
        
    *   ### Access the Application
        
    *   http://localhost:3000
        
    *   Environment Variables
        ---------------------
        
    *   Create a `.env` file and add the following:
        
    *   PORT=3000
        
        SESSION\_SECRET=your\_secret\_key
        
        MONGO\_URI=mongodb+srv://your\_mongodb\_uri
        
    *   Project Structure
        -----------------
        
    *   ├── public/
        -----------
        
        │   ├── images/   # Stores uploaded images
        ------------------------------------------
        
        ├── models/
        -----------
        
        │   ├── product.model.js
        ------------------------
        
        │   ├── user.model.js
        ---------------------
        
        ├── controllers/
        ----------------
        
        │   ├── product.controller.js
        -----------------------------
        
        │   ├── user.controller.js
        --------------------------
        
        ├── routes/
        -----------
        
        │   ├── index.js
        ----------------
        
        ├── views/
        ----------
        
        │   ├── index.ejs
        -----------------
        
        │   ├── login.ejs
        -----------------
        
        │   ├── register.ejs
        --------------------
        
        │   ├── add-product.ejs
        -----------------------
        
        │   ├── update-product.ejs
        --------------------------
        
        ├── middlewares/
        ----------------
        
        │   ├── auth.middleware.js
        --------------------------
        
        │   ├── file-upload.middleware.js
        ---------------------------------
        
        │   ├── validation.middleware.js
        --------------------------------
        
        ├── app.js
        ----------
        
        ├── package.json
        ----------------
        
        ├── README.md
        -------------
        
    *   API Endpoints
        -------------
        
        Method
        
        Route
        
        Description
        
        GET
        
        `/`
        
        Home page
        
        GET
        
        `/register`
        
        Register page
        
        POST
        
        `/register`
        
        Register new user
        
        GET
        
        `/login`
        
        Login page
        
        POST
        
        `/login`
        
        Authenticate user
        
        GET
        
        `/logout`
        
        Logout user
        
        GET
        
        `/add-product`
        
        Add product page
        
        POST
        
        `/add-product`
        
        Add new product
        
        GET
        
        `/update-product/:id`
        
        Update product page
        
        POST
        
        `/update-product`
        
        Update product
        
        POST
        
        `/delete-product/:id`
        
        Delete product

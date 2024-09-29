# CraveBasket: Order, Eat, Repeat

This is a **React-based** web application that allows users to sign up or sign in, select food dishes from a menu, add them to a basket, and proceed to checkout. The app also provides an administration panel where administrators can monitor and manage the status of the orders.

## Table of Contents
- [CraveBasket: Order, Eat, Repeat](#cravebasket-order-eat-repeat)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
    - [User Features](#user-features)
    - [Admin Features](#admin-features)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Usage](#usage)
    - [User Flow](#user-flow)
  - [Folder Structure](#folder-structure)


## Features

### User Features
- **Authentication**:  
  Users can sign up or sign in using their credentials to access the app.

- **Menu Selection**:  
  Browse through a list of dishes available on the menu.

- **Basket Management**:  
  - Add selected dishes to the basket.  
  - View the basket with the list of selected dishes and their total price.  
  - Modify the basket by adding/removing dishes.

- **Checkout**:  
  Proceed to checkout to place an order.

### Admin Features
- **Order Management**:  
  - Admin users can view all orders placed by users.  
  - Admins can update the status of an order (e.g., mark it as "In Process", "Completed", etc.).

## Technologies Used
- **React**: Frontend library for building user interfaces.
- **React Router**: For navigating between different views (e.g., login, menu, basket, checkout, etc.).
- **Context API : For managing global state (e.g., user authentication status, basket content).
- CSS Modules**: For styling components.
- **Node.js / Express.js** : Backend API for handling user authentication and order management.
- MongoDB**: For user data and order storage.

## Installation

### Prerequisites
- **Node.js** (version >= 22.2)
  
### Steps

1. Clone the repository:
    ```bash
    git clone git@github.com:Zaid-dagbanbia/food-del-frontend.git
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the app:
    ```bash
    npm run dev
    ```
## Usage

### User Flow
1. **Sign Up / Sign In**:  
   Users must first register an account or sign in if they already have one.
2. **Browse Menu**:  
   After signing in, users can view the available dishes on the menu.
3. **Add to Basket**:  
   Click on a dish to add it to the basket.
4. **View Basket**:  
   The basket can be accessed to view the list of selected dishes and their respective quantities.
5. **Checkout**:  
   Once satisfied, users can proceed to checkout to place an order.
6. **Order Status**:  
   Users can track the progress of their order (e.g., "In Process", "Completed").

## Folder Structure

```bash
├── public/             # Public assets (HTML, static files)
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components (e.g., Home, Menu, Basket, Admin)
│   ├── context       # Context for global state man  # API services (e.g., authentication, order management)
│   ├── App.css/         # Global and component-specific styles
│   ├── App.js          # Main application component
│   └── index.js        # Entry point for the React app
├── package.json        # Project metadata and dependencies
├── .env                # Environment variables (e.g.URL)
└── README.md           # Project documentation (you're reading it now!)
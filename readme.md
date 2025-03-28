# Car Booking Platform

This project is a car booking platform that allows customers to book rides and drivers to manage their rides. The platform consists of a backend built with Node.js, Express, and MongoDB, and a frontend built with HTML, CSS, and JavaScript.

## Project Structure

```
backend/
    .env
    .gitignore
    package.json
    server.js
    config/
        db.js
    controller/
        Booking.controller.js
        car.controller.js
        user.controller.js
    middlewear/
        auth.middlewear.js
    models/
        Booking.model.js
        car.model.js
        user.model.js
    routes/
        booking.routes.js
        car.routes.js
        location.routes.js
        user.routes.js
frontend/
    index.html
    signup.html
    customer/
        AvailableCar.html
        customer.html
        mybooking.html
    driver/
        createRide.html
        driver.html
        driverBookings.html
        myRides.html
```

## Backend

### Installation

1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:
    ```
    PORT=your_port_number
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET_KEY=your_jwt_secret_key
    ```

4. Start the server:
    ```sh
    npm run dev
    ```

### API Endpoints

- **User Routes**
  - `POST /user/register` - Register a new user
  - `POST /user/login` - Login a user
  - `GET /user/get` - Get user details (requires token)
  - `PUT /user/update` - Update user details (requires token)

- **Car Routes**
  - `POST /car/create` - Create a new car (requires token)
  - `GET /car/get` - Get personal car data (requires token)
  - `PUT /car/update/:carId` - Update car data (requires token)
  - `DELETE /car/delete/:carId` - Delete car data (requires token)

- **Booking Routes**
  - `GET /booking/getDriverBooking` - Get driver booking (requires token)
  - `GET /booking/getUserBooking` - Get user booking (requires token)
  - `POST /booking/create/:carId` - Create a new booking (requires token)
  - `PUT /booking/update/:bookingId` - Update booking status (requires token)
  - `DELETE /booking/delete/:bookingId` - Delete booking (requires token)

- **Location Routes**
  - `GET /location/get` - Get available cars based on user location (requires token)

## Frontend

### Structure

- **Customer Pages**
  - `AvailableCar.html` - View available cars for booking
  - `customer.html` - Customer home page
  - `mybooking.html` - View and manage customer bookings

- **Driver Pages**
  - `createRide.html` - Create a new ride
  - `driver.html` - Driver home page
  - `driverBookings.html` - View and manage driver bookings
  - `myRides.html` - View and manage personal rides

- **Common Pages**
  - `index.html` - Login page
  - `signup.html` - Signup page

### Usage

1. Open the `frontend` directory in your preferred code editor or IDE.
2. Use a live server extension or serve the files using a local server to view the pages in your browser.
3. Navigate to `index.html` to login or `signup.html` to create a new account.

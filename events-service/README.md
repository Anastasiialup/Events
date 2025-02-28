# **Events Management System – Service Project**

## **Local Development Setup**

1. **Install Dependencies**:  
   ```sh
   npm install
   ```

## **Development Server**

1. **Start the Development Server**:
   ```sh
   npm run start:dev
   ```

2. **Open the Application in Your Browser** at:  
   [http://localhost:3000/graphql](http://localhost:3000/graphql)

## **MongoDB**

If you don't have MongoDB running locally, follow the next steps:

1. Open `mongod` on your local device.

2. Your MongoDB should be available under the following host:
   ```sh
   mongodb://localhost:27017
   ```

By default, the event-service connects to MongoDB on `localhost:27017` and creates a new database called `events-db`.

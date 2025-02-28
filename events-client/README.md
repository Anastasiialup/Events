# **Events Management System – Client Project**

## **Local Development Setup**

1. **Run Backend Project**:  
   See Backend service README.md for setup.

2. **Run Codegen Command**:  
   ```sh
   npm run codegen
   ```

3. **Install Dependencies**:
   ```sh
   npm install
   ```

## **Development Server**

1. **Start the Development Server**:
   ```sh
   npm run dev
   ```

2. **Open the Application in Your Browser** at:  
   [http://localhost:5173/](http://localhost:5173/)

## **Generating Codegen Types for Event Service**

Any changes to the backend schema should be fetched by our Codegen to update generated types. To do this, simply run the script from `package.json` by running the following command:
```sh
npm run codegen
```

Codegen is configured to download the schema from the dev instance of the event service, so please ensure that your PR with schema changes is merged. Otherwise, the schema won't be updated.

When types are generated, you can import what you need from `src/generated/graphql.types.ts` file.

## **Starting Storybook for Events Client**

1. **Start the Storybook**:
   ```sh
   npm run storybook
   ```

2. **Open Storybook in Your Browser** at:  
   [http://localhost:6006/](http://localhost:6006/)
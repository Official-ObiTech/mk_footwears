# mk_footwears

## Project Description

MK Footwears is a full-stack web application for managing and showcasing a footwear store. It includes features for user management, product management, cart functionality, and order processing.

## Dependencies

### Client-Side Dependencies

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For routing and navigation.
- **Vite**: A fast build tool for modern web projects.
- **TypeScript**: For type safety in JavaScript.
- **ESLint**: For linting and maintaining code quality.
- **PNPM**: A fast, disk space-efficient package manager.

### Server-Side Dependencies

- **Express**: A web framework for Node.js.
- **Cors**: For enabling Cross-Origin Resource Sharing.
- **Dotenv**: For managing environment variables.
- **Mongoose**: For interacting with MongoDB.

## Folder Structure

### Client

- `src/components`: Contains reusable React components.
- `src/pages`: Contains page-level components.
- `src/assets`: Contains static assets like images.

### Server

- `src/config`: Contains configuration files (e.g., database connection).
- `src/models`: Contains Mongoose models.
- `src/routes`: Contains API route definitions.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/Official-ObiTech/mk_footwears.git
   ```

2. Navigate to the project directory:

   ```bash
   cd mk_footwears
   ```

3. Install dependencies for the client:

   ```bash
   cd client
   pnpm install
   ```

4. Install dependencies for the server:

   ```bash
   cd ../server
   pnpm install
   ```

5. Create a `.env` file in the `server` directory and add the following:

   ```env
   PORT=4000
   MONGO_URI=your_mongodb_connection_string
   ```

6. Start the development servers:
   - Client:
     ```bash
     pnpm dev
     ```
   - Server:
     ```bash
     pnpm start
     ```

## License

This project is licensed under the MIT License.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

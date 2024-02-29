
# TS-Vite Posts

This is a sample project that utilizes TypeScript, Vite, Tailwind CSS, and Axios to display posts fetched from [dummyjson.com](https://dummyjson.com/). The primary goal of this project is to help understand and practice TypeScript and Vite concepts while building a simple web application

![Project Image](https://drive.google.com/thumbnail?id=1JLf661eO3ro6_WpMqISDSllzaays2oPV&s=500).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation && Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/reponseashimwe/ts-vite-posts.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ts-vite-posts
   ```

3. Install dependencies:

   ```bash
   npm install
   ```
  
 4. Run the development server:

    ```bash
    npm run dev
    ```

## Viewing Posts
Once the development server is running, you can view all the posts by visiting http://localhost:5173 in your browser.


## Scripts

- `dev`: Start the development server using Vite.
- `build`: Build the project for production using TypeScript and Vite.
- `lint`: Lint TypeScript files using ESLint.
- `preview`: Serve the production build locally for preview.

## Dependencies

- [axios](https://www.npmjs.com/package/axios): Promise-based HTTP client for the browser and Node.js.
- [react](https://www.npmjs.com/package/react): JavaScript library for building user interfaces.
- [react-dom](https://www.npmjs.com/package/react-dom): React package for working with the DOM.
- [react-hook-form](https://www.npmjs.com/package/react-hook-form): Performant, flexible, and extensible forms with easy-to-use validation.
- [react-query](https://www.npmjs.com/package/react-query): Hooks for fetching, caching, and updating asynchronous data.
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): DOM bindings for React Router.
- [tailwindcss](https://www.npmjs.com/package/tailwindcss): A utility-first CSS framework.
- [typescript](https://www.npmjs.com/package/typescript): TypeScript is a language for application-scale JavaScript.

## Folder Structure

Describe the organization of your project's folders and files.

```
src/                # Source code
|-- assets/         # React svg
|-- components/     # React components
|-- types/          # Types & Interface declarations
|-- Posts.tsx         # Posts page
|-- main.tsx        # Entry point and main application file
|-- index.css
```

## Contributing

If you'd like to contribute to this project, please follow the [Contributor Covenant](CODE_OF_CONDUCT.md).

## License

This project is licensed under the [MIT License](LICENSE).

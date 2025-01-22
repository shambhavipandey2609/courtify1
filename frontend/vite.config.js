// // import { defineConfig } from 'vite'
// // import react from '@vitejs/plugin-react'

// // // https://vite.dev/config/
// // export default defineConfig({
// //   plugins: [react()],
// // })



// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 5173, // Optional: Set your desired port
//   },
//   build: {
//     rollupOptions: {
//       input: './index.html',
//     },
//   },
// });


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import history from 'connect-history-api-fallback';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     middlewareMode: true,
//     setupMiddlewares: (middlewares) => {
//       middlewares.push(history());
//       return middlewares;
//     },
//   },
// });

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 5173, // Optional: Change port if needed
//   },
// });
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 5173,
//   },
//   resolve: {
//     alias: {
//       '@': '/srclawyer',
//     },
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Ensure the root directory is the overall project folder
  server: {
    port: 5173, // Default port
  },
  build: {
    rollupOptions: {
      input: {
        lawyer: './srclawyer/index.html', // Entry point for lawyer
        student: './srcstudent/lawstudent.html', // Entry point for law student
      },
    },
    outDir: 'dist', // Common output directory for both projects
  },
  resolve: {
    alias: {
      '@lawyer': '/srclawyer', // Alias for lawyer files
      '@student': '/srcstudent', // Alias for law student files
    },
  },
});

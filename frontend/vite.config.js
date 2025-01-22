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
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  resolve: {
    alias: {
      '@': '/srclawyer',
    },
  },
});


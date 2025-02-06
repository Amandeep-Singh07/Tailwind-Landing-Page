/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/index.html"], // Adjust paths as needed
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Custom blue
        secondary: "#9333EA", // Custom purple
        customGray: {
          100: "#F3F4F6", // Light gray
          500: "#6B7280", // Default gray
          900: "#1F2937", // Dark gray
        },
      },
    },
  },
  plugins: [],
};

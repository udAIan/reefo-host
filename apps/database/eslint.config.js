import { sharedConfig } from "../../eslint.config.js";
import drizzle from "eslint-plugin-drizzle";

export default [
  ...sharedConfig,
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      drizzle,
    },
    rules: {
      // Drizzle-specific rules for database safety
      "drizzle/enforce-delete-with-where": "error",
      "drizzle/enforce-update-with-where": "error",
    },
  },
];

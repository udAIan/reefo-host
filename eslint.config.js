import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

// Shared configuration that can be extended by individual packages
export const sharedConfig = tseslint.config(
  // Base configuration for all files
  {
    ignores: ["**/dist/**", "**/node_modules/**"],
  },

  // TypeScript configuration
  {
    files: ["**/*.{ts,tsx}"],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es2022,
      },
    },
    rules: {
      // Common rules for all TypeScript projects
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "prefer-const": "error",
      "no-console": "error",
      "no-debugger": "error",
    },
  },

  // JavaScript configuration (for any .js files)
  {
    files: ["**/*.{js,jsx}"],
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es2022,
      },
    },
    rules: {
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "no-console": "warn",
      "no-debugger": "error",
    },
  }
);

// Root configuration that excludes client app
export default tseslint.config(...sharedConfig, {
  ignores: [
    "apps/client/**", // Exclude client app since it has its own ESLint config
  ],
});

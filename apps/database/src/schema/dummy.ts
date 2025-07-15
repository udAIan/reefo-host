import { pgTable, serial } from "drizzle-orm/pg-core";

export const _dummy = pgTable("dummy", {
  id: serial().primaryKey(),
});

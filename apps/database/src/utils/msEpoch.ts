import { sql } from "drizzle-orm";

export const msEpoch = sql`(EXTRACT(EPOCH FROM NOW()) * 1000)::BIGINT`;

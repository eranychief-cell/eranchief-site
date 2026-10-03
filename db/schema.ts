import { index, integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const newsletterSubscribers = sqliteTable(
  "newsletter_subscribers",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    email: text("email").notNull(),
    source: text("source").notNull().default("website"),
    createdAt: text("created_at").notNull(),
  },
  (table) => [uniqueIndex("idx_newsletter_subscribers_email").on(table.email)],
);

export const collectorStories = sqliteTable("collector_stories", {
  id: text("id").primaryKey(),
  firstName: text("first_name").notNull(),
  email: text("email").notNull(),
  city: text("city").notNull().default(""),
  artwork: text("artwork").notNull(),
  message: text("message").notNull(),
  photoKey: text("photo_key"),
  photoType: text("photo_type"),
  publishConsent: integer("publish_consent").notNull().default(0),
  status: text("status").notNull().default("pending"),
  ipHash: text("ip_hash").notNull(),
  createdAt: text("created_at").notNull(),
}, table => [index("idx_collector_stories_status_created").on(table.status, table.createdAt), index("idx_collector_stories_ip_created").on(table.ipHash, table.createdAt)]);

CREATE TABLE `collector_stories` (
	`id` text PRIMARY KEY NOT NULL,
	`first_name` text NOT NULL,
	`email` text NOT NULL,
	`city` text DEFAULT '' NOT NULL,
	`artwork` text NOT NULL,
	`message` text NOT NULL,
	`photo_key` text,
	`photo_type` text,
	`publish_consent` integer DEFAULT 0 NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`ip_hash` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_collector_stories_status_created` ON `collector_stories` (`status`,`created_at`);--> statement-breakpoint
CREATE INDEX `idx_collector_stories_ip_created` ON `collector_stories` (`ip_hash`,`created_at`);
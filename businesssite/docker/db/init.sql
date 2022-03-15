CREATE TABLE "accounts" (
  "account_id" varchar(36) NOT NULL,
  "username" varchar(40) NOT NULL,
  "firstname" varchar(80) NOT NULL,
  "lastname" varchar(80) NOT NULL,
  "password" varchar(80) NOT NULL,
  PRIMARY KEY ("account_id")
);

ALTER TABLE "accounts"
ADD CONSTRAINT "accounts_username" UNIQUE ("username");

CREATE TABLE "reviews" (
  "Review_id" varchar(36) NOT NULL,
  "account_id" varchar(36) NOT NULL,
  "title" varchar(80) NOT NULL,
  "description" text NOT NULL,
  "date" timestamptz NOT NULL,
  PRIMARY KEY ("Review_id")
);

CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
  "sess" json NOT NULL,
  "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);

ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;
CREATE INDEX "IDX_session_expire" ON "session" ("expire");

-- CREATE INDEX "tasks_account_id" ON "tasks" ("account_id");
-- CREATE INDEX "tasks_due_date" ON "tasks" ("account_id", "due_date");
-- CREATE INDEX "tasks_completed" ON "tasks" ("account_id", "completed");
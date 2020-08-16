CREATE TABLE "members" (
  "id" int PRIMARY KEY,
  "full_name" varchar
);

CREATE TABLE "projects" (
  "code" varchar PRIMARY KEY,
  "name" varchar,
  "start_date" datetime,
  "end_date" datetime
);

CREATE TABLE "user_project" (
  "user_id" int,
  "project_code" varchar,
  "start_date" datetime,
  "end_date" datetime
);

CREATE TABLE "area" (
  "id" int PRIMARY KEY,
  "name" varchar
);

CREATE TABLE "project_area" (
  "area_id" int,
  "project_code" varchar
);

ALTER TABLE "user_project" ADD FOREIGN KEY ("user_id") REFERENCES "members" ("id");

ALTER TABLE "user_project" ADD FOREIGN KEY ("project_code") REFERENCES "projects" ("code");

ALTER TABLE "project_area" ADD FOREIGN KEY ("area_id") REFERENCES "area" ("id");

ALTER TABLE "project_area" ADD FOREIGN KEY ("project_code") REFERENCES "projects" ("code");

CREATE INDEX ON "members" ("id");

CREATE INDEX ON "projects" ("code");

CREATE INDEX ON "area" ("id");

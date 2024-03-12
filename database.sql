
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
        SELECT
  a.id,
  a.time_completed,
  a.first_name,
  a.email,
  a.phone_number,
  a.address,
  a.zip,
  a.description,
  a.budget,
 a.status,
  json_agg(
      json_build_object(
          'service_id',
          services.id,
          'service_name',
          services.name
      )
  ) services_array
  FROM appointments a
  LEFT JOIN appointments_services ac ON a.id = ac.appt_id
  LEFT JOIN services ON ac.service_id = services.id
GROUP BY a.id
ORDER BY a.id;
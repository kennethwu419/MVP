DROP DATABASE IF EXISTS sunrise;

CREATE DATABASE sunrise;

\c sunrise

CREATE TABLE calendar (
 id BIGSERIAL,
 apptdate VARCHAR,
 appttime VARCHAR
);


ALTER TABLE calendar ADD CONSTRAINT calendar_pkey PRIMARY KEY (id);
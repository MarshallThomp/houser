CREATE TABLE houses (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    address VARCHAR,
    city VARCHAR,
    state VARCHAR,
    zip INTEGER
);

INSERT INTO houses (name, address, city, state, zip)
VALUES ('The House', '291 w 900 n', 'Lehi', 'Utah', 84049);
-- dummy data

ALTER TABLE houses
ADD image TEXT;

ALTER TABLE houses
ADD monthly_mortgage DECIMAL;

ALTER TABLE houses
ADD desired_rent DECIMAL;
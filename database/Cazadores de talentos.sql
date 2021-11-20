CREATE TABLE users (
  id SERIAL not null,
  full_name text primary key not null,
  age int,
  email text,
  phone int,
  linkedIn text,
  reputacion int,
  userType userTypes
);

CREATE TABLE perfilCazador (
  id SERIAL not null,
  full_name text primary key,
  location text,
  proyectos text [] NOT NULL,
  giroProy text,
  foreign key(full_name) REFERENCES users(full_name)
);

CREATE TABLE perfilTalento (
  id SERIAL not null,
  full_name text primary key,
  profession text,
  habilities text [] NOT NULL,
  foreign key(full_name) REFERENCES users(full_name)
);

CREATE TABLE proyectos (
  id SERIAL PRIMARY KEY not null,
  name text,
  hunter text,
  assigned boolean,
  foreign key(hunter) REFERENCES perfilCazador(full_name)
);

CREATE TABLE speedDate (
  id SERIAL PRIMARY KEY not null,
  date date,
  time timestamp,
  hunter text,
  talent text,
  foreign key(hunter) REFERENCES perfilCazador(full_name),
  foreign key(talent) REFERENCES perfilTalento(full_name)
);

CREATE TABLE contract (
  id SERIAL PRIMARY KEY not null,
  proyectName text,
  description text,
  duration int,
  hunter text,
  talent text,
  totalPrice int,
  foreign key(hunter) REFERENCES perfilCazador(full_name),
  foreign key(talent) REFERENCES perfilTalento(full_name)
);
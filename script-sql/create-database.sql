-- requête création des tables

DROP TABLE IF EXISTS plant CASCADE;

CREATE TABLE plant(
	id SERIAL PRIMARY KEY NOT NULL,
    nom VARCHAR(255)NOT NULL,
    soleil VARCHAR(150)NOT NULL,
    arrosage INTEGER NOT NULL,
    categorie VARCHAR(150)NOT NULL,
    image TEXT
);
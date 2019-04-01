CREATE TABLE Orders(
	id UUID,
	userid TEXT,
	creation TIMESTAMP,
	product TEXT,
	PRIMARY KEY (id, userid)
);
CREATE INDEX ON Orders(userid);
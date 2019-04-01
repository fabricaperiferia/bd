CREATE KEYSPACE aval
WITH replication = {
	'class' : 'SimpleStrategy',
	'replication_factor' : 1
};

conn = new Mongo();
db = conn.getDB("admin");
db.createUser({user: "pocauth", pwd: "pocauth", roles: ["readWrite", "dbAdmin"], passwordDigestor: "server"})
db = conn.getDB("auth");
db.createUser({user: "pocauth", pwd: "pocauth", roles: ["readWrite", "dbAdmin"], passwordDigestor: "server"});
db.createCollection('user');
db.user.ensureIndex({'username': 1}, {unique: true});
db.user.insert({'admin','$2a$10$wTnPP1P6Ro6nFpotvTzxU.XHfg29ya3Okjexqk5BFFbvsBvThNK3q'});
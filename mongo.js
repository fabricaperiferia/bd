use auth

db.createUser(
  {
    user: "pocauth",
    pwd: "pocauth",
    roles: [
       { role: "readWrite", db: "auth" }
    ],
    passwordDigestor: "server"
  }
);
  
db.createCollection('user');
  
db.user.ensureIndex({'username': 1}, {unique: true});

db.user.insert({'username':'admin','password':'$2a$10$wTnPP1P6Ro6nFpotvTzxU.XHfg29ya3Okjexqk5BFFbvsBvThNK3q'});

use poc-catalogo


db.createUser(
  {
    user: "Adm1n",
    pwd: "Adm1n",
    roles: [
       { role: "readWrite", db: "poc-catalogo" }
    ]
  }
)

db.createCollection('catalogos');


db.catalogos.insert([{'nombre':"Gel Limpiador",
'presentacion':"125 ml",
'precio':"24.000",
'categoria':"Belleza",
'imagen':"https://amwaystoragev2.blob.core.windows.net/amway/productos/400_121548.jpg",
'descripcion':"Gel limpiador"}
,
{
  'nombre':"Loción Humectante de Noche",
  'presentacion':"50 ml",
  'precio':"4.000",
  'categoria':"Belleza",
  'imagen':"https://amwaystoragev2.blob.core.windows.net/amway/productos/400_121548.jpg",
  'descripcion':"Loción Humectante de Noche"
  },
  {
    'nombre':"Toallitas Desmaquillantes",
    'presentacion':"25 unidades",
    'precio':"56.210",
    'categoria':"Belleza",
    'imagen':"https://amwaystoragev2.blob.core.windows.net/amway/productos/400_121549.jpg",
    'descripcion':"Toallitas Desmaquillantes"
    }
    ,
  {
    'nombre':"Acondicionador Reparador del Color",
    'presentacion':"280 ml",
    'precio':"56.210",
    'categoria':"Cuidado personal",
    'imagen':"https://amwaystoragev2.blob.core.windows.net/amway/productos/400_110671.jpg",
    'descripcion':"Acondicionador Reparador del Color"
    }
    ,
    {
      'nombre':"Tratamiento Reparador Nocturno",
      'presentacion':"100 ml",
      'precio':"56.210",
      'categoria':"Cuidado personal",
      'imagen':"https://amwaystoragev2.blob.core.windows.net/amway/productos/400_110677.jpg",
      'descripcion':"Tratamiento Reparador Nocturno"
      }
      ,
      {
        'nombre':"Tratamiento Reparador Nocturno",
        'presentacion':"100 ml",
        'precio':"56.210",
        'categoria':"Cuidado personal",
        'imagen':"https://amwaystoragev2.blob.core.windows.net/amway/productos/400_110677.jpg",
        'descripcion':"Tratamiento Reparador Nocturno"
        }
      
])

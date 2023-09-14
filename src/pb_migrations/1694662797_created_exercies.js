/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "z1niyt6jfvjovp4",
    "created": "2023-09-14 03:39:57.774Z",
    "updated": "2023-09-14 03:39:57.774Z",
    "name": "exercies",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "djsmgeyu",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("z1niyt6jfvjovp4");

  return dao.deleteCollection(collection);
})

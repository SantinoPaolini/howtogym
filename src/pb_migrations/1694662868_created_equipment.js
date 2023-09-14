/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ttfc47jn2brbw5x",
    "created": "2023-09-14 03:41:08.144Z",
    "updated": "2023-09-14 03:41:08.144Z",
    "name": "equipment",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bim4uz7h",
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
  const collection = dao.findCollectionByNameOrId("ttfc47jn2brbw5x");

  return dao.deleteCollection(collection);
})

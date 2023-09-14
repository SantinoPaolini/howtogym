/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7ljlikr5cq008fu",
    "created": "2023-09-14 03:40:24.717Z",
    "updated": "2023-09-14 03:40:24.717Z",
    "name": "muscles",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dwrtb9uc",
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
  const collection = dao.findCollectionByNameOrId("7ljlikr5cq008fu");

  return dao.deleteCollection(collection);
})

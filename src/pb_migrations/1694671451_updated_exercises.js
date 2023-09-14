/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z1niyt6jfvjovp4")

  // remove
  collection.schema.removeField("zygftox4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "skd9uzex",
    "name": "model",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z1niyt6jfvjovp4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zygftox4",
    "name": "model",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // remove
  collection.schema.removeField("skd9uzex")

  return dao.saveCollection(collection)
})

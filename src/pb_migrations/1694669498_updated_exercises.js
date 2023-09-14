/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z1niyt6jfvjovp4")

  // remove
  collection.schema.removeField("6fqgsywr")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z1niyt6jfvjovp4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6fqgsywr",
    "name": "model",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // remove
  collection.schema.removeField("zygftox4")

  return dao.saveCollection(collection)
})

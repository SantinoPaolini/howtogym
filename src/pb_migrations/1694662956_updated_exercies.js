/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z1niyt6jfvjovp4")

  collection.name = "exercises"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bhrfktvo",
    "name": "image",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z1niyt6jfvjovp4")

  collection.name = "exercies"

  // remove
  collection.schema.removeField("bhrfktvo")

  return dao.saveCollection(collection)
})

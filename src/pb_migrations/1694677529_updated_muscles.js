/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7ljlikr5cq008fu")

  // remove
  collection.schema.removeField("jjasoqfr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dxd4jtrk",
    "name": "exercise",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "z1niyt6jfvjovp4",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7ljlikr5cq008fu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jjasoqfr",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "z1niyt6jfvjovp4",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("dxd4jtrk")

  return dao.saveCollection(collection)
})

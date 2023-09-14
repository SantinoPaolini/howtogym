/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ttfc47jn2brbw5x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jbjkh2xj",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ttfc47jn2brbw5x")

  // remove
  collection.schema.removeField("jbjkh2xj")

  return dao.saveCollection(collection)
})

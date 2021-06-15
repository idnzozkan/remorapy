class BaseService {
  constructor(model) {
    this.model = model
  }

  save(objects) {
    return this.model.insertMany(objects)
  }

  insert(object) {
    return this.model.create(object)
  }

  load() {
    return this.model.find()
  }

  find(id) {
    return this.model.findById(id)
  }

  findBy(property, value) {
    return this.model.find({ [property]: value })
  }

  removeBy(property, value) {
    return this.model.deleteOne({ [property]: value })
  }
}

module.exports = BaseService

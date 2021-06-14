class BaseService {
  constructor(model) {
    this.model = model
  }

  save() {}

  load() {
    return this.model.find()
  }
}

module.exports = BaseService

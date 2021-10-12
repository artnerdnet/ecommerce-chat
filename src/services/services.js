class Services {
  constructor (model) {
      this.model = model
  }

  getAll = async () => {
      try {
          const items = await this.model.find();
          return items
      } catch (error) {
          console.log(error)
          return error;
      }
  }

  getById = async (id) => {
      try {
          const item = await this.model.findById(id);
          return item
      } catch (error) {
          console.log(error)
          return error;
      }
  }

  createDocument = async item => {
      try {
          const document = await this.model.create(item)
          return document
      } catch (error) {
          console.log(error)
          return error;
      }
  }

  updateById = async (id, data) => {
      try {
          const document = await this.model.findByIdAndUpdate(id, data)
          return document
      } catch (error) {
          console.log(error)
          return error;
      }
  }

  deleteById = async (id) => {
      try {
          const deleted = await this.model.findByIdAndDelete(id)
          return deleted
      } catch (error) {
          console.log(error)
          return error;
      }
  }
}

export default Services;
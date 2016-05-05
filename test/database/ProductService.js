import dataSource from '../../src/database'

const Product = dataSource.model('product')
const Service = dataSource.model('service')

Service.sync({force: true}).then(() => {
  Product.sync({force: true}).then(() => {
    Service.create({
      name: '干洗',
    }).then((service) => {
      Product.create({
        type: '羽绒服',
        price: 30,
      }).then((product) => {
        product.setService(service).then((newProduct) => {
          console.log(JSON.stringify(newProduct))
        })
      })
    })
  })
})

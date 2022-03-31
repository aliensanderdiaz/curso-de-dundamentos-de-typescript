import _ from 'lodash'

const data = [
  {
    username: 'nicolas',
    role: 'admin'
  },
  {
    username: 'valentina',
    role: 'seller'
  },
  {
    username: 'Zulema',
    role: 'seller'
  },
  {
    username: 'santiago',
    role: 'customer'
  },
]


const rta = _.groupBy(data, item => item.role)
console.log({ rta })

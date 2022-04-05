import './asyncmock.css'

const products = [
    {id: 1, name: 'iphone12', price:1000, category: 'celular', stock:25, description: 'desc iphone12 bla ble bli'},
    {id: 2, name: 'samsng s21', price:800, category:  'celular', stock:10, description: 'desc samsung bla ble bli'},
    {id: 3, name: 'ipad 8va gen', price:1200, category: 'tablet', stock:15, description: 'desc ipad ssss yyy zzz'}
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}


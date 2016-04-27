const urlBase = 'http://localhost:3000/api'

async function fetchProducts() {
  const response = await fetch(`${urlBase}/products`)
  const products = await response.json()
  return {
    type: 'FETCH_ALL',
    products,
  }
}

export { fetchProducts }

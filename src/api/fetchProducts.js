const fetchProducts = async () => {
  const response = await fetch(
    'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=5&sortBy=id&orderBy=DESC',
  );
  const data = await response.json();

  return data;
};

export default fetchProducts;

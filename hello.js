const products = [
  {
    title: "Cabbage",
    id: 1,
  },
  {
    title: "abbage",
    id: 2,
  },
  {
    title: "bage",
    id: 3,
  },
];

function box() {
  const list = products.map((product) => (
    <li key={product.id}>
      console.log("Heeelo")
      {product.title}
    </li>
  ));

  return <ul>{list}</ul>;
}

box();

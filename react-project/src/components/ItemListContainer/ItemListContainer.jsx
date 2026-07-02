import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getByCategory } from "../../services/ProductsService";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    //Usanmos la funcion con 2 uso: trae todo o filtra si category existe
    getByCategory(category)
      .then((data) => setProducts(data))
      .catch((err) => console.log("Hubo un error:", err))
      .finally(() => setLoading(false));
  }, [category]);

  console.log(products);

  if (loading) return <p>Cargando...</p>;

  return (
    <section>
      <ItemList products={products} />
    </section>
  );
};
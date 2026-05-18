import "./Item.css";


export const Item = ({ nombre, imagen, descripcion, precio, children }) => {
  return (
    <article className="card">
      <img src={imagen} alt={`foto de ${nombre}`} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>${precio}</p>
      {children}
    </article>
  );
};
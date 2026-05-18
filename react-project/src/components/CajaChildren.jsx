export const CajaChildren = ({ children }) => {
  return (
    <div>
      {children[1]}
      <h1>Esta es una caja que acepta children</h1>

      <p>Debajo del contenido a recibir, tiene su propia estructura</p>
    </div>
  );
};
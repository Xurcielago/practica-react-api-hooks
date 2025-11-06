export const CharacterInfo = ({ data }) => {
  if (!data) {
    return (
      <div className="alert alert-warning text-center">
        No se encontró el personaje.
      </div>
    );
  }

  const { name } = data;

  return (
    <div className="text-center">
      <h3>{name}</h3>
    </div>
  );
};

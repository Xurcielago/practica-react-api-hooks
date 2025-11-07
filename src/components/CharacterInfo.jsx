export const CharacterInfo = ({ data }) => {
  if (!data) {
    return (
      <div className="alert alert-warning text-center">
        No se encontró el personaje.
      </div>
    );
  }

  const { name, portrait_path } = data;

  return (
    <div className="text-center">
      <h3>{name}</h3>
      <h3>{portrait_path}</h3>
      <div>
        <img
          src={`https://cdn.thesimpsonsapi.com/500${portrait_path}`}
          alt="Help"
        />
      </div>
    </div>
  );
};

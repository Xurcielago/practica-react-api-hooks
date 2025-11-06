import { useEffect } from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "../components/Loading.jsx";
import { CharacterInfo } from "../components/CharacterInfo.jsx";

export const MultipleCustomHooks = () => {
  const { count, handleIncrement } = useCounter(1);
  const url = `https://thesimpsonsapi.com/api/characters/${count}`;

  const { data, isLoading, error, getFetch } = useFetch();

  useEffect(() => {
    getFetch(url);

    return () => {
      console.log("desmonta useFetch");
    };
  }, [url]);

  return (
    <>
      <h1>Los simpsons API</h1>
      <h2>Personajes</h2>
      <hr />

      {isLoading ? (
        <Loading />
      ) : error ? (
        <div className="alert alert-danger text-center">
          <h3>Error:</h3>
          <p>{error}</p>
          <p>(El ID: {count} no existe)</p>
        </div>
      ) : (
        <CharacterInfo data={data} />
      )}

      <button
        onClick={() => handleIncrement(1)}
        disabled={isLoading}
        className="btn btn-primary mt-2"
      >
        Siguiente
      </button>
    </>
  );
};

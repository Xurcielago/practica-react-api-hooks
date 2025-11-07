import { useEffect } from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "../components/Loading.jsx";
import { CharacterInfo } from "../components/CharacterInfo.jsx";

export const MultipleCustomHooks = () => {
  const { count, handleIncrement } = useCounter(1);
  const url = `https://thesimpsonsapi.com/api/characters/${count}`;

  const { state, getFetch } = useFetch(count);
  const { data, isLoading } = state;

  useEffect(() => {
    getFetch(url);
    return () => {
      console.log("desmonta useFetch");
      console.log(data);
    };
  }, [url]);

  return (
    <>
      <h1>Los simpsons API</h1>
      <h2>Personajes: </h2>
      <hr />
      {console.log(data)}
      {isLoading ? <Loading /> : <CharacterInfo data={data} />}

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

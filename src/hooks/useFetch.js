import { useState } from "react";

export const useFetch = (url) => {
  // Estado inicial del hook
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  // Función getFetch
  const getFetch = async (url) => {
    try {
      setState({
        ...state,
        isLoading: true,
        error: null,
      });

      const resp = await fetch(url);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const data = await resp.json();

      setState({
        data: data[0],
        isLoading: false,
        error: null,
      });
    } catch (error) {
      console.log("Error en useFetch", error);
      setState({
        data: null,
        isLoading: false,
        error: error.message,
      });
    }
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
    getFetch,
  };
};

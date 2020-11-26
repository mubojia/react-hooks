import React, { useContext, useReducer, useEffect } from "react";
import Card from "./Card";
import Reducer from "../../reducer";
import { AuthContext } from "./LoginComponent";

const initialState = {
  songs: [],
  isFetching: false,
  hasError: false,
};
export const Home = () => {
  const { state: authState } = useContext(AuthContext);
  const [state, dispatch] = useReducer(Reducer.homeReducer, initialState);

  useEffect(() => {
    dispatch({
      type: "FETCH_SONGS_REQUEST",
    });

    fetch("https://hookedbe.herokuapp.com/api/songs", {
      headers: {
        Authorization: `Bearer ${authState.token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw res;
        }
      })
      .then((resJson) => {
        console.log(resJson);
        dispatch({
          type: "FETCH_SONGS_SUCCESS",
          payload: resJson,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: "FETCH_SONGS_FAILURE",
        });
      });
  }, [authState.token]);

  return (
    <React.Fragment>
      <div className="home">
        {state.isFetching ? (
          <span className="loader">LOADING...</span>
        ) : state.hasError ? (
          <span className="error">AN ERROR HAS OCCURED</span>
        ) : (
          <>
            1111
            {state.songs.length > 0 &&
              state.songs.map((song) => (
                <Card key={song.id.toString()} song={song} />
              ))}
          </>
        )}
      </div>
    </React.Fragment>
  );
};
export default Home;

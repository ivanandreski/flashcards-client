import { useState, useEffect } from "react";
import CourseDecks from "../../MockDB/CourseDecks";

const useFetchCourseDecks = () => {
  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  //   useEffect(() => {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         seterror(data.error);
  //         setdata(data.joke);
  //         setloading(false);
  //       });
  //   }, [url]);
  //   return { data, loading, error };

  // Get list from mock db
  useEffect(() => {
    setDecks(CourseDecks.Decks);
    setLoading(false);
  }, []);

  return { decks, loading, error };
};

export default useFetchCourseDecks;

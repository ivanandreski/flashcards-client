import {useState, useEffect} from 'react'
import DeckSession from '../../MockDB/DeckSession';

const useFetchUserDeckSession = () => {
    const [flashcards, setFlashcards] = useState([]);
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
        setFlashcards(DeckSession.UserFlashcards);
      setLoading(false);
    }, []);
  
    return { flashcards, loading, error };
}

export default useFetchUserDeckSession
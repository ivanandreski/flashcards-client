import { useState, useEffect } from "react";
import CourseDecks from "../../MockDB/CourseDecks";
import useGetUser from "../useGetUser";
import axios from "../../axios/axios";

const useFetchCourseDecks = (courseId) => {
  const user = useGetUser();

  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const config = {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  };

  useEffect(() => {
    if (user == null) {
      return;
    }

    axios.get(`/flash-cards/course/${courseId}/decks`, config).then((resp) => {
      let c = resp.data;

      setDecks(
        c.map((c) => {
          return {
            id: c.id,
            name: c.title,
            correctAnswers: 0,
            questions: c.flashcards.length,
            flashcards: c.flashcards,
          };
        })
      );
      setLoading(false);
    });
  }, [courseId]);
  return { decks, loading, error };
};

export default useFetchCourseDecks;

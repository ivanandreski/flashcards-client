import { useState, useEffect } from "react";
import MyCoursesList from "../../MockDB/MyCoursesList";
import useGetUser from "../useGetUser";
import axios from "../../axios/axios";

const useFetchMyCourses = () => {
  const user = useGetUser();

  const [courses, setCourses] = useState([]);
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

    axios.get("/flash-cards/course", config).then((resp) => {
      let c = resp.data;
      if (user.role == "STUDENT") {
        c = c.filter(
          (c) =>
            c.title == "Math" ||
            c.title == "Programming" ||
            c.title == "New Course"
        );
      } else {
        c = c.filter((c) => c.title != "Math");
      }

      setCourses(
        c.map((c) => {
          return { id: c.id, name: c.title };
        })
      );
      setLoading(false);
    });
  }, []);
  return { courses, loading, error };
};

export default useFetchMyCourses;

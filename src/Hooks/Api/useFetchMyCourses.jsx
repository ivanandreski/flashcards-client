import { useState, useEffect } from "react";
import MyCoursesList from "../../MockDB/MyCoursesList";
import useGetUser from "../useGetUser";

const useFetchMyCourses = () => {
  const loggedIn = useGetUser();

  const [courses, setCourses] = useState([]);
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
    setCourses(loggedIn ? MyCoursesList.Courses : []);
    setLoading(false);
  }, []);
  return { courses, loading, error };
};

export default useFetchMyCourses;

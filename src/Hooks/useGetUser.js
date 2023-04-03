const useGetUser = () => {
  return localStorage.getItem('user') != null;
};

export default useGetUser;

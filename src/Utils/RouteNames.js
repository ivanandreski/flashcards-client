export default class RouteNames {
  static Home = "/";
  static Login = "/login";
  static Register = "/register";
  static Profile = "/profile";
  static Course = (id) => `/course/${id}`;
}

export default class RouteNames {
  static Home = "/";

  // Auth
  static Login = "/login";
  static Register = "/register";

  // Profile
  static Profile = "/profile";
  static Info = "/profile/info";
  static ChangePassword = "/profile/change-password";
  static ChangeEmail = "/profile/change-email";
  static DeleteMyAccount = "/profile/delete-my-account";

  // Study
  static Course = (id) => `/course/${id}`;
  static Deck = (id) => `/deck/${id}`;

  static Admin = "/admin";
  static Teacher = "/teacher";
  static NoPermission = "/no-permission";
}

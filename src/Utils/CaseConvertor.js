export default class CaseConvertor {
  static fromKebabToNormal = (value) => {
    return value
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  static fromNormalToKebabCase = (value) => {
    return value
      .split(" ")
      .map((word) => word.toLowerCase())
      .join("-");
  };
}

import _ from "lodash";

export const XoaDauVaSpace = stringToReplace => {
  if (stringToReplace === null) stringToReplace = "";
  stringToReplace = _.replace(
    stringToReplace,
    /à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,
    "a"
  );
  stringToReplace = _.replace(stringToReplace, /è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  stringToReplace = _.replace(stringToReplace, /ì|í|ị|ỉ|ĩ/g, "i");
  stringToReplace = _.replace(
    stringToReplace,
    /ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,
    "o"
  );
  stringToReplace = _.replace(stringToReplace, /ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  stringToReplace = _.replace(stringToReplace, /ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  stringToReplace = _.replace(stringToReplace, /đ/g, "d");
  stringToReplace = _.replace(
    stringToReplace,
    /À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g,
    "A"
  );
  stringToReplace = _.replace(stringToReplace, /È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  stringToReplace = _.replace(stringToReplace, /Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  stringToReplace = _.replace(
    stringToReplace,
    /Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g,
    "O"
  );
  stringToReplace = _.replace(stringToReplace, /Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  stringToReplace = _.replace(stringToReplace, /Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  stringToReplace = _.replace(stringToReplace, /Đ/g, "D");
  stringToReplace = _.replace(stringToReplace, /\s+/g, "").toLowerCase();
  return stringToReplace;
};

export const checkEmpty = str => {
  if (!_.replace(str, /\s/g, "").length) return "?";
  else return str;
};

export const capitalizeLetter = (str = "") => {
  if (!_.replace(str, /\s/g, "").length) return "chưa rõ";

  let splitStr = _.toLower(str).split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
};

export const calculateAmountOfPages = length => {
  if (length % 10 !== 0) {
    return Math.floor(length / 10) + 1;
  } else if (length === 0) {
    return 1;
  } else {
    return length / 10;
  }
};

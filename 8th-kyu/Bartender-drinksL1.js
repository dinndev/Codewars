function getDrinkByProfession(param) {
  const words = param.toUpperCase();
  switch (words) {
    case "JABRONI":
      return "Patron Tequila";
    case "SCHOOL COUNSELOR":
      return "Anything with Alcohol";
    case "PROGRAMMER":
      return "Hipster Craft Beer";
    case "BIKE GANG MEMBER":
      return "Moonshine";
    case "POLITICIAN":
      return "Your tax dollars";
    case "RAPPER":
      return "Cristal";
    default:
      return "Beer";
  }
}

//Best Practice

function getDrinkByProfession(param) {
  var obj = {
    jabroni: "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    programmer: "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    politician: "Your tax dollars",
    rapper: "Cristal",
  };
  return obj[param.toLowerCase()] || "Beer";
}

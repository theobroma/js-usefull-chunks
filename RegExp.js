//-----------------------------------------------------
+============+=============+===============+
| Card Type  | Begins With | Number Length |
+============+=============+===============+
| AMEX       | 34 or 37    | 15            |
+------------+-------------+---------------+
| Discover   | 6011        | 16            |
+------------+-------------+---------------+
| Mastercard | 51-55       | 16            |
+------------+-------------+---------------+
| VISA       | 4           | 13 or 16      |
+------------+-------------+---------------+


function getIssuer(n) {
  var s = n.toString();
  if (/^3[4|7]\d{13}$/.test(s)) return "AMEX";
  if (/^6011\d{12}$/.test(s)) return "Discover";
  if (/^5[1-5]\d{14}$/.test(s)) return "Mastercard";
  if (/^4(\d{12}|\d{15})$/.test(s)) return "VISA";
  return "Unknown";
}
//-----------------------------------------------------
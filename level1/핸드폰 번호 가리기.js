const new_Number = phone_Number.substring(
  phone_Number.length - 4,
  phone_Number.length
);
const result = "*".repeat(phone_Number.length - 4) + new_Number;

export const BookingType = {
  Available: 'Available',
  SelfBooked: 'SelfBooked',
  OtherBooked: 'OtherBooked',
};

// DEBUG: NO NO NO, BAD BAD BAD
// Just for MVP demo, we _really_ need to sort this
/*
const uidToUsername = {
  JDq59mu1QwfrLuqUGwcgkSFHt5u1: 'Kieran Doyle',
  '9EfX6sSkksZ2bpDYPD4Z42mA54F2': 'Jules Woodwark',
  Vo5smZoLO8Tlgdo4CorASvoTBGz1: 'Sarah Graham',
  '7YCAooLe5fM2SasF02vS4WhDpNk2': 'Mariusz Majak',
  W6oYfurDcYP302SXbmodoiubyTj1: 'Alyna Karim',
  Q7RVlpxLQdOKBoeh8jx9IhJM1w52: 'Edvardas Vabuolas',
};
*/

export function getHardcodedUsername(uid) {
  let username = uidToUsername[uid];
  if (username === undefined) {
    username = 'Mysterious User';
  }

  return username;
}

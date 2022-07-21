export const BookingType = {
  Available: 'Available',
  SelfBooked: 'SelfBooked',
  OtherBooked: 'OtherBooked',
};

// DEBUG: NO NO NO, BAD BAD BAD
// Just for MVP demo, we _really_ need to sort this
const uidToUsername = {
  'JDq59mu1QwfrLuqUGwcgkSFHt5u1': 'Kieran Doyle',
  '9EfX6sSkksZ2bpDYPD4Z42mA54F2': 'Jules Woodwark',
  'Vo5smZoLO8Tlgdo4CorASvoTBGz1': 'Sarah Graham',
};

export function getUsername(uid) {
  let username = uidToUsername[uid];
  if (username === undefined) { username = 'Mysterious User'; }

  return username;
}
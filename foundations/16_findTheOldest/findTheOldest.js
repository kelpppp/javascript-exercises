const findTheOldest = function(people) {

    const sorted = people.sort((a, b) => {
        const currentYear = new Date().getFullYear();
        const ageA = (a.yearOfDeath || currentYear) - a.yearOfBirth;
        const ageB = (b.yearOfDeath || currentYear) - b.yearOfBirth;
        return ageA > ageB ? -1 : 1;
    })

    return sorted[0];

};

// Do not edit below this line
module.exports = findTheOldest;

// an interesting way to use reduce!

// const getAge = function (birth, death) {
//   if (!death) {
//     death = new Date().getFullYear();
//   }
//   return death - birth;
// };

// const findTheOldest = function (people) {
//   return people.reduce((oldest, currentPerson) => {
//     const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//     const currentAge = getAge(
//       currentPerson.yearOfBirth,
//       currentPerson.yearOfDeath
//     );
//     return oldestAge < currentAge ? currentPerson : oldest;
//   });
// };
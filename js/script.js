//--1--
const usersBalance = [
  { name: "Bill", id: 12223, balance: 100 },
  { name: "Steev", id: 20111, balance: 452 },
  { name: "Oleeve", id: 10223, balance: 71 },
  { name: "Bob", id: 93221, balance: 89 },
];
const res = usersBalance.reduce((value, sum) => value + sum.balance, 0);
console.log(res);

//--2--
const nameOfFriend = [
  { name: "Bill", friend: ["Hanna", "Bill", "Inna"] },
  { name: "Nick", friend: ["Fred", "Liza", "Alex"] },
  { name: "Tom", friend: ["Maksim", "Jordg", "Den"] },
  { name: "Fred", friend: ["Hanna", "Bill", "Hanna"] },
];
const findSameFriend = nameOfFriend.reduce((name, friend) => {
  if (friend.friend.includes("Hanna")) {
    name.push(friend.name);
  }
  return name;
}, []);
console.log(findSameFriend);

// --3--
const ammountOfFriends = [
  { name: "Bill", friend: 2 },
  { name: "Harry", friend: 10 },
  { name: "John", friend: 3 },
  { name: "Nick", friend: 1 },
];
const sorting = (a, b) => b.friend - a.friend;
console.log(ammountOfFriends.sort(sorting).map((nameUser) => nameUser.name));

// --4--
const skills = [
  { name: "Tom", skills: ["js", "typeskript", "nodejs"] },
  { name: "Bill", skills: ["java", "c#", "c++"] },
  { name: "Tom", skills: ["js", "html", "c++", "css"] },
];
const showSkills = skills
  .reduce((skill, array) => {
    skill.push(...array.skills);
    return skill;
  }, [])
  .filter((value, index, self) => self.indexOf(value) === index)
  .sort();
console.log(showSkills);

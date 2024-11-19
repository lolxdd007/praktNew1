const arr = [1, 2, 3];
const newArr = arr.map(item => item * 10 * 3);
console.log(newArr); 


const year = [2006,2005,2004];
const age = year.map(year => new Date().getFullYear() - year);
console.log(age);
const children = [
   {name: 'ally', age:20, isAdmin: true },
   {name: 'Kirill', age:17, isAdmin: false },
   {name: 'Mik', age:33, isAdmin: true },
   {name: 'Olya', age:19, isAdmin: true },
   {name: 'Dima', age:29, isAdmin: false }
];
const fullage = children.filter(children => children.age >=18);
const admin = fullage.find(children => children.isAdmin);
if (admin) {
    console.log(`Администратор сайта: ${admin.name}`);
  } else {
    console.log("Администратор не найден.");
  }
  
  console.log(fullage);
  const students = [
    { name: 'Nik', scores: [2, 5, 5] },
    { name: 'Masha', scores: [4, 5, 3] },
    { name: 'Mik', scores: [2, 5, 4] }
  ];
  
  const averageScores = students.map(student => {
    const totalScore = student.scores.reduce((sum, score) => sum + score, 0);
    return totalScore / student.scores.length;
  });
  
  console.log(averageScores);
  const strArray = ['JavaScript', 'Python', 'Java', 'C'];

function mapForEach(arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i]));
  }
  return newArray;
}

const lenArray = mapForEach(strArray, function(item) {
  return item.length <= 3 ? 0 : 1; 
});

console.log(lenArray);
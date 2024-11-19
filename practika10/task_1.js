let user = {
  name: "Элл",
  age: 25
};
user.sayHi = function() {
  alert("Привет!");
};
user.sayHi(); // Привет!
let zxc = {
  name: "Сорокин Никита",
  address: "ул. Уличная, дом Домашний",
  phone: "+7 (999) 999-99-99",
  email: "randompochta@gmail.com",
  orderHistory: [] 
 };
 
 console.log(zxc.name); 
 console.log(zxc.address); 
 console.log(zxc.phone); 
 let children = {
  name: "Никита",
  isAdmin: false
 };
 let fff = {
userID: 1,
ZAKAZ: 2,
items: ["pistolet","eda"],
status: "Ожидание"
 }
 let restaurant = {
  id:2,
  name: "Yuriy",
  address:"Капачи"
 };
 if (fff.status === "Ожидание") {
  console.log(`Заказ ${fff.userId} от пользователя ${children.name} в ресторане ${restaurant.name} ожидание.`);
}
function GroupMember(name) {
  this.name = name;
 }
 
 const member1 = new GroupMember("Иван");
 const member2 = new GroupMember("Челнок");
 const member3 = new GroupMember("яйцоголовый");
 
 console.log(`Члены группы: ${member1.name}, ${member2.name}, ${member3.name}`);
 function Student(name, group, courses) {
  this.name = name;
  this.group = group;
  this.courses = courses;
 
  this.sayHi = function() {
   console.log(`Меня зовут ${this.name}, я учусь в группе ${this.group}.`);
  };
 
  this.showCourses = function() {
   console.log(`Я учусь на следующих курсах: ${this.courses.join(', ')}`);
  };
 }
 
 const vasya = new Student("Николай", "ИСП-309", ["Программирование"]);
 
 vasya.sayHi(); 
 vasya.showCourses();
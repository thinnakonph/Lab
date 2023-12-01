const person = ['John', 'Jay', 'Jim', 'Jame'];
// ลบ 'Jay'
const indexToRemove = person.indexOf('Jay');
if (indexToRemove !== -1) {
    person.splice(indexToRemove, 1);
}
// เข้าไปแทน 'Jack' และ 'Joe'
person.splice(1, 2, 'Jack', 'Joe');

console.log(person);

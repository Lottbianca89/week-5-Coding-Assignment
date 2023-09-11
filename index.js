// Week-5-Coding-Assignment


class Student {
constructor(name) {
  this.name = name;
  this.students = [];
}

addStudent(student) {
  if (student instanceof students) {
    this.student.push(Student);
  } else {
    throw new Error(`You can only add an instanceof Student. Argument is not a student $(student)`);
  }
}

describe() {
  return `${this.name} has ${this.student.length} student.`;
}
}

class Menu {
  constructor() {
    this.class = [];
    this.selected = null;
  }

start() {
  let selection = this.showMainMenuOptions();
  while (selection != 0) {
    switch (selection) {
      case '1':
        this.createclassByAge();
        break;
      case '2':
        this.viewClass();
        break;
      case '3':
       this.deleteClass();
       break;
      case '4':
      this.displayClasses();
      break;
  
      default:
      selection = 0;
    }
  selection = this.showMainMenuOptions();
  }


  alert('GoodBye!');
}

showMainMenuOptions() {
  let selection = prompt(`
  0)exit
  1)select new class
  2)view class
  3)delete class
  4)display all classes
  `);
  return selection;
}

shpwClassMenuOptions(classInfo) {
  return prompt(`
  0) back
  1)create student
  2)delete student
  -------------------------------
  $(classInfo)
  `);
}

displayClass() {
  let classstring = '';
  for (let i = 0; i < this.class.length; i++) {
    classstring += i + ') ' + this.class[i].name + '\n';
  }
alert (classstring);
}

createClass() {
  let name = prompt('Enter name for new class');
  this.class.push(new Class(name));
}

viewClass() {
  let index = prompt('Enter the index of the class you wish to view:');
  if (index > -1 && index < this.class.length) {
    this. selectedClass = this.class[index];
    let description = 'Class name:  ' + this.selectedclass + '\n';

  for (let i = 0; i < this.selectedClass.student.length; i++) {
    description += i + ') ' + this.selectedClass.student.length[i].name 
    + ' - ' + this.selectedclass.student[i].age + '\n';
  }


let selection = this.showClassMenuOption(description);
switch (selection) {
  case '1':
    this.createStudent();
    break;
    case '2':
    this.deleteStudent();

}
}
}
}

let menu = new Menu();
menu.start();

  
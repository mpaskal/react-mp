// create 2 classes
class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}

class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
  }

  /* create a method to check if the student is registred on the bootcamp or not; if they were registered, provide a message about it, if they were not registered, add them to the students array and output a message*/
  registerStudent(student) {
    const studentReg = this.students.filter((st) => st.email === student.email);
    if (studentReg.length) {
      console.log(
        `Student  ${student.email} already registered to the bootcamp ${this.name}.`
      );
    } else {
      this.students.push(student);
      console.log(
        `Student ${student.email} registred to the bootcamp ${this.name}.`
      );
    }
    return this.students;
  }
}

// test
const st1 = new Student("Mark", "mark@gmail.com", "React");
const st2 = new Student("Christina", "christina@gmail.com", "Java");
const st3 = new Student("Dana", "dana@gmail.com", "JS");

const bootcamp1 = new Bootcamp("React", "1");
const bootcamp2 = new Bootcamp("React2", "2");

bootcamp1.registerStudent(st1);
bootcamp1.registerStudent(st2);
bootcamp1.registerStudent(st3);
bootcamp1.registerStudent(st1);

bootcamp2.registerStudent(st1);

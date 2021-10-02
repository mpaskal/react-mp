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

  registerStudent(student) {
    const studentReg = this.students.filter((st) => st.email === student.email);
    if (studentReg.length > 0) {
      console.log(
        `Student  ${student.email} already registered to the bootcamp "Web Dev Fundamentals".`
      );
    } else {
      this.students.push(student);
      console.log(
        `Student ${student.email} registred to the bootcamp "Web Dev Fundamentals".`
      );
    }
    return this.students;
  }
}

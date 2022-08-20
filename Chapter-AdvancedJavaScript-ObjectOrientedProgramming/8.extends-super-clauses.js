// extends
// class Workshop {
//   constructor(teacher) {
//     this.teacher = teacher;
//   }
//   ask(question) {
//     console.log(this.teacher, question);
//   }
// }

// class AnotherWorkshop extends Workshop {
//   speakUp(msg) {
//     this.ask(msg);
//   }
// }
// console.log(AnotherWorkshop);

// let python = new AnotherWorkshop("Julian");
// python.speakUp("teaches Python???");
// python.ask("goes to work with a bike!!");

// super
// class Workshop {
//   constructor(teacher) {
//     this.teacher = teacher;
//   }
//   ask(question) {
//     console.log(this.teacher, question);
//   }
// }

// class AnotherWorkshop extends Workshop {
//   ask(msg) {
//     super.ask(msg.toUpperCase());
//   }
// }

// let react = new AnotherWorkshop("Trevor");
// react.ask("teaches react???");

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  #courseList = [];

  getInfo() {
    return { name: this.name, email: this.email };
  }

  enrollCourse(name) {
    this.#courseList.push(name);
  }

  getCourseList() {
    return this.#courseList;
  }

  // static simply mean: hey this is private property, cant be extended to any other classes
  login() {
    return "You are logged in";
  }
}

class SubAdmin extends User {
  constructor(name, email) {
    super(name, email);
  }
  getAdminInfo() {
    return "I am subAdmin";
  }

  login() {
    return "login for admin only!";
  }
}

// module.exports = User;

const rock = new User("Rock", "rock@rock.de");
// console.log(rock.getInfo());
// rock.enrollCourse("Angular Bootcamp!");
// rock.enrollCourse("JavaScript Bootcamp!");
// rock.enrollCourse("react Bootcamp!");

// rock.getCourseList().forEach((bootcamp) => {
//   console.log(bootcamp);
// });

const tom = new SubAdmin("Tom", "tom@tom.de");
console.log(tom.getAdminInfo());
console.log(tom.login());

console.log(tom.getInfo());

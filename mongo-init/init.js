conn = new Mongo();
db = conn.getDB("pet_machine");

db.createUser({
  user: "jugo",
  pwd: "pass",
  roles: [
    {
      role: "readWrite",
      db: "mongodb",
    },
  ],
});

db.createCollection("users");

student1 = {
  controlNumber: "17260001",
  name: "Student1",
  email: "student1@mail.com",
  balance: 0,
  rfid: 1234567890,
  createdAt: new Date(),
  updatedAt: new Date(),
};
student2 = {
  controlNumber: "17260002",
  name: "Student2",
  email: "student2@mail.com",
  balance: 0,
  rfid: 2345678901,
  createdAt: new Date(),
  updatedAt: new Date(),
};
student3 = {
  controlNumber: "17260003",
  name: "Student3",
  email: "student3@mail.com",
  balance: 0,
  rfid: 3456789012,
  createdAt: new Date(),
  updatedAt: new Date(),
};

db.students.insert(student1);
db.students.insert(student2);
db.students.insert(student3);

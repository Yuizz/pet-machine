conn = new Mongo();
db = conn.getDB("pet_machine");

db.createUser(
        {
            user: "jugo",
            pwd: "pass",
            roles: [
                {
                    role: "readWrite",
                    db: "mongodb"
                }
            ]
        }
);

db.createCollection('students'); 

student1 = {
  controlNumber: '17260001',
  name: 'Student1',
  lastName: 'test',
  balance: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
};
student2 = {
  controlNumber: '17260002',
  name: 'Student2',
  lastName: 'test',
  balance: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
};
student3 = {
  controlNumber: '17260003',
  name: 'Student3',
  lastName: 'test',
  balance: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
};

db.students.insert(student1);
db.students.insert(student2);
db.students.insert(student3);


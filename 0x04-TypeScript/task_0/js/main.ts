interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 21,
  location: "New York",
};
const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

const studentsList: Student[] = [student1, student2];

// Create table
const table = document.createElement("table");
const headerRow = document.createElement("tr");

const headers = ["First Name", "Location"];
headers.forEach((text) => {
  const th = document.createElement("th");
  th.textContent = text;
  headerRow.appendChild(th);
});
table.appendChild(headerRow);

//Add student rows
studentsList.forEach((student: Student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  nameCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
});

document.body.appendChild(table);

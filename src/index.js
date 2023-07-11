const root = document.getElementById("main");

root.innerHTML = "<strong> Check the console logs.</strong>";

function pocObjectSpreadOperator() {
  const orgObj = {
      name: "Robbie",
      age: 42,
      location: "UK"
    },
    dupObj = {
      id: "asdfkd23904",
      ...orgObj,
      location: "US"
    };

  console.log(orgObj, dupObj);
}

function pocArraySpreadOperator() {
  const orgArr = [1, 2, 3, 4, 5],
    dupArr = [0, ...orgArr, 100, 101, 102];

  console.log(orgArr, dupArr);
}

function pocSpreadAssignments() {
  const values = [1, 39, 28, 59, 73],
    [first, route, age, speed, retirement] = values;

  console.log(first, age, retirement, route, speed);

  function arrParam([first, _, age, ...rest]) {
    console.log("arrParam", first, age, rest);
  }

  arrParam(values);

  const employee = { name: "Empli", age: 28, department: "IT" },
    { name: empName, department: empDepartment } = employee;

  console.log(`Employee name is ${empName} and he works in ${empDepartment}`);
}

function fnObjParameters({ name: userName, age: userAge = 18 }) {
  console.log(userName, userAge);
}

function pocObjectAsParameters() {
  fnObjParameters({ name: "Micor", age: 30 });
  fnObjParameters({ name: "Newman" });
}

function numbersInRange(start = 0, end = 10, step = 1) {
  if (step === 0) step = 1;
  return [...Array(end - start / step + 1).keys()].map(
    (n, i) => n + start + step * i
  );
}

function numbersInRangeStep() {
  console.log(numbersInRange(10, 20));
  console.log(numbersInRange(100, 120, 2));
}

// pocObjectSpreadOperator();
// pocArraySpreadOperator();
// pocSpreadAssignments();
// pocObjectAsParameters();
numbersInRangeStep();

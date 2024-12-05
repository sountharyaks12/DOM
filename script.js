class Employee {

    person1 = {
        Name: "Sakthi",
        Employee_id: "0001",
        Address: {
            City: "Chennai",
            State: "TamilNadu",
            pinCode: "672 001"
        },
        Hobbies: ["Riding", "Playing", "Travelling"]
    };
    person2 = {
        Name: "Hari",
        Employee_id: "0002",
        Address: {
            City: "Tuticorin",
            State: "TamilNadu",
            pinCode: "628 002"
        },
        Hobbies: ["Cricket", "Vollyball"]
    };
    person3 = {
        Name: "Ragav",
        Employee_id: "0003",
        Address: {
            City: "Erode",
            State: "TamilNadu",
            pinCode: "600 603"
        },
        Hobbies: ["Cricket", "Throwball","DIY"]
    };
    person4 = {
        Name: "Rahul",
        Employee_id: "0004",
        Address: {
            City: "Krishnagiri",
            State: "TamilNadu",
            pinCode: "641 604"
        },
        Hobbies: ["Cricket", "Vollyball","Tennis"]
    };
    person5 = {
        Name: "Rishi",
        Employee_id: "0005",
        Address: {
            City: "Madurai",
            State: "TamilNadu",
            pinCode: "600 605"
        },
        Hobbies: ["Music", "Reading", "Cooking"]
    };

}
const employee = new Employee();
console.log(employee);

let body = document.querySelector("#body");
body.style.backgroundColor = "whitesmoke";

let red = document.createElement("div");
red.className = 'redBox';
body.appendChild(red);

Object.keys(employee).map((emp) => {
    let blue = document.createElement("div");
    blue.className = 'blueBox';

    red.appendChild(blue);
    let h2 = document.createElement("h1");
    red.appendChild(h2)
    h2.innerHTML = `Name: ${employee[emp].Name}`;
    blue.appendChild(h2);

    let Employee_id = document.createElement("h2");
    blue.appendChild(Employee_id);
    Employee_id.innerHTML = `Employee Id: ${employee[emp].Employee_id}`;

    let green = document.createElement("div");
    green.style.border = "1px solid green";
    green.style.padding = "10px";
    blue.appendChild(green);

    let address = document.createElement("h2");
    address.innerHTML = "Address:";
    green.appendChild(address);

    Object.keys(employee[emp].Address).map(addr => {
        let h3 = document.createElement("h3");
        h3.innerHTML = `${addr}: ${employee[emp].Address[addr]}`;
        green.appendChild(h3);
    });

    let p = document.createElement("h4");
    p.innerHTML = `Hobbies:${employee[emp].Hobbies}`;
    blue.appendChild(p);

})
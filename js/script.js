function display_menu() {
    "use strict";
    window.console.log("Welcome to the Employee Management Application");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("show - Show all employees");
    window.console.log("add - Add an employee");
    window.console.log("del - Delete an employee");
    window.console.log("exit - Exit the program");
    window.console.log("");
}
function display(employee_list) {
    "use strict";
    var i = 1;
    employee_list.forEach(function (employee) {
        window.console.log(String(i) + ". " + employee);
        i += 1;
    });
    window.console.log("");
}
function add(employee_list) {
    "use strict";
    var employee = window.prompt("Enter the employee's name");
    employee_list.push(employee);
    window.console.log(employee + " was added.");
    window.console.log("");
}
function del(employee_list) {
    "use strict";
    var num, employee;
    num = parseInt(window.prompt("Employee number to delete"), 10);
    if (num < 1 || num > employee_list.length) {
        window.alert("Invalid employee number.");
    } else {
        employee = employee_list.splice(num - 1, 1);
        window.console.log(employee + ' was deleted.');
        /* OR
        delete employee_list[num - 1];
        window.console.log("Employee number " + num + " was deleted.");
        */
    }
}
function main() {
    "use strict";
    var employee_list, command;
    
    display_menu();
    
    employee_list = ["Zak Ruvalcaba",
                    "Sally Smith",
                    "Fred Franklin",
                    "John Smith",
                    "Jane Caruthers"];
    
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "show") {
                display(employee_list);
            } else if (command === "add") {
                add(employee_list);
            } else if (command === "del") {
                del(employee_list);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}
main();
var database = [];
var id
var form = document.querySelectorAll('form');
var tbody = document.querySelector('tbody');
var search = document.querySelector('input[type="search"]');
var input = document.querySelectorAll('input');
var checkbox = document.querySelector('input[type="checkbox"]');

form[0].addEventListener("submit", (e) => {
    e.preventDefault();

    if (database.length == 0) {
        id = 0;
    }

    if (input[1].value == '' || input[2].value == '' || input[3].value == '' || input[4].value == '' || input[5].value == '' || input[6].value == '') {
        alert("some feild is empty");
        return;
    }
    if (checkbox.checked) {
        var data = {
            id: `${++id}`,
            fname: `${input[1].value}`,
            lname: `${input[2].value}`,
            fullname: `${input[1].value} ${input[2].value}`,
            age: `${ input[3].value }`,
            mobile: `${input[4].value}`,
            email: `${input[5].value}`,
            password: `${input[6].value}`,
            // gender: `${input[7].value}`
        };
        database.push(data);
        console.log(data);
        submit();
        form[0].reset();

    } else {
        alert("Check the Box")
    }
})

const cut = (index) => {
    database.splice(index, 1);
    submit();
}

const submit = () => {
    tbody.innerHTML = "";
    database.map((point, index) => {
        tbody.innerHTML += `
        <tr><td>${point.id} </td>
            <td>${point.fname}</td>
            <td>${point.lname}</td>
            <td>${point.age} </td>
            <td> ${point.mobile}</td>
            <td>${point.email}</td>
            <td>${0}</td>
            <th><button onclick=cut(${index})>X</button </th>
        </tr>
        `
    })
}

search.addEventListener('input', (e) => {
    if (e.target.value != '') {
        var temp = database.filter(itm => itm.fullname.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
        tbody.innerHTML = "";
        temp.map((itm, index) => {
            tbody.innerHTML += `
            <tr>
                <td>${itm.id}</td>
                <td>${itm.fname}</td>
                <td>${itm.lname}</td>
                <td>${itm.age}</td>
                <td>${itm.mobile}</td>
                <td>${itm.email}</td>
                <td>${itm.gender}</td>
                <th><button onclick=cut(${index})>X</button </th>

            </tr>
            `
        })
        return;
    }
    submit();
})

form[1].addEventListener("submit", (e) => {

    var flag = false;
    var temail = document.querySelector('input[id="2email"]').value;
    var tpassword = document.querySelector('input[id="2password"]').value;
    if (temail == "" || tpassword == "") {
        alert("Enter Details")
        return;
    } else {
        console.log(temail, tpassword);
        for (x of database) {
            if (x.email == temail && x.password == tpassword) {
                flag = true;
            }

        }
        if (flag == false) {
            alert("Unsucessfull");
        } else {
            alert("sucessfull");
        }
        submit();
    }
    e.preventDefault();
})


var k = document.querySelectorAll("ul.results-base li a");
var count = 1;
for (y of k) {

    var u = (y.href).split("/");

    for (x of u) {
        if (x.length == 8 && x != "roadster") {

            console.log(x + " " + count++);
        }
    }
}
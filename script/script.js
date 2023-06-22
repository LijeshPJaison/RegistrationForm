function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}


function validateForm() {
    var imgupload = document.getElementById("imgupload").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;
    var gender = document.getElementById("gender").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var zipcode = document.getElementById("zipcode").value;

    if (imgupload == "") {
        alert("image is required");
        return false;
    }
    if (fname == "") {
        alert("firstname is required");
        return false;
    }
    if (lname == "") {
        alert("lastname is required");
        return false;
    }
    if (username == "") {
        alert("username is required");
        return false;
    }
    if (email == "") {
        alert("email is required");
        return false;
    } else if (!email.includes("@")) {
        alert("invalid email id");
        return false;
    }
    if (password == "") {
        alert("password is required");
        return false;
    }
    if (cpassword != password) {
        alert("incorrect password");
        return false;
    }
    if (gender == "") {
        alert("genter is required");
        return false;
    }
    if (dob == "") {
        alert("DoB is required");
        return false;
    }
    if (country == "") {
        alert("country is required");
        return false;
    }
    if (zipcode == "") {
        alert("zipcode is required");
        return false;
    }
    return true;

}

function showData() {
    var userList;
    if (localStorage.getItem("userList") == null) {
        userList = [];
    } else {
        userList = JSON.parse(localStorage.getItem("userList"));
    }
    var html = "";
    userList.forEach(function(element, index) {
        html += "<tr>";
        html += "<td>" + element.imgupload + "</td>";
        html += "<td>" + element.fname + "</td>";
        html += "<td>" + element.lname + "</td>";
        html += "<td>" + element.username + "</td>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.password + "</td>";
        html += "<td>" + element.cpassword + "</td>";
        html += "<td>" + element.gender + "</td>";
        html += "<td>" + element.dob + "</td>";
        html += "<td>" + element.country + "</td>";
        html += "<td>" + element.zipcode + "</td>";
        html +=
            '<td><button onclick="deleteData(' +
            index +
            ')"class="btn btn-danger">Delete</button><button onclick="updateData(' +
            index + ')"class="btn btn-warning">Edit</button></td>';
        html += "</tr>";
    });
    document.querySelector("#crudTable tbody").innerHTML = html;
}
document.onload = showData();


function AddData() {
    if (validateForm() == true) {
        var imgupload = document.getElementById("imgupload").value;
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var cpassword = document.getElementById("cpassword").value;
        var gender = document.getElementById("gender").value;
        var dob = document.getElementById("dob").value;
        var country = document.getElementById("country").value;
        var zipcode = document.getElementById("zipcode").value;

        var userList;
        if (localStorage.getItem("userList") == null) {
            userList = [];
        } else {
            userList = JSON.parse(localStorage.getItem("userList"));
        }
        userList.push({

            imgupload: imgupload,
            fname: fname,
            lname: lname,
            username: username,
            email: email,
            password: password,
            cpassword: cpassword,
            gender: gender,
            dob: dob,
            country: country,
            zipcode: zipcode,
        });
        localStorage.setItem("userList", JSON.stringify(userList));
        showData();
        document.getElementById("imgupload").value = "";
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("cpassword").value = "";
        document.getElementById("gender").value = "";
        document.getElementById("dob").value = "";
        document.getElementById("country").value = "";
        document.getElementById("zipcode").value = "";

    }
}

function deleteData(index) {
    var userList;
    if (localStorage.getItem("userList") == null) {
        userList = [];
    } else {
        userList = JSON.parse(localStorage.getItem("userList"));
    }
    userList.splice(index, 1);
    localStorage.setItem("userList", JSON.stringify(userList));
    showData();
}

function updateData(index) {
    document.getElementById("Edit").style.display = "block";
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "block";

    var userList;
    if (localStorage.getItem("userList") == null) {
        userList = [];
    } else {
        userList = JSON.parse(localStorage.getItem("userList"));
    }
    document.getElementById("fname").value = userList[index].fname;
    document.getElementById("lname").value = userList[index].lname;
    document.getElementById("username").value = userList[index].username;
    document.getElementById("email").value = userList[index].email;
    document.getElementById("password").value = userList[index].password;
    document.getElementById("cpassword").value = userList[index].cpassword;
    document.getElementById("gender").value = userList[index].gender;
    document.getElementById("dob").value = userList[index].dob;
    document.getElementById("country").value = userList[index].country;
    document.getElementById("zipcode").value = userList[index].zipcode;

    document.querySelector("#Update").onclick = function() {
        if (validateForm() == true) {
            userList[index].fname = document.getElementById("fname").value;
            userList[index].lname = document.getElementById("lname").value;
            userList[index].username = document.getElementById("username").value;
            userList[index].email = document.getElementById("email").value;
            userList[index].password = document.getElementById("password").value;
            userList[index].cpassword = document.getElementById("cpassword").value;
            userList[index].gender = document.getElementById("gender").value;
            userList[index].dob = document.getElementById("dob").value;
            userList[index].country = document.getElementById("country").value;
            userList[index].zipcode = document.getElementById("zipcode").value;

            localStorage.setItem("userList", JSON.stringify(userList));
            showData();
            document.getElementById("fname").value = "";
            document.getElementById("lname").value = "";
            document.getElementById("username").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("cpassword").value = "";
            document.getElementById("gender").value = "";
            document.getElementById("dob").value = "";
            document.getElementById("country").value = "";
            document.getElementById("zipcode").value = "";

            document.getElementById("Submit").style.display = "none";
            document.getElementById("Update").style.display = "none";
        }
    }
}
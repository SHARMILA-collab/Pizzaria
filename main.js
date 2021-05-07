nameofstudentarray= [];

function Submit() {
    var name1= document.getElementById("nameofstudent1").value;
    var name2= document.getElementById("nameofstudent2").value;
    var name3= document.getElementById("nameofstudent3").value;
    var name4= document.getElementById("nameofstudent4").value;

    nameofstudentarray.push(name1);
    nameofstudentarray.push(name2);
    nameofstudentarray.push(name3);
    nameofstudentarray.push(name4);

    console.log (nameofstudentarray);
    document.getElementById ("display_name").innerHTML= nameofstudentarray;
    document.getElementById ("submitbutton").style.display= "none";
    document.getElementById ("sortbutton").style.display= "inline-block";

    
}

function sorting() {
    nameofstudentarray.sort();
    console.log (nameofstudentarray);
    document.getElementById ("display_name").innerHTML= nameofstudentarray;
}






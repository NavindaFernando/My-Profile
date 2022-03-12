// start events
$("#btnSave").click(function () {

    saveCustomer();
    clearText();
    loadAllCustomer();
    deleteCustomer();
    rowSelector();

});

// clear text field
function clearText(){
    $('#txtCusId,#txtCusName,#txtCusAddress,#txtCusSalary').val("");
    $('#txtCusId,#txtCusName,#txtCusAddress,#txtCusSalary').css('border', '1px solid #ced4da');
}

/*search customer*/
$("#btnSearch").click(function () {
    var searchId = $("#txtSeachCusId").val();
    var response = searchCustomer(searchId);
    if (response){
        $("#txtCusId").val(response.id);
        $("#txtCusName").val(response.name);
        $("#txtCusAddress").val(response.address);
        $("#txtCusSalary").val(response.salary);
    }else {
        clearText();
        alert("No Such A Customer");
    }
});

// end events

// crud start
function saveCustomer(){

    // gather customer information (values)
    let customerId = $("#txtCusId").val();
    let customerName = $("#txtCusName").val();
    let customerAddress = $("#txtCusAddress").val();
    let customerSalary = $("#txtCusSalary").val();

    // put values in an object
    var customerObject={
        id:customerId,
        name:customerName,
        address:customerAddress,
        salary:customerSalary
    };

    // push to db
    customerDB.push(customerObject);

    let cusId = $("#txtCusId").val();

    cmbCustomers("<option>"+cusId+"</option>");
}

function loadAllCustomer(){
    $("#customerTable").empty();
    for (var i in customerDB){
        // create a html row
        let row = `<tr><td>${customerDB[i].id}</td><td>${customerDB[i].name}</td><td>${customerDB[i].address}</td><td>${customerDB[i].salary}</td></tr>`;
        // select the table body and append the row
        $("#customerTable").append(row);
    }
}

function searchCustomer(id){
    for (let i = 0; customerDB.length; i++){
        if (customerDB[i].id == id){
            return customerDB[i];
        }
    }
}

function rowSelector() {
    // bind the event after the row was added
    $("#customerTable>tr").click(function () {
        let cId = $(this).children(":eq(0)").text();
        let cName = $(this).children(":eq(1)").text();
        let cAddress = $(this).children(":eq(2)").text();
        let cSalary = $(this).children(":eq(3)").text();

        /*console.log(iCode,iName,iQty,iPrice);*/

        // set values for the input fields
        $("#txtCusId").val(cId);
        $("#txtCusName").val(cName);
        $("#txtCusAddress").val(cAddress);
        $("#txtCusSalary").val(cSalary);

    });
}

// delete customer
function deleteCustomer() {
    $("#customerTable>tr").dblclick(function () {
        alert("Do you really need to delete this customer?");
        $(this).remove();
        clearText();
        customerDB.pop();
    });
}
// crud end

// clear text
$("#btnClear").click(function () {
    $('#txtCusId,#txtCusName,#txtCusAddress,#txtCusSalary').val("");
    $('#txtCusId,#txtCusName,#txtCusAddress,#txtCusSalary').css('border', '1px solid #ced4da');
});

// focus text field
$("#txtCusId").keydown(function (event){
    if (event.key=="Enter"){ //if the enter key press
        $("#txtCusName").focus();
    }
});

$("#txtCusName").keydown(function (event){
    if (event.key=="Enter"){ //if the enter key press
        $("#txtCusAddress").focus();
    }
});

$("#txtCusAddress").keydown(function (event){
    if (event.key=="Enter"){ //if the enter key press
        $("#txtCusSalary").focus();
    }
});

//disable tab button
$("#txtCusId , #txtCusName , #txtCusAddress , #txtCusSalary").on('keydown', function (event) {
    if (event.key=="Tab"){
        event.preventDefault();
    }
});

//start validation
var cusIdRegExp = /^(C00-)[0-9]{3,5}$/;
var cusNameRegExp = /^[A-z .]{3,30}$/;
var cusAddressRegExp = /^[0-9/A-z. ,]{6,}$/;
var cusSalaryRegExp = /^[0-9]{1,}[.]?[0-9]{1,2}$/;

$("#txtCusId").keyup(function () {
    let cusId = $("#txtCusId").val();
    if (cusIdRegExp.test(cusId)){
        $("#txtCusId").css("border","2px solid green");
        $("#lblCusId").text("");
    }else {
        $("#txtCusId").css("border","2px solid red");
        $("#lblCusId").text("Customer ID is a required field : Pattern C00-000");
    }
});

$("#txtCusName").keyup(function () {
    let cusName = $("#txtCusName").val();
    if (cusNameRegExp.test(cusName)){
        $("#txtCusName").css("border","2px solid green");
        $("#lblCusName").text("");
    }else {
        $("#txtCusName").css("border","2px solid red");
        $("#lblCusName").text("Customer Name is a required field : Minimum 3, Max 30, Spaces Allowed");
    }
});

$("#txtCusAddress").keyup(function () {
    let cusAddress = $("#txtCusAddress").val();
    if (cusAddressRegExp.test(cusAddress)){
        $("#txtCusAddress").css("border","2px solid green");
        $("#lblCusAddress").text("");
    }else {
        $("#txtCusAddress").css("border","2px solid red");
        $("#lblCusAddress").text("Customer Address is a required field : Minimum 6");
    }
});

$("#txtCusSalary").keyup(function () {
    let cusMN = $("#txtCusSalary").val();
    if (cusSalaryRegExp.test(cusMN)){
        $("#txtCusSalary").css("border","2px solid green");
        $("#lblCusSalary").text("");
    }else {
        $("#txtCusSalary").css("border","2px solid red");
        $("#lblCusSalary").text("Cus Salary is a required field : Pattern 100.00 or 100");
    }
});
//end validation
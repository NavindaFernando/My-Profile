// start events
$("#btnSaveItem").click(function () {

    saveItem();
    clearItemText();
    loadAllItems();
    deleteItem();
    itemRowSelector();

});

// clear text field
function clearItemText(){
    $('#txtItemCode,#txtItemName,#txtItemQty,#txtItemPrice').val("");
    $('#txtItemCode,#txtItemName,#txtItemQty,#txtItemPrice').css('border', '1px solid #ced4da');
}

/*search items*/
$("#btnSearchItem").click(function () {
    var code = $("#txtSearchItemCode").val();
    var result = searchItems(code);
    if (result){
        $("#txtItemCode").val(result.code);
        $("#txtItemName").val(result.name);
        $("#txtItemQty").val(result.qty);
        $("#txtItemPrice").val(result.price);
    }else {
        clearItemText();
        alert("No Such A Customer");
    }
});

// end events

// crud start
function saveItem(){

    // gather item information (values)
    let itemCode = $("#txtItemCode").val();
    let itemName = $("#txtItemName").val();
    let itemQty = $("#txtItemQty").val();
    let itemPrice = $("#txtItemPrice").val();

    // put values in an object
    var itemObject={
        code:itemCode,
        name:itemName,
        qty:itemQty,
        price:itemPrice
    };

    // push to db
    itemDB.push(itemObject);

    let itemCodes = $("#txtItemCode").val();

    cmbItem("<option>"+itemCodes+"</option>");
}

function loadAllItems(){
    $("#itemTable").empty();
    for (var i in itemDB){
        // create a html row
        let row = `<tr><td>${itemDB[i].code}</td><td>${itemDB[i].name}</td><td>${itemDB[i].qty}</td><td>${itemDB[i].price}</td></tr>`;
        // select the table body and append the row
        $("#itemTable").append(row);
    }
}

function searchItems(code){
    for (let i = 0; itemDB.length; i++){
        if (itemDB[i].code == code){
            return itemDB[i];
        }
    }
}

function itemRowSelector() {
    // bind the event after the row was added
    $("#itemTable>tr").click(function () {
        let iCode = $(this).children(":eq(0)").text();
        let iName = $(this).children(":eq(1)").text();
        let iQty = $(this).children(":eq(2)").text();
        let iPrice = $(this).children(":eq(3)").text();

        /*console.log(iCode,iName,iQty,iPrice);*/

        // set values for the input fields
        $("#txtItemCode").val(iCode);
        $("#txtItemName").val(iName);
        $("#txtItemQty").val(iQty);
        $("#txtItemPrice").val(iPrice);

    });
}

// delete item
function deleteItem() {
    $("#itemTable>tr").dblclick(function () {
        alert("Do you really need to delete this item?");
        let remove = $(this).remove();
        clearItemText();
        itemDB.pop();
    })
}
// crud end

// clear text
$("#btnClearItem").click(function () {
    $('#txtItemCode,#txtItemName,#txtItemQty,#txtItemPrice').val("");
    $('#txtItemCode,#txtItemName,#txtItemQty,#txtItemPrice').css('border', '1px solid #ced4da');
})

// focus text field
$("#txtItemCode").keydown(function (event){
    if (event.key=="Enter"){ //if the enter key press
        $("#txtItemName").focus();
    }
});

$("#txtItemName").keydown(function (event){
    if (event.key=="Enter"){ //if the enter key press
        $("#txtItemQty").focus();
    }
});

$("#txtItemQty").keydown(function (event){
    if (event.key=="Enter"){ //if the enter key press
        $("#txtItemPrice").focus();
    }
});

//disable tab button
$("#txtItemCode , #txtItemName , #txtItemQty , #txtItemPrice").on('keydown', function (event) {
    if (event.key=="Tab"){
        event.preventDefault();
    }
})

//start validation
var itemCodeRegExp = /^(I00-)[0-9]{3,5}$/;
var itemNameRegExp = /^[A-z .]{2,30}$/;
var itemQtyRegExp = /^[0-9/A-z. ]{1,}$/;
var itemPriceRegExp = /^[0-9]{1,}[.]?[0-9]{1,2}$/;

$("#txtItemCode").keyup(function () {
    let itemCode = $("#txtItemCode").val();
    if (itemCodeRegExp.test(itemCode)){
        $("#txtItemCode").css("border","2px solid green");
        $("#lblItemCode").text("");
    }else {
        $("#txtItemCode").css("border","2px solid red");
        $("#lblItemCode").text("Item code is a required field : Pattern I00-000");
    }
});

$("#txtItemName").keyup(function () {
    let itemName = $("#txtItemName").val();
    if (itemNameRegExp.test(itemName)){
        $("#txtItemName").css("border","2px solid green");
        $("#lblItemName").text("");
    }else {
        $("#txtItemName").css("border","2px solid red");
        $("#lblItemName").text("Item Name is a required field : Minimum 2, Max 30, Spaces Allowed");
    }
});

$("#txtItemQty").keyup(function () {
    let itemQty = $("#txtItemQty").val();
    if (itemQtyRegExp.test(itemQty)){
        $("#txtItemQty").css("border","2px solid green");
        $("#lblItemQty").text("");
    }else {
        $("#txtItemQty").css("border","2px solid red");
        $("#lblItemQty").text("Item qty is a required field : Minimum 2");
    }
});

$("#txtItemPrice").keyup(function () {
    let itemPrice = $("#txtItemPrice").val();
    if (itemPriceRegExp.test(itemPrice)){
        $("#txtItemPrice").css("border","2px solid green");
        $("#lblItemPrice").text("");
    }else {
        $("#txtItemPrice").css("border","2px solid red");
        $("#lblItemPrice").text("Item price is a required field : Pattern 100.00 or 100");
    }
});
//end validation


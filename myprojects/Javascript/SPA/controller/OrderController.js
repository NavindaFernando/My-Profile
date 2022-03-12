function cmbCustomers(value) {
    $("#cmbCustomer").append(value);
}

function cmbItem(values) {
    $("#cmbItems").append(values);
}

$('#btnAddToCart').click(function(){
    confirm("Do you want to add to cart");
    /*alert("event trigger")*/
    let itemCode = $('#txtOItemCode').val();
    let description = $('#txtOItemName').val();
    let unitPrice = $('#txtOItemPrice').val();
    let qty = $('#txtOQuantity').val();

    let res = placeOrder(itemCode, description, unitPrice, qty);
    if(res){

      }else {
        alert("error")
    }
});

function placeOrder(itemCode, description, unitPrice, qty) {
    let order = getAllOrder();
    let placeOrderDTO = new PlaceOrderDTO(itemCode, description, unitPrice, qty);
    order.push(placeOrderDTO);
    loadAllOrderDetail();

    return true;
}

function getAllOrder() {
    return orderDB;
}

function loadAllOrderDetail() {
    //get the CustomerDTO array
    let order = getAllOrder();

    $('#orderTable').empty();

    //get the one by one object from the array
    for (let i in order){
        let itemCode = order[i].getItemCode();
        let description = order[i].getOderName();
        let unitPrice = order[i].getUnitPrice();
        let qty = order[i].getQty();

        //set values for the html element
        let row = "<tr><td>" +itemCode + "</td><td>" +description+ "</td><td>" +unitPrice + "</td><td>"+qty+"</td><td>"+ 10 + "</td></tr>";

        //set above row to the table body.
        $('#orderTable').append(row);
    }
}
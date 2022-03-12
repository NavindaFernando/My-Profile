function PlaceOrderDTO(itemCode, itemName, unitPrice, qty) {
    let __itemCode = itemCode;
    let __itemName = itemName;
    let __unitPrice = unitPrice;
    let __qty = qty;

    this.setItemCode = function (itemCode) {
        __itemCode = itemCode;
    }
    this.setOrderName = function (itemName) {
        __itemName = itemName;
    }
    this.setUnitPrice = function (unitPrice) {
        __unitPrice = unitPrice;
    }
    this.setQty = function (qty) {
        __qty = qty;
    }

    this.getItemCode = function () {
        return __itemCode;
    }
    this.getOderName = function () {
        return __itemName;
    }
    this.getUnitPrice = function () {
        return __unitPrice;
    }
    this.getQty = function () {
        return __qty;
    }
}
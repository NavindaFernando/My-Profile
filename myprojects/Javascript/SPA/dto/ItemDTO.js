function ItemDTO(itemCode, itemName, qtyOnHand, price) {
    let __itemCode = itemCode;
    let __itemName = itemName;
    let __qtyOnHand = qtyOnHand;
    let __price = price;

    this.setItemCode = function (itemCode) {
        __itemCode = itemCode;
    }
    this.setItemName = function (itemName) {
        __itemName = itemName;
    }
    this.setQtyOnHand = function (qtyOnHand) {
        __qtyOnHand = qtyOnHand;
    }
    this.setPrice = function (price) {
        __price = price;
    }

    this.getItemCode = function () {
        return __itemCode;
    }
    this.getItemName = function () {
        return __itemName;
    }
    this.getQtyOnHand = function () {
        return __qtyOnHand;
    }
    this.getPrice = function () {
        return __price;
    }
}
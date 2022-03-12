function CustomerDTO(id, name, address, salary) {
    let __id = id;
    let __name = name;
    let __address = address;
    let __salary = salary;

    this.setCustomerId = function (id) {
        __id = id;
    }
    this.setCustomerName = function (name) {
        __name = name;
    }
    this.setCustomerAddress = function (address) {
        __address = address;
    }
    this.setCustomerSalary = function (salary) {
        __salary = salary;
    }

    this.getCustomerId = function () {
        return __id;
    }
    this.getCustomerName = function () {
        return __name;
    }
    this.getCustomerAddress = function () {
        return __address;
    }
    this.getCustomerSalary = function () {
        return __salary;
    }
}
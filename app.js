// Challenge 1 -- Find Prime Number

const buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', handleOnClick1)

function handleOnClick1() {
    const message = findPrimeNumber()
    
    document.getElementById('showNumber').textContent = message;
    
}

function findPrimeNumber() {
    let number = Number(document.getElementById('integer').value);
    let integer = number.toFixed(0);
    console.log(integer);
    if (integer < 0)
    {
        return `Please enter positive number`
    }
    else if (integer % 2 === 0 || integer % 3 === 0)
    {
        return integer + ` is not a prime number, you don't know anything`;
    }
    else
    {
        return integer + ' is a prime number';
    }
    
}


// Challenge 2 -- Shopping Cart
buttonElement.addEventListener('click', handleOnClick2)
let shoppingCart = {} 

function handleOnClick2() {
    // get input of name of item
    let itemName = document.getElementById('itemName').value ?? '';
    // get input of cost of item
    let itemCost = Number(document.getElementById('itemCost').value) ?? 0;
    // get input of number of items
    let numberofItems = Number(document.getElementById('numberOfItems').value) ?? 0;

    const isValidInput = itemName && itemCost > 0 && numberofItems > 0;

    if(isValidInput) {
        shoppingCart = {
            ...shoppingCart,
            [itemName]: {itemCost, numberofItems}
        }
    }

    showTable();
    showCost();
}

function showTable() {
    let tableHtml = `
        <table>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Cost
                    </th>
                    <th>
                        Amount
                    </th>
                </tr>
            </thead>
    `;

    tableHtml += `<tbody>`;

    for (let itemNames in shoppingCart) {
        const cost = shoppingCart[itemNames].itemCost;
        const amount = shoppingCart[itemNames].numberofItems

        tableHtml += `
            <tr>
                <td>${itemNames}</td>
                <td>${cost}</td>
                <td>${amount}</td>
        `;
    }
    tableHtml += `</tbody>`;
    tableHtml += `</table>`;

    document.querySelector('.table-ctn').innerHTML = tableHtml;
}

function showCost() {
    let totatCost = 0;
    for (let itemNames in shoppingCart) {
        const cost = shoppingCart[itemNames].itemCost;
        const amount = shoppingCart[itemNames].numberofItems

        totatCost += cost * amount;
    }
    document.getElementById('showCost').textContent = totatCost;
}

var x = 0;
var y = 0;

var dates = new Array();
var amounts = new Array();



function add(theForm) {
    if (x == 0) localStorage.clear();

    x++;

    dates.push(theForm.date.value);
    amounts.push(theForm.amounts.value);

    localStorage.setItem(theForm.date.value, JSON.stringify({
        category: theForm.category.value,
        amount: theForm.amount.value,
    }));
}

function show() {
    y++;
    let z = localStorage.getItem(y.toString(10));
    document.getElementById('Answer').innerHTML = z;
}

function weekly() {
    var today = new Date();
    today.setMonth(today.getMonth() - 1);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    monthago = yyyy + '-' + mm + '-' + dd;


    var money = 0;
    dates.forEach(function (item, index, array) {
        if (item.localeCompare(monthago)>=0) money += JSON.parse(localStorage.getItem(item)).amount;
    });
    alert(money);

    document.getElementById('monthly').innerHTML = money.toString(10);


}
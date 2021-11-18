var array = [];

document.getElementsByClassName('apply').onclick = function() {storeValues()};

function storeValues() {
    inputValue = document.querySelector('input').value;
    
    array.push(inputValue);
    console.log(array);

    return false;
}
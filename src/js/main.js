let dollar = document.getElementById('dollar');
let pound = document.getElementById('pound');

dollar.onkeyup = () => {
    pound.value = dollar.value * 30.88;
}

pound.onkeyup = () => {
    dollar.value = pound.value / 30.88;
}
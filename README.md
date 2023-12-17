/**
 * This function is called when the user types into the dollar input field.
 * It updates the pound input field with the value of the dollar input field multiplied by 30.88.
 */
dollar.onkeyup = function() {
  pound.value = dollar.value * 30.88;
};

/**
 * This function is called when the user types into the pound input field.
 * It updates the dollar input field with the value of the pound input field divided by 30.88.
 */
pound.onkeyup = function() {
  dollar.value = pound.value / 30.88;

};

/**
 * This function is called when the user types into the pound input field.
 * It updates the dollar input field with the current value of the pound input field, 
 * converted to dollars based on the current exchange rate.
 */
 pound.onkeyup = function() {
    dollar.value = pound.value * 30.88;
}

/**
 * This function is called when the user types into the dollar input field.
 * It updates the pound input field with the current value of the dollar input field, 
 * converted to pounds based on the current exchange rate.
 */
dollar.onkeyup = function() {
    pound.value = dollar.value / 30.88;
}

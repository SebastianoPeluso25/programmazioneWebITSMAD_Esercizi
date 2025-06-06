function validateCreditCard(cardNumber) {
  // Remove dashes
  const cleaned = cardNumber.replace(/-/g, '');

  // Prepare result object
  let result = { valid: false, number: cardNumber };

  // Check length
  if (cleaned.length !== 16) {
    result.error = 'wrong_length';
    logResult(result);
    return result;
  }

  // Check all digits
  if (!/^\d{16}$/.test(cleaned)) {
    result.error = 'invalid_characters';
    logResult(result);
    return result;
  }

  // Check at least two different digits
  const uniqueDigits = new Set(cleaned);
  if (uniqueDigits.size < 2) {
    result.error = 'only_one_type_of_number';
    logResult(result);
    return result;
  }

  // Check final digit even
  if (parseInt(cleaned[15]) % 2 !== 0) {
    result.error = 'odd_final_number';
    logResult(result);
    return result;
  }

  // Check sum > 16
  const sum = cleaned.split('').reduce((acc, d) => acc + parseInt(d), 0);
  if (sum <= 16) {
    result.error = 'sum_less_than_16';
    logResult(result);
    return result;
  }

  // Passed all checks
  result.valid = true;
  logResult(result);
  return result;
}

function logResult(res) {
  console.log('================================');
  console.log(`= number : ${res.number} =`);
  console.log(`= valid : ${res.valid} =`);
  if (!res.valid) {
    // Format error message with spaces for neatness
    let errorMsg = res.error.replace(/_/g, ' ');
    console.log(`= error : ${errorMsg} =`);
  }
  console.log('================================');
}

// Test calls
validateCreditCard('9999-9999-8888-0000');  // valid
validateCreditCard('4444-4444-4444-4444');  // invalid (only one type)
validateCreditCard('6666-6666-6666-1666');  // valid
validateCreditCard('a923-3211-9c01-1112');  // invalid characters
validateCreditCard('1111-1111-1111-1110');  // sum less than 16
validateCreditCard('6666-6666-6666-6661');  // odd final number

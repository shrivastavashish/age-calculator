import React from 'react';

function AgeCalculator({ onCalculate }) {
  // Define the handleCalculate function
  const handleCalculate = () => {
    // Retrieve the value of the input field
    const birthdayInput = document.getElementById("birthday");
    const birthday = birthdayInput.value;

    // Validate the birthday input
    if (birthday === "") {
      alert("Please enter your birthday");
      return;
    }

    // Calculate the age based on the input birthday
    const currentDate = new Date();
    const birthdayDate = new Date(birthday);
    let calculatedAge = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
      calculatedAge--;
    }

    // Invoke the onCalculate callback function with the calculated age
    onCalculate(calculatedAge);
  };

  return null;
}

export default AgeCalculator;

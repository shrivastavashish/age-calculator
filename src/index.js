import React from 'react';
import { createRoot } from 'react-dom/client'; 
import AgeCalculator from './AgeCalculator';
import './index.css';

const handleCalculate = () => {
  const birthday = document.getElementById('birthday').value;
  const currentDate = new Date();
  const birthdayDate = new Date(birthday);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
    age--;
  }

  const resultEl = document.getElementById('result');
  resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
};

// Add event listener to the Calculate Age button
document.getElementById('btn').addEventListener('click', handleCalculate);

// Create root using createRoot
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AgeCalculator />
  </React.StrictMode>
);

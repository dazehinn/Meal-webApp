export default function printMe() {
  const alert = document.createElement('p');
  alert.innerHTML = 'I get called from print.js';
  document.body.appendChild(alert);
}
const submitBtn = document.getElementById('submit-btn');
const state1 = document.querySelector('.state-1');
const state2 = document.querySelector('.state-2');
const selected = document.getElementById('selected');
console.log(state1);
console.log(state2);


submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  const checked = document.querySelector('input[name="radio"]:checked');
  state1.classList.add('hidden');
  state2.classList.remove('hidden');
  console.log(checked.value);
  selected.textContent = checked.value
});
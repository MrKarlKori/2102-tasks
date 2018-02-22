const ITEMS = {
	t6input: document.querySelector('input'),
	t9input1: document.querySelectorAll('input')[1],
	t9input2: document.querySelectorAll('input')[2],
	t6button: document.querySelectorAll('button')[0],
	t9button: document.querySelectorAll('button')[1],
	t6output: document.querySelectorAll('.result')[0],
	t9output: document.querySelectorAll('.result')[1]
};



ITEMS.t6button.addEventListener('click', (e) => {
	if (!ITEMS.t6input.value) {
		ITEMS.t6input.placeholder = 'Please, enter value';
		return;
	}

	ITEMS.t6output.textContent = 'Result: ' + getBriefStr(ITEMS.t6input.value);
});

ITEMS.t9button.addEventListener('click', (e) => {
	if (!ITEMS.t9input1.value && !ITEMS.t9input2.value) {
		ITEMS.t9input1.placeholder = 'Please, enter value';
		ITEMS.t9input2.placeholder = 'Please, enter value';
		return;
	} else if (!ITEMS.t9input1.value) {
		ITEMS.t9input1.placeholder = 'Please, enter value';
		return;
	} else if (!ITEMS.t9input2.value) {
		ITEMS.t9input2.placeholder = 'Please, enter value';
		return;
	}

	ITEMS.t9output.textContent = 'Result: ' + checkStrings(ITEMS.t9input1.value, ITEMS.t9input2.value);
});
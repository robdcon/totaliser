$( document ).ready(function() {

	// UI elements
	const totalUI = $('.amount');
	const targetElement = $('.js-target');
	const raisedElement = $('.js-raised');
	const percentageElement = $('.js-percentage');


	// Totaliser controls
	const totaliserInit = () => {

		let target;
		let raised;
		let percent;

		const setTarget = (value) => {
			target = value;
		}
		const setRaised = (value) => {
			raised = value;
		}
		const calcPercent = () => {
			percent = getPercentage(target, raised);
		}
		const updateUI = () => {
			updateUIVals(target, raised, percent)
			updateTotaliser(totalUI, percent);
		}

		return {
			setTarget: setTarget,
			setRaised: setRaised,
			calcPercent:calcPercent,
			updateUI: updateUI
		}
	}
	
	// Get percentage of amount versus target
	const getPercentage = (total, current) => {
		const percentage = (current/total)*100;
		return Math.floor(percentage);
	}

	// Update the height css property of the total UI element
	const updateTotaliser = (element, value) => {
		element.css('height', `${value}%`);
	}

	// Update the text values of the corresponding UI elements
	const updateUIVals = (target, raised, percent) => {
		
		$(targetElement[0]).html(target);
		$(raisedElement[0]).html(raised);
		$(percentageElement[0]).html(percent);
	}

	// Initialise totaliser
	const totaliser = totaliserInit();

	const submitDataToTotaliser = (raised, target) => {
		totaliser.setRaised(raised);
		totaliser.setTarget(target);
		totaliser.calcPercent();
		totaliser.updateUI();
	}

	// Pass data to totaliser on submit
	$('#form').on('submit', (e) => {
		e.preventDefault();
		const raised = $('#js-amount').val();
		const target = $('#js-target').val();
		submitDataToTotaliser(raised, target);
	})


});
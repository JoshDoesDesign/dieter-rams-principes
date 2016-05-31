
/* Each Dieter Rams rule/principle has two waypoints in order to 
factor in the different offset values for the header and text */

$(document).ready(function() {
	console.log('script.js registered');

	// RULE 1

	var $rule1 = $('#rule_1');
	var $rule1Header = $('#rule_1 h1');
	var $rule1Text = $('#rule_1 h4');

	$rule1.waypoint(function(direction) {
		if (direction == 'down') {
			$rule1Header.addClass('h1-animate');
		} else {
			$rule1Header.removeClass('h1-animate');			
		}
		console.log('waypoint 1-header triggered');
	}, { offset: '60%' });

	$rule1.waypoint(function(direction) {
		if (direction == 'down') {
			$rule1Text.addClass('text-animate');
		} else {
			$rule1Text.removeClass('text-animate');			
		}
		console.log('waypoint 1-text triggered');
	}, { offset: '30%' }); 

	// RULE 2

	var $rule2 = $('#rule_2');
	var $rule2Header = $('#rule_2 h1');
	var $rule2Text = $('#rule_2 h4');

	$rule2.waypoint(function(direction) {
		if (direction == 'down') {
			$rule2Header.addClass('h1-animate');
		} else {
			$rule2Header.removeClass('h1-animate');			
		}
		console.log('waypoint 2-header triggered');
	}, { offset: '60%' }); 

	$rule2.waypoint(function(direction) {
		if (direction == 'down') {
			$rule2Text.addClass('text-animate');
		} else {
			$rule2Text.removeClass('text-animate');			
		}
		console.log('waypoint 2-header triggered');
	}, { offset: '30%' }); 

	// RULE 3

	var $rule3 = $('#rule_3');
	var $rule3Header = $('#rule_3 h1');
	var $rule3Text = $('#rule_3 h4');

	$rule3.waypoint(function(direction) {
		if (direction == 'down') {
			$rule3Header.addClass('h1-animate');
		} else {
			$rule3Header.removeClass('h1-animate');			
		}
		console.log('waypoint 1-header triggered');
	}, { offset: '60%' });

	$rule3.waypoint(function(direction) {
		if (direction == 'down') {
			$rule3Text.addClass('text-animate');
		} else {
			$rule3Text.removeClass('text-animate');			
		}
		console.log('waypoint 1-text triggered');
	}, { offset: '30%' }); 

	// RULE 4

	var $rule4 = $('#rule_4');
	var $rule4Header = $('#rule_4 h1');
	var $rule4Text = $('#rule_4 h4');

	$rule4.waypoint(function(direction) {
		if (direction == 'down') {
			$rule4Header.addClass('h1-animate');
		} else {
			$rule4Header.removeClass('h1-animate');			
		}
		console.log('waypoint 2-header triggered');
	}, { offset: '60%' }); 

	$rule4.waypoint(function(direction) {
		if (direction == 'down') {
			$rule4Text.addClass('text-animate');
		} else {
			$rule4Text.removeClass('text-animate');			
		}
		console.log('waypoint 2-header triggered');
	}, { offset: '30%' }); 

	// RULE 5

	var $rule5 = $('#rule_5');
	var $rule5Header = $('#rule_5 h1');
	var $rule5Text = $('#rule_5 h4');

	$rule5.waypoint(function(direction) {
		if (direction == 'down') {
			$rule5Header.addClass('h1-animate');
		} else {
			$rule5Header.removeClass('h1-animate');			
		}
		console.log('waypoint 1-header triggered');
	}, { offset: '60%' });

	$rule5.waypoint(function(direction) {
		if (direction == 'down') {
			$rule5Text.addClass('text-animate');
		} else {
			$rule5Text.removeClass('text-animate');			
		}
		console.log('waypoint 1-text triggered');
	}, { offset: '30%' }); 

	// RULE 6

	var $rule6 = $('#rule_6');
	var $rule6Header = $('#rule_6 h1');
	var $rule6Text = $('#rule_6 h4');

	$rule6.waypoint(function(direction) {
		if (direction == 'down') {
			$rule6Header.addClass('h1-animate');
		} else {
			$rule6Header.removeClass('h1-animate');			
		}
		console.log('waypoint 2-header triggered');
	}, { offset: '60%' }); 

	$rule6.waypoint(function(direction) {
		if (direction == 'down') {
			$rule6Text.addClass('text-animate');
		} else {
			$rule6Text.removeClass('text-animate');			
		}
		console.log('waypoint 2-header triggered');
	}, { offset: '30%' }); 

	// RULE 7

	var $rule7 = $('#rule_7');
	var $rule7Header = $('#rule_7 h1');
	var $rule7Text = $('#rule_7 h4');

	$rule7.waypoint(function(direction) {
		if (direction == 'down') {
			$rule7Header.addClass('h1-animate');
		} else {
			$rule7Header.removeClass('h1-animate');			
		}
		console.log('waypoint 1-header triggered');
	}, { offset: '60%' });

	$rule7.waypoint(function(direction) {
		if (direction == 'down') {
			$rule7Text.addClass('text-animate');
		} else {
			$rule7Text.removeClass('text-animate');			
		}
		console.log('waypoint 1-text triggered');
	}, { offset: '30%' }); 

	// RULE 8

	var $rule8 = $('#rule_8');
	var $rule8Header = $('#rule_8 h1');
	var $rule8Text = $('#rule_8 h4');

	$rule8.waypoint(function(direction) {
		if (direction == 'down') {
			$rule8Header.addClass('h1-animate');
		} else {
			$rule8Header.removeClass('h1-animate');			
		}
		console.log('waypoint 2-header triggered');
	}, { offset: '60%' }); 

	$rule8.waypoint(function(direction) {
		if (direction == 'down') {
			$rule8Text.addClass('text-animate');
		} else {
			$rule8Text.removeClass('text-animate');			
		}
		console.log('waypoint 2-header triggered');
	}, { offset: '30%' }); 	

	// RULE 9

	var $rule9 = $('#rule_9');
	var $rule9Header = $('#rule_9 h1');
	var $rule9Text = $('#rule_9 h4');

	$rule9.waypoint(function(direction) {
		if (direction == 'down') {
			$rule9Header.addClass('h1-animate');
		} else {
			$rule9Header.removeClass('h1-animate');			
		}
		console.log('waypoint 1-header triggered');
	}, { offset: '60%' });

	$rule9.waypoint(function(direction) {
		if (direction == 'down') {
			$rule9Text.addClass('text-animate');
		} else {
			$rule9Text.removeClass('text-animate');			
		}
		console.log('waypoint 1-text triggered');
	}, { offset: '30%' }); 

	// RULE 10

	var $rule10 = $('#rule_10');
	var $rule10Header = $('#rule_10 h1');
	var $rule10Text = $('#rule_10 h4');

	$rule10.waypoint(function(direction) {
		if (direction == 'down') {
			$rule10Header.addClass('h1-animate');
		} else {
			$rule10Header.removeClass('h1-animate');			
		}
		console.log('waypoint 2-header triggered');
	}, { offset: '60%' }); 

	$rule10.waypoint(function(direction) {
		if (direction == 'down') {
			$rule10Text.addClass('text-animate');
		} else {
			$rule10Text.removeClass('text-animate');			
		}
		console.log('waypoint 2-header triggered');
	}, { offset: '30%' }); 	

});


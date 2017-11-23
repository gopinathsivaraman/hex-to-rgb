$(document).ready(function(){
	$('#hex').on('keyup', function(){
		var valOfHexField = $(this).val();
		var lengthOfHexField = valOfHexField.length;
		var firstLetter = valOfHexField.substring(0,1);
		
		if( lengthOfHexField >= 1){
			if(firstLetter != '#'){
				valOfHexField = '#'+valOfHexField;
				$(this).val(valOfHexField);
			}
		}
		
		if( lengthOfHexField == 4 || lengthOfHexField == 7 ){
			convertToRGB( valOfHexField.substring(1,) );
			
		}else{
			repaintScreen();
		}
	});
});

function convertToRGB(hex){
	var hexLength = hex.length;
	
	if( isHexValid(hex) ){
		
		if( hexLength == 3){
			red = ( parseInt(hex[0],16) * 16 ) + ( parseInt( hex[0], 16 ) * 1 );
			green = ( parseInt(hex[1],16) * 16 ) + ( parseInt( hex[1], 16 ) * 1 );
			blue = ( parseInt(hex[2],16) * 16 ) + ( parseInt( hex[2], 16 ) * 1 );
		}else if( hexLength == 6 ){
			red = ( parseInt(hex[0],16) * 16 ) + ( parseInt( hex[1], 16 ) * 1 );
			green = ( parseInt(hex[2],16) * 16 ) + ( parseInt( hex[3], 16 ) * 1 );
			blue = ( parseInt(hex[4],16) * 16 ) + ( parseInt( hex[5], 16 ) * 1 );
		}
		
		// Set the background color of body into given color
		paintScreen(hex);
		
		// Displays rgb value on result box
		showResult(red, green, blue);
	}
}

// Reset Screen and text color to default
function repaintScreen(){
	$('body').css('background-color', '#a5b');
	$('#rgb').val("");
	
	// Reset text color to default
	toggleTextColor(0);
}

// Set the background color of body into given color
function paintScreen(hex){
	$('body').css('background-color', '#'+hex);
}

function showResult(red, green, blue){
	// Shows rgb value in text box
	$('#rgb').val('rgb('+red+','+green+','+blue+')');
	
	// Finds brightness of the converted color
	var brightness = Math.round( ( (red * 299) + (green * 587) + (blue * 114) ) / 1000 );
	toggleTextColor(brightness);
}

// Toggle text color to white to black or black to white based on given color brightness
function toggleTextColor( brightness ){
	if(brightness > 125)
		$('#footer div a, .calculator input[type="text"], #header').css('color', '#000')
	else
		$('#footer div a, .calculator input[type="text"], #header').css('color', '#FFF')
}

// Checks the given value is valid hexadecimal value or not
function isHexValid(hex){
	isValid = true;
	
	for(i=0; i<hex.length; i++){
		if( isNaN(parseInt(hex[i],16)) ){
			isValid = false;
			break;
		}
	}
	
	return isValid;
}
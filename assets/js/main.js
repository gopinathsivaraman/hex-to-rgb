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
			//rgbOfHex = getRGBOfHex( valOfHexField.substring(1,) );
			
		}else{
			$('body').css('background-color', '#a5b');
		}
	});
});

function getRGBOfHex(hex){
	var hexLength = hex.length;
}
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
			rgbOfHex = getRGBOfHex( valOfHexField.substring(1,) );
			
		}else{
			$('body').css('background-color', '#a5b');
			$('#rgb').val("");
		}
	});
});

function getRGBOfHex(hex){
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
		
		$('body').css('background-color', '#'+hex);
		$('#rgb').val('rgb('+red+','+green+','+blue+')');
		
	}
}

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
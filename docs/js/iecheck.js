function detectIE() {
    try {
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        if (!isIE ) {
            // Fallback to UserAgent detection for IE
            if ( navigator.userAgent.indexOf("MSIE") > 0 ) {
                return true;    
            } else {
                return false;
            }
        }
        return true;
    } catch(e) {
        var error = e.toString();
        console.log(error);
    }
};

if (detectIE()) {
	window.alert("my guy stop using IE");
}
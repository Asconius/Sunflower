$._ext_ILST={
    run : function(seeds, seedRadius, scaleFactor) {

    	var TAU = Math.PI * 2;
    	var PHI = (Math.sqrt(5) + 1) / 2;
		var width = 100;
		var height = width
		var centerX = width / 2;
		var centerY = height / 2;

        var docPreset = new DocumentPreset;
		docPreset.width = 100;
		docPreset.height = 100;
		docPreset.title = "Sunflower";
		docPreset.units = RulerUnits.Pixels;
		docPreset.colorMode = DocumentColorSpace.RGB;
		var doc = documents.addDocument(DocumentColorSpace.RGB, docPreset);
		
		draw();
		
		function draw() {
    		for (var i = 0; i < seeds; i++) {
        		var theta = i * TAU / PHI;
        		var r = Math.sqrt(i) * scaleFactor;
        		drawSeed(centerX + r * Math.cos(theta), centerY - r * Math.sin(theta));
        	}
    	}

    	function drawSeed(x, y) {
    		var color = new RGBColor();
			color.red = 0;
			color.green = 0;
			color.blue = 0;
    	
    	
		    var ellipse = doc.layers[0].pathItems.ellipse(x, y, seedRadius, seedRadius);
		    ellipse.pixelAligned = false;
		    ellipse.fillColor = color;
		    ellipse.strokeColor = new NoColor();
		    ellipse.stroked = false;
		    ellipse.strokeWidth = 0;
		}

        return;
    },
};
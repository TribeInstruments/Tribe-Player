/*  ===========================================================================
*
*   This file is part of TRIBE PLAYER.
*   Copyright 2023 Jairo David Mendez Guzman
*
*   TRIBE PLAYER is free software: you can redistribute it and/or modify
*   it under the terms of the GNU General Public License as published by
*   the Free Software Foundation, either version 3 of the License, or
*   (at your option) any later version.
*
*   TRIBE PLAYER is distributed in the hope that it will be useful,
*   but WITHOUT ANY WARRANTY; without even the implied warranty of
*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*   GNU General Public License for more details.
*
*   You should have received a copy of the GNU General Public License
*   along with TRIBE PLAYER.  If not, see <http://www.gnu.org/licenses/>.
*
*   TRIBE PLAYER is based on the JUCE library using HISE Library,
*   which must be separately licensed for closed source applications:
*
*   http://www.juce.com
*
*   ===========================================================================
*/

namespace LAF
{
//LAFDefinitions

//Paths

//include ("Paths.js");

//LAF Objects

const laf = Engine.createGlobalScriptLookAndFeel();
const customLaf = Content.createLocalLookAndFeel();
const configLaf = Content.createLocalLookAndFeel();
const presetButtonLaf = Content.createLocalLookAndFeel();
const logoButtonLaf = Content.createLocalLookAndFeel();
const footerButtonLaf = Content.createLocalLookAndFeel();
const customDialogButton = Content.createLocalLookAndFeel();
const ComboLaf = Content.createLocalLookAndFeel();
const ZoomComboLaf = Content.createLocalLookAndFeel();
const FilterComboLaf = Content.createLocalLookAndFeel();
const SliderLaf = Content.createLocalLookAndFeel();
const modSliderLaf = Content.createLocalLookAndFeel();
const ReductionLaf = Content.createLocalLookAndFeel();
const roundedIcon = Content.createLocalLookAndFeel();
const filterSlider = Content.createLocalLookAndFeel();

const macroSliderLaf = Content.createLocalLookAndFeel();
const macroBackwardsLaf = Content.createLocalLookAndFeel();
const smallSliderLaf = Content.createLocalLookAndFeel();
const pinSliderLaf = Content.createLocalLookAndFeel();


//Load Images

laf.loadImage("{PROJECT_FOLDER}KnobShadow.png", "KnobShadow");
customLaf.loadImage("{PROJECT_FOLDER}KnobShadow.png", "KnobShadow");
modSliderLaf.loadImage("{PROJECT_FOLDER}KnobShadow.png", "KnobShadow");
macroSliderLaf.loadImage("{PROJECT_FOLDER}KnobShadow.png", "KnobShadow");
macroBackwardsLaf.loadImage("{PROJECT_FOLDER}KnobShadow.png", "KnobShadow");
smallSliderLaf.loadImage("{PROJECT_FOLDER}KnobShadow.png", "KnobShadow");
pinSliderLaf.loadImage("{PROJECT_FOLDER}KnobShadow.png", "KnobShadow");

loadExpansionIcon(laf);

//Eq
laf.registerFunction("drawFilterDragHandle", function(g, obj)
{
	var a = obj.handle;

	g.setColour(Colours.withAlpha(Theme.MainColor, obj.hover ? 1.0 : 0.7));
	g.drawEllipse([a[0] + 5, a[1] + 5, a[2] - 10, a[3] - 10], 1);
	g.setFont(Theme.mediumFont, Theme.smallSize);	
	g.drawAlignedText(obj.index, a, "centred");		
	
});
//Macro Rotary Sliders
macroSliderLaf.registerFunction("drawRotarySlider", function(g, obj)
{
	var K = Content.createPath();
	var p1 = Content.createPath();
	var range = obj.max - obj.min;
	    
	var startOffset = 2.5;
	var arcThickness = 0.07;
	var arcWidth = 1.0 - 2.0 * arcThickness;
	      
	p1.clear();
	
	var endOffset = -startOffset + 2.0 * startOffset * obj.valueNormalized;
	    
	var val = "";
	
	var a = obj.area;
	var w = obj.area;
	var round = 2;
	var h = a[3];
	   
	g.setColour(Theme.MacroColor);
	p1.addArc([arcThickness / 2, arcThickness / 2, arcWidth + arcThickness, arcWidth + arcThickness], - startOffset , 2.5);
	       
	var pathArea = p1.getBounds(obj.area[2]);
	      
	g.setColour(Colours.withAlpha(Colours.black, 0.2));
	g.drawPath(p1, pathArea, obj.area[2] * arcThickness);
	  
	K.addArc([arcThickness / 2, arcThickness / 2, arcWidth + arcThickness, arcWidth + arcThickness], -startOffset - 0.08 , endOffset);   
	   
	var pathArea = K.getBounds(obj.area[2]);
	
	g.setColour(Colours.withAlpha(Theme.MacroColor5, 0.5));
	g.drawPath(K, pathArea, obj.area[2] * arcThickness );
	   
	if (obj.hover || obj.clicked)
	{
	
	    g.setColour(Theme.MacroColor5);	
	    g.drawPath(K, pathArea, obj.area[2] * arcThickness );
	
	}
	
	g.setColour(Theme.MacroColor4);
	g.drawEllipse([5, 5, a[2] - 10, a[3] - 10], 2);
	
	g.drawImage("KnobShadow", a, 0, 0);
			
	g.setColour(Theme.MacroColor);
	g.fillEllipse([10, 10, a[2] - 20, a[3] - 20]);
	
	g.setGradientFill([Colours.withAlpha(Colours.white, 0.2), 0, a[3] / 2, 0x000000, a[3] / 2, a[3]]);
	g.fillEllipse([10, 10, a[2] - 20, a[3] - 20]);
	
	g.setColour(Theme.MacroColor2);
	g.drawEllipse([7, 7, a[2] - 14, a[3] - 14], 3);
	
	g.setColour(Colours.withAlpha(Theme.MacroColor2, 0.5));
	g.drawEllipse([7.5, 7.5, a[2] - 15, a[3] - 15], thick / 3);
								
	var start = 2;
	var end = startOffset * 2 * obj.valueNormalized - startOffset;
	
	g.rotate(end, [obj.area[2] / 2, obj.area[2] / 2]);
		
	g.setColour(Theme.MacroColor3);
	g.fillEllipse([a[2] / 2 - thick3 / 2, 12, 6, 6]);	
});

//Macro Backwards Slider
macroBackwardsLaf.registerFunction("drawRotarySlider", function(g, obj)
{
	var K = Content.createPath();
	var p1 = Content.createPath();
	var range = obj.max - obj.min;
	    
	var startOffset = 2.5;
	var arcThickness = 0.07;
	var arcWidth = 1.0 - 2.0 * arcThickness;
	      
	p1.clear();
	
	var endOffset = -startOffset + 2.0 * startOffset * obj.valueNormalized;
	    
	var val = "";
	
	var a = obj.area;
	var w = obj.area;
	var round = 2;
	var h = a[3];
	 
	g.setColour(Theme.MacroColor);
	p1.addArc([arcThickness / 2, arcThickness / 2, arcWidth + arcThickness, arcWidth + arcThickness], -startOffset , 2.5);
	      
	var pathArea = p1.getBounds(obj.area[2]);
	      
	g.setColour(Colours.withAlpha(Colours.black, 0.2));
	g.drawPath(p1, pathArea, obj.area[2] * arcThickness);
	    
	K.addArc([arcThickness / 2, arcThickness / 2, arcWidth + arcThickness, arcWidth + arcThickness], startOffset - 0.08 , endOffset);   
	    
	var pathArea = K.getBounds(obj.area[2]);
	
	g.setColour(Colours.withAlpha(Theme.MacroColor5, 0.5));
	g.drawPath(K, pathArea, obj.area[2] * arcThickness );
	   
	if (obj.hover || obj.clicked)
	{
	
	    g.setColour(Theme.MacroColor5);	
	    g.drawPath(K, pathArea, obj.area[2] * arcThickness );
	
	}
	
	g.setColour(Theme.MacroColor4);
	g.drawEllipse([5, 5, a[2] - 10, a[3] - 10], 2);
	
	g.drawImage("KnobShadow", a, 0, 0);
	
	g.setColour(Theme.MacroColor);
	g.fillEllipse([10, 10, a[2] - 20, a[3] - 20]);
	
	g.setGradientFill([Colours.withAlpha(Colours.white, 0.2), 0, a[3] / 2, 0x000000, a[3] / 2, a[3]]);
	g.fillEllipse([10, 10, a[2] - 20, a[3] - 20]);
	
	g.setColour(Theme.MacroColor2);
	g.drawEllipse([7, 7, a[2] - 14, a[3] - 14], 3);
	
	g.setColour(Colours.withAlpha(Theme.MacroColor2, 0.5));
	g.drawEllipse([7.5, 7.5, a[2] - 15, a[3] - 15], thick / 3);
								
	var start = 2;
	var end = startOffset * 2 * obj.valueNormalized - startOffset;
	
	g.rotate(end, [obj.area[2] / 2, obj.area[2] / 2]);
		
	g.setColour(Theme.MacroColor3);
	g.fillEllipse([a[2] / 2 - thick3 / 2, 12, 6, 6]);
		
});

//Small Slider
smallSliderLaf.registerFunction("drawRotarySlider", function(g, obj)
{
	var a = obj.area;
	var thick = 3;
	var thick2 = 2;
	var thick3 = 6.5;

	g.drawImage("KnobShadow", a, 0, 0);
	
	g.setColour(Theme.KnobColor);
	g.fillEllipse([5, 5, a[2] - 10, a[3] - 10]);
	
	g.setColour(Theme.KnobColor2);
	g.drawEllipse([5, 5, a[2] - 10, a[3] - 10], 1);
										
	var start = 2;
	var end = start * 2 * obj.valueNormalized - start;
		
	g.rotate(end, [a[2] / 2, a[3] / 2]);
		
	g.setColour(Theme.KnobColor2);
	g.fillRoundedRectangle([a[2] / 2 - thick2 / 2, 6, thick2, a[3] / 3 - 1], 1);	
});

//Pin Slider
pinSliderLaf.registerFunction("drawRotarySlider", function(g, obj)
{
	var a = obj.area;
	var thick = 3;
	var thick2 = 2;
	var thick3 = 6.5;

	g.drawImage("KnobShadow", a, 0, 0);
			
	g.setColour(Theme.PinColor);
	g.fillEllipse([5, 5, a[2] - 10, a[3] - 10]);
			
	g.setColour(Colours.withAlpha(Theme.PinColor, 0.15));
	g.drawEllipse([5, 5, a[2] - 10, a[3] - 10], 2);
										
	var start = 2;
	var end = start * 2 * obj.valueNormalized - start;
				
	g.rotate(end, [a[2] / 2, a[3] / 2]);
				
	g.setColour(Theme.PinColor2);
	g.fillEllipse([a[2] / 2 - thick3 / 2, 7, thick3, thick3]);
	
});

//Global Rotary Sliders---------------------------------------------------------------------------------

customLaf.registerFunction("drawRotarySlider", function(g, obj)
{
	var a = obj.area;
	var thick = 3;
	var thick2 = 2;
	var thick3 = 6.5;
	
	//Big Rotary Slider-----------------------------------------------------------------------------
	
	if (obj.text.indexOf("big") != -1)
	{
		g.setColour(Theme.KnobColor2);
		g.drawEllipse([10, 10, a[2] - 20, a[3] - 20], thick);
				
		g.drawImage("KnobShadow", a, 0, 0);

		g.setColour(Theme.KnobColor);
		g.fillEllipse([10, 10, a[2] - 20, a[3] - 20]);
				
		g.setColour(Theme.KnobColor2);
		g.drawEllipse([4, 4, a[2] - 8, a[3] - 8], thick / 3);
		
		var start = 2;
		var end = start * 2 * obj.valueNormalized - start;
		
		g.rotate(end, [a[2] / 2, a[3] / 2]);
		
		g.setColour(Theme.KnobColor2);
		g.fillRoundedRectangle([a[2] / 2 - thick / 2, 9, thick, a[3] / 4], 2);
				
	}
	
	//Small Rotary Slider------------------------------------------------------------------------------
	
	else if (obj.text.indexOf("small") != -1)
	{

		g.drawImage("KnobShadow", a, 0, 0);

		g.setColour(Theme.KnobColor);
		g.fillEllipse([5, 5, a[2] - 10, a[3] - 10]);
		
		g.setColour(Theme.KnobColor2);
		g.drawEllipse([5, 5, a[2] - 10, a[3] - 10], 1);
											
		var start = 2;
		var end = start * 2 * obj.valueNormalized - start;
			
		g.rotate(end, [a[2] / 2, a[3] / 2]);
			
		g.setColour(Theme.KnobColor2);
		g.fillRoundedRectangle([a[2] / 2 - thick2 / 2, 6, thick2, a[3] / 3 - 1], 1);
					
	}
	
	//Modulation Rotary Slider------------------------------------------------------------------------------
	
	else if (obj.text.indexOf("mod") != -1)
	{
	
		g.drawImage("KnobShadow", a, 0, 0);
	
		g.setColour(Theme.ModColor);
		g.fillEllipse([5, 5, a[2] - 10, a[3] - 10]);
		
		g.setColour(Theme.ModColor2);
		g.drawEllipse([5, 5, a[2] - 10, a[3] - 10], 1);
											
		var start = 2;
		var end = start * 2 * obj.valueNormalized - start;
			
		g.rotate(end, [a[2] / 2, a[3] / 2]);
			
		g.setColour(Theme.ModColor2);
		g.fillRoundedRectangle([a[2] / 2 - thick2 / 2, 6, thick2, a[3] / 3 - 1], 1);
					
	}
	
	//Pin Rotary Slider------------------------------------------------------------------------------
	
	else if (obj.text.indexOf("pin") != -1)
	{
		
		g.drawImage("KnobShadow", a, 0, 0);
		
		g.setColour(Theme.PinColor);
		g.fillEllipse([5, 5, a[2] - 10, a[3] - 10]);
		
		g.setColour(Colours.withAlpha(Theme.PinColor, 0.15));
		g.drawEllipse([5, 5, a[2] - 10, a[3] - 10], 2);
									
		var start = 2;
		var end = start * 2 * obj.valueNormalized - start;
			
		g.rotate(end, [a[2] / 2, a[3] / 2]);
			
		g.setColour(Theme.PinColor2);
		g.fillEllipse([a[2] / 2 - thick3 / 2, 7, thick3, thick3]);
					
	}
	
	//Pin Alt (pon) Rotary Slider--------------------------------------------------------------------
	
	else if (obj.text.indexOf("pon") != -1)
	{
		g.drawImage("KnobShadow", a, 0, 0);

		g.setColour(Colours.withAlpha(Theme.PinColor2, 0.15));
		g.drawEllipse([4, 4, a[2] - 8, a[3] - 8], thick / 3);

		g.setColour(Theme.PinColor);
		g.fillEllipse([10, 10, a[2] - 20, a[3] - 20]);

		g.setColour(Colours.withAlpha(Theme.PinColor, 0.15));
		g.drawEllipse([8, 8, a[2] - 16, a[3] - 16], 3);
		
		g.setGradientFill([0x000000, 0, a[3] / 2, Colours.withAlpha(Colours.black, 0.6), a[3] / 2, a[3]]);
		g.fillEllipse([9, 9, a[2] - 18, a[3] - 18]);
									
		var start = 2;
		var end = start * 2 * obj.valueNormalized - start;
			
		g.rotate(end, [a[2] / 2, a[3] / 2]);
			
		g.setColour(Theme.PinColor2);
		g.fillEllipse([a[2] / 2 - thick3 / 2, 12, 8, 8]);
					
	}
	
	//Pin Alt (Pun) Rotary Slider ---------------------------------------------------------------------
	
	else if (obj.text.indexOf("pun") != -1)
	{
		g.drawImage("KnobShadow", a, 0, 0);
		
		g.setColour(Colours.withAlpha(Theme.PinColor2, 0.15));
		g.drawEllipse([4, 4, a[2] - 8, a[3] - 8], thick / 3);
		
		g.setColour(Theme.PinColor);
		g.fillEllipse([9, 9, a[2] - 18, a[3] - 18]);
		
		g.setColour(Colours.withAlpha(Theme.PinColor, 0.15));
		g.drawEllipse([8, 8, a[2] - 16, a[3] - 16], 3);
		
		g.setGradientFill([0x000000, 0, a[3] / 2, Colours.withAlpha(Colours.black, 0.6), a[3] / 2, a[3]]);
		g.fillEllipse([8, 8, a[2] - 16, a[3] - 16]);
									
		var start = 2;
		var end = start * 2 * obj.valueNormalized - start;
			
		g.rotate(end, [a[2] / 2, a[3] / 2]);
			
		g.setColour(Theme.PinColor2);
		g.fillEllipse([a[2] / 2 - thick3 / 2, 11, 5, 5]);
					
	}
	
	//Macro Slider (Normal)-------------------------------------------------------------------------
	
	else if (obj.text.indexOf("macro") != -1)
	{
	
		var K = Content.createPath();
		var p1 = Content.createPath();
		var range = obj.max - obj.min;
		    
		var startOffset = 2.5;
		var arcThickness = 0.07;
		var arcWidth = 1.0 - 2.0 * arcThickness;
		      
		p1.clear();
		
		var endOffset = -startOffset + 2.0 * startOffset * obj.valueNormalized;
		    
		var val = "";
		
		var a = obj.area;
		var w = obj.area;
		var round = 2;
		var h = a[3];
   
		g.setColour(Theme.MacroColor);
		p1.addArc([arcThickness / 2, arcThickness / 2, arcWidth + arcThickness, arcWidth + arcThickness], - startOffset , 2.5);
       
		var pathArea = p1.getBounds(obj.area[2]);
      
		g.setColour(Colours.withAlpha(Colours.black, 0.2));
		g.drawPath(p1, pathArea, obj.area[2] * arcThickness);
  
		K.addArc([arcThickness / 2, arcThickness / 2, arcWidth + arcThickness, arcWidth + arcThickness], -startOffset - 0.08 , endOffset);   
   
		var pathArea = K.getBounds(obj.area[2]);

		g.setColour(Colours.withAlpha(Theme.MacroColor5, 0.5));
		g.drawPath(K, pathArea, obj.area[2] * arcThickness );
   
		if (obj.hover || obj.clicked)
		{
		
		    g.setColour(Theme.MacroColor5);	
		    g.drawPath(K, pathArea, obj.area[2] * arcThickness );
		
		}
		
		g.setColour(Theme.MacroColor4);
		g.drawEllipse([5, 5, a[2] - 10, a[3] - 10], 2);
		
		g.drawImage("KnobShadow", a, 0, 0);
				
		g.setColour(Theme.MacroColor);
		g.fillEllipse([10, 10, a[2] - 20, a[3] - 20]);
		
		g.setGradientFill([Colours.withAlpha(Colours.white, 0.2), 0, a[3] / 2, 0x000000, a[3] / 2, a[3]]);
		g.fillEllipse([10, 10, a[2] - 20, a[3] - 20]);
		
		g.setColour(Theme.MacroColor2);
		g.drawEllipse([7, 7, a[2] - 14, a[3] - 14], 3);
		
		g.setColour(Colours.withAlpha(Theme.MacroColor2, 0.5));
		g.drawEllipse([7.5, 7.5, a[2] - 15, a[3] - 15], thick / 3);
									
		var start = 2;
		var end = startOffset * 2 * obj.valueNormalized - startOffset;

		g.rotate(end, [obj.area[2] / 2, obj.area[2] / 2]);
			
		g.setColour(Theme.MacroColor3);
		g.fillEllipse([a[2] / 2 - thick3 / 2, 12, 6, 6]);
					
	}
	
	//Macro Slider (Inverted)-------------------------------------------------------------------------
	
	else if (obj.text.indexOf("backwards") != -1)
	{
		var K = Content.createPath();
		var p1 = Content.createPath();
		var range = obj.max - obj.min;
		    
		var startOffset = 2.5;
		var arcThickness = 0.07;
		var arcWidth = 1.0 - 2.0 * arcThickness;
		      
		p1.clear();
		
		var endOffset = -startOffset + 2.0 * startOffset * obj.valueNormalized;
		    
		var val = "";
		
		var a = obj.area;
		var w = obj.area;
		var round = 2;
		var h = a[3];
 
		g.setColour(Theme.MacroColor);
		p1.addArc([arcThickness / 2, arcThickness / 2, arcWidth + arcThickness, arcWidth + arcThickness], -startOffset , 2.5);
      
		var pathArea = p1.getBounds(obj.area[2]);
      
		g.setColour(Colours.withAlpha(Colours.black, 0.2));
		g.drawPath(p1, pathArea, obj.area[2] * arcThickness);
    
		K.addArc([arcThickness / 2, arcThickness / 2, arcWidth + arcThickness, arcWidth + arcThickness], startOffset - 0.08 , endOffset);   
    
		var pathArea = K.getBounds(obj.area[2]);

		g.setColour(Colours.withAlpha(Theme.MacroColor5, 0.5));
		g.drawPath(K, pathArea, obj.area[2] * arcThickness );
   
		if (obj.hover || obj.clicked)
		{
		
		    g.setColour(Theme.MacroColor5);	
		    g.drawPath(K, pathArea, obj.area[2] * arcThickness );
		
		}
		
		g.setColour(Theme.MacroColor4);
		g.drawEllipse([5, 5, a[2] - 10, a[3] - 10], 2);
		
		g.drawImage("KnobShadow", a, 0, 0);
		
		g.setColour(Theme.MacroColor);
		g.fillEllipse([10, 10, a[2] - 20, a[3] - 20]);
		
		g.setGradientFill([Colours.withAlpha(Colours.white, 0.2), 0, a[3] / 2, 0x000000, a[3] / 2, a[3]]);
		g.fillEllipse([10, 10, a[2] - 20, a[3] - 20]);
		
		g.setColour(Theme.MacroColor2);
		g.drawEllipse([7, 7, a[2] - 14, a[3] - 14], 3);
		
		g.setColour(Colours.withAlpha(Theme.MacroColor2, 0.5));
		g.drawEllipse([7.5, 7.5, a[2] - 15, a[3] - 15], thick / 3);
									
		var start = 2;
		var end = startOffset * 2 * obj.valueNormalized - startOffset;

		g.rotate(end, [obj.area[2] / 2, obj.area[2] / 2]);
			
		g.setColour(Theme.MacroColor3);
		g.fillEllipse([a[2] / 2 - thick3 / 2, 12, 6, 6]);
					
	}
	
	//Macro Slider (Pan)-------------------------------------------------------------------------
	
	else if (obj.text.indexOf("pan") != -1)
	{
		var K = Content.createPath();
		var p1 = Content.createPath();
		var range = obj.max - obj.min;
		    
		var startOffset = 2.5;
		var arcThickness = 0.07;
		var arcWidth = 1.0 - 2.0 * arcThickness;
		      
		p1.clear();
		
		var endOffset = -startOffset + 2.0 * startOffset * obj.valueNormalized;
		    
		var val = "";
		
		var a = obj.area;
		var w = obj.area;
		var round = 2;
		var h = a[3];
   
		g.setColour(Theme.MacroColor);
		p1.addArc([arcThickness / 2, arcThickness / 2, arcWidth + arcThickness, arcWidth + arcThickness], -startOffset , 2.5);
       
		var pathArea = p1.getBounds(obj.area[2]);
       
		g.setColour(Colours.withAlpha(Colours.black, 0.2));
		g.drawPath(p1, pathArea, obj.area[2] * arcThickness);
    
		K.addArc([arcThickness / 2, arcThickness / 2, arcWidth + arcThickness, arcWidth + arcThickness], 0 + 0.08 , endOffset);   
			    
		var pathArea = K.getBounds(obj.area[2]);

		g.setColour(Colours.withAlpha(Theme.MacroColor5, 0.5));
		g.drawPath(K, pathArea, obj.area[2] * arcThickness );
   
		if (obj.hover || obj.clicked)
		{
		
		    g.setColour(Theme.MacroColor5);	
		    g.drawPath(K, pathArea, obj.area[2] * arcThickness );
		
		}
		
		g.setColour(Theme.MacroColor4);
		g.drawEllipse([5, 5, a[2] - 10, a[3] - 10], 2);
		
		g.drawImage("KnobShadow", a, 0, 0);
		
		g.setColour(Theme.MacroColor);
		g.fillEllipse([10, 10, a[2] - 20, a[3] - 20]);
		
		g.setGradientFill([Colours.withAlpha(Colours.white, 0.2), 0, a[3] / 2, 0x000000, a[3] / 2, a[3]]);
		g.fillEllipse([10, 10, a[2] - 20, a[3] - 20]);
		
		g.setColour(Theme.MacroColor2);
		g.drawEllipse([7, 7, a[2] - 14, a[3] - 14], 3);
		
		g.setColour(Colours.withAlpha(Theme.MacroColor2, 0.5));
		g.drawEllipse([7.5, 7.5, a[2] - 15, a[3] - 15], thick / 3);
									
		var start = 2;
		var end = startOffset * 2 * obj.valueNormalized - startOffset;

		g.rotate(end, [obj.area[2] / 2, obj.area[2] / 2]);
			
		g.setColour(Theme.MacroColor3);
		g.fillEllipse([a[2] / 2 - thick3 / 2, 12, 6, 6]);
					
	}

});

//Linear Sliders (Normal)-------------------------------------------------------------------------

customLaf.registerFunction("drawLinearSlider", function(g, obj)
{
	var a = obj.area;
	
	g.setColour(Theme.FaderColor);
	g.fillRoundedRectangle([a[0] + 2, a[1] + 2, a[2] - 4, a[3] - 4], 8);
	
	g.setColour(Theme.FaderColor4);
	g.drawRoundedRectangle([a[0] + 1, a[1] + 1, a[2] - 2, a[3] - 2], 9, 0.5);
	
	if (obj.style == 2)
	{
		
		var w = 6;
		var x = a[2] * obj.valueNormalized - (a[3]) * obj.valueNormalized + 4;
		
		g.setColour(Theme.FaderColor2);
		g.drawEllipse([x, 4, a[3] - 8, a[3] - 8], 2.5);

	}
	
	else if (obj.style == 3)
	{
		
		var h = 6;		
		var y = a[3] - a[3] * obj.valueNormalized - (a[2] - 4) + (a[2] + 1) * obj.valueNormalized;

		g.setColour(Theme.FaderColor2);
		//g.fillEllipse([4, y, a[2] - 8, a[2] - 8]);
		g.drawEllipse([4, y, a[2] - 8, a[2] - 8], 2.5);
		g.drawImage("KnobShadow", [2, y, a[2] - 4, a[2] - 4], 0, 0);

	}
	
});

filterSlider.registerFunction("drawLinearSlider", function(g, obj)
{
	var a = obj.area;
	
	if (obj.style == 2)
	{
		
		var w = 6;
		var x = a[2] * obj.valueNormalized - 10 * obj.valueNormalized;
		
		g.setColour(Colours.withAlpha(Theme.FaderColor4, 0.1));
		g.fillRect([5, 10, a[2] - 10, 1]);
		g.fillRect([5, a[3] - 2, a[2] - 10, 1]);
		
		g.setColour(obj.hover ? Colours.withAlpha(Theme.FaderColor4, 0.05) : 0x000000);
		g.fillRect([x + 4, 12, 2, a[3] - 15]);
		
		g.setColour(obj.hover ? Theme.IconColorHover : Theme.FaderColor2);
		g.fillTriangle([x, 0, 10, 8], Math.toRadians(180));

	}
	
	else if (obj.style == 3)
	{
		
		var h = 6;		
		var y = a[3] - a[3] * obj.valueNormalized - (a[2] - 4) + (a[2] + 1) * obj.valueNormalized;
		
		g.setColour(Colours.withAlpha(Theme.FaderColor4, 0.1));
		g.fillRect([0, 10, 1, a[3] - 15]);
		
		g.setColour(obj.hover ? Theme.IconColorHover : Theme.FaderColor2);
		g.fillTriangle([3, y, 8, 10], Math.toRadians(-90));

	}
	
});


modSliderLaf.registerFunction("drawLinearSlider", function(g, obj)
{
	var a = obj.area;
	
	g.setColour(Theme.FaderColor);
	g.fillRoundedRectangle([a[0] + 2, a[1] + 2, a[2] - 4, a[3] - 4], 8);
	
	g.setColour(Theme.FaderColor4);
	g.drawRoundedRectangle([a[0] + 1, a[1] + 1, a[2] - 2, a[3] - 2], 9, 0.5);
	
	if (obj.style == 2)
	{
		
		var w = 6;
		var x = a[2] * obj.valueNormalized - (a[3]) * obj.valueNormalized + 4;
		
		g.setColour(Theme.MainColor);
		g.drawEllipse([x, 4, a[3] - 8, a[3] - 8], 2.5);

	}
	
	else if (obj.style == 3)
	{
		
		var h = 6;		
		var y = a[3] - a[3] * obj.valueNormalized - (a[2] - 4) + (a[2] + 1) * obj.valueNormalized;

		g.setColour(Theme.MainColor);
		//g.fillEllipse([4, y, a[2] - 8, a[2] - 8]);
		g.drawEllipse([4, y, a[2] - 8, a[2] - 8], 2.5);
		g.drawImage("KnobShadow", [2, y, a[2] - 4, a[2] - 4], 0, 0);

	}
	
});

//Slider Packs (Normal)-------------------------------------------------------------------------

customLaf.registerFunction("drawSliderPackFlashOverlay", function(g, obj)
{
	var a = obj.area;
	
	g.setColour(obj.bgColour);
	g.fillRoundedRectangle([a[0] + 2, a[1] + 2, a[2] - 4, a[3] - 4], 5);
	
	g.setColour(obj.itemColour2);
	g.drawRoundedRectangle([a[0] + 1, a[1] + 1, a[2] - 2, a[3] - 2], 6, 1);
});

customLaf.registerFunction("drawSliderPackBackground", function(g, obj)
{
	
});

//Buttons---------------------------------------------------------------------------------------

configLaf.registerFunction("drawToggleButton", function(g, obj)
{
	var a = obj.area;
	
	g.fillAll(obj.value ? Theme.MidColor : 0x000000);
			
	if (obj.over)
		g.fillAll(Colours.withAlpha(Theme.LightColor, 0.5));
			
	g.setColour(Theme.TextColor);
	g.setFont(Theme.boldFont, Theme.fontSize);
	g.drawAlignedText(obj.text, a, "centred");
	
});

presetButtonLaf.registerFunction("drawToggleButton", function(g, obj)
{
	var a = obj.area;

	if (obj.text.indexOf("icon") != -1)
	{
		var icon = obj.text.replace("icon-");
		
	g.setColour(obj.over ? Theme.IconColorHover : Theme.IconColorOff);
	g.fillPath(Paths.icons[icon], [a[0], a[1], a[2] - 2, a[3] - 2]);
		
	}
});

logoButtonLaf.registerFunction("drawToggleButton", function(g, obj)
{
	var a = obj.area;
	var gradient = [Theme.MainColor, a[2], 0, Theme.SecondColor, a[0], a[1]];

	if (obj.text.indexOf("icon") != -1)
	{
		var icon = obj.text.replace("icon-");
					
	//g.setColour(Colours.whitesmoke);
	g.setGradientFill(gradient);
	g.fillPath(Paths.icons[icon], [a[0], a[1], a[2] - 2, a[3] - 2]);
		
	}
	
});

roundedIcon.registerFunction("drawToggleButton", function(g, obj)
{
	var a = obj.area;
	
	if (obj.text.indexOf("icon") != -1)
	{
		var icon = obj.text.replace("icon-");
		
		g.setColour(obj.value ? Theme.IconColorOn : Theme.IconColorOff);
		
		if (obj.over)
			g.setColour(Theme.IconColorHover);
	
		g.fillPath(Paths.icons[icon], [a[0] + 7, a[1] + 7, a[2] - 14, a[3] - 14]);
		g.drawEllipse([a[0] + 1, a[1] + 1, a[2] - 2, a[3] - 2], 1.5);
		
	}
	
});

footerButtonLaf.registerFunction("drawToggleButton", function(g, obj)
{
	var a = obj.area;

	if (obj.text.indexOf("icon") != -1)
	{
		var icon = obj.text.replace("icon-");
				
		g.setColour(obj.value ? Colours.whitesmoke : Colours.grey);
		
		if (obj.over)
			g.setColour(Colours.whitesmoke);

		g.fillPath(Paths.icons[icon], [a[0], a[1], a[2] - 2, a[3] - 2]);
		
	}
});

customLaf.registerFunction("drawToggleButton", function(g, obj)
{
	var a = obj.area;
	
	var gradient2 = [Colours.withAlpha(Theme.BrightColor, 0.3), 0, 0, Colours.withAlpha(Colours.black, 0.3), 0, a[3] / 1.1];
	
	//Icon Button-------------------------------------------------------------------------
	
	if (obj.text.indexOf("icon") != -1)
	{
		var icon = obj.text.replace("icon-");
		
		g.setColour(obj.value ? Theme.IconColorOn : Theme.IconColorOff);
		
		if (obj.over)
			g.setColour(Theme.IconColorHover);

		g.fillPath(Paths.icons[icon], [a[0], a[1], a[2] - 2, a[3] - 2]);
		
	}
	
	//Bypass Button-------------------------------------------------------------------------
	
	if (obj.text.indexOf("bypass") != -1)
	{
		var icon = obj.text.replace("bypass-");
				
		g.setColour(obj.value ? Theme.MainColor : Theme.IconColorOff);
		
		if (obj.over)
			g.setColour(Theme.IconColorHover);

		g.fillPath(Paths.icons.power, [a[0], a[1], a[2] - 2, a[3] - 2]);
		
	}
	
	//Bypass Button-------------------------------------------------------------------------
	
	if (obj.text.indexOf("enabled") != -1)
	{
		var icon = obj.text.replace("enabled-");
		
		g.setColour(obj.value ? Theme.IconColorOff : Theme.MainColor);
		
		if (obj.over)
			g.setColour(Theme.IconColorHover);
	
		g.fillPath(Paths.icons.power, [a[0], a[1], a[2] - 2, a[3] - 2]);
		
	}
	
	//Toggle Icon Button-------------------------------------------------------------------------
	
	else if (obj.text.indexOf("toggle") != -1)
	{
		var icon = obj.text.replace("toggle-");
		
		if 	(obj.value == 1)
		{
		
		g.setColour(Colours.withAlpha(Colours.black, 0.4));
		g.fillPath(Paths.icons.on, a);	
		 
		g.setColour(Theme.IconColorOn);
		g.fillPath(Paths.icons.on, [0, 0, a[2] - 2, a[3] - 2]);
		}
		else if (obj.value == 0)
		{
		
		g.setColour(Colours.withAlpha(Colours.black, 0.4));
		g.fillPath(Paths.icons.off, a);	
		 
		g.setColour(Theme.IconColorOff);
		g.fillPath(Paths.icons.off, [0, 0, a[2] - 2, a[3] - 2]);
		
		}

		if (obj.over)
			g.setColour(Theme.IconColorHover);
	
	}
	
	//inverted Toggle Icon Button-------------------------------------------------------------------------
	
	else if (obj.text.indexOf("inverted") != -1)
	{
		var icon = obj.text.replace("inverted-");
		
		if 	(obj.value == 1)
		{ 
		g.setColour(Theme.IconColorOn);
		g.fillPath(Paths.icons.off, a);
		}
		else if (obj.value == 0)
		{ 
		g.setColour(Theme.IconColorOff);
		g.fillPath(Paths.icons.on, a);
		
		}
		
		if (obj.over)
			g.setColour(Theme.IconColorHover);
	
	}
	
	//Text Button-------------------------------------------------------------------------
	
	else if (obj.text.indexOf("text-") != -1)
		{
			var text = obj.text.replace("text-");
			
			g.setColour(obj.value ? obj.itemColour1 : obj.bgColour);
			g.fillRoundedRectangle(obj.area, 10);
			
			if (obj.over)
			{
				g.setColour(obj.itemColour2);
				g.fillRoundedRectangle(obj.area, 9);
			}
			
			g.setColour(obj.textColour);
			g.setFont(Theme.boldFont, Theme.fontSize);
			g.drawAlignedText(text, a, "centred");

		}
	else if (obj.text.indexOf("textlined-") != -1)
		{
			var text = obj.text.replace("textlined-");
			
			g.setColour(Colours.black);
			g.setOpacity(0.1);
			g.fillRoundedRectangle([a[0] + 4, a[1] + 4, a[2] - 6, a[3] - 4], 12);
									
			g.setColour(obj.value ? Theme.ButtonColor2 : Theme.ButtonColor);
			g.fillRoundedRectangle([a[0] + 4, a[1] + 3, a[2] - 8, a[3] - 7], 8);
			
			if (obj.over)
			{
	
				g.setGradientFill([Colours.withAlpha(Theme.ButtonColor3, 0.2), 0, 0, 0x00FFFFFF, a[3] / 2, a[3]]);
				g.fillRoundedRectangle([a[0] + 4, a[1] + 3, a[2] - 8, a[3] - 6], 10);
			
			}

			g.setColour(Theme.ButtonColor4);
			g.setFont(Theme.mainFont, Theme.smallSize);
			g.drawAlignedText(text, a, "centred");
			
			g.setGradientFill(gradient2);
			g.drawRoundedRectangle([a[0] + 4, a[1] + 3, a[2] - 8, a[3] - 7], 8, 1);
			
		
		}
	else if (obj.text.indexOf("circle-") != -1)
			{
				var text = obj.text.replace("circle-");
				
				g.drawImage("KnobShadow", a, 0, 0);
							
				if (obj.value == 0)
				{
									
				g.setColour(Theme.ButtonColor);
				g.fillEllipse([5, 5, a[2] - 10, a[3] - 10]);
					
				g.setGradientFill([Colours.withAlpha(Colours.white, 0.2), 0, a[3] / 2, 0x000000, a[3] / 2, a[3]]);
				g.fillEllipse([7, 7, a[2] - 14, a[3] - 14]);
				
				g.setColour(Theme.ButtonColor4);
				g.setOpacity(0.3);
				g.drawEllipse([5, 5, a[2] - 10, a[3] - 10], 1.5);
	
				}
				else if (obj.value == 1)
				{

				g.setColour(obj.itemColour1);
				g.fillEllipse([6, 6, a[2] - 12, a[3] - 12]);
					
				g.setGradientFill([Colours.withAlpha(Colours.white, 0.2), 0, a[3] / 2, 0x000000, a[3] / 2, a[3]]);
				g.fillEllipse([7, 7, a[2] - 14, a[3] - 14]);
					
				g.setColour(Theme.ButtonColor4);
				g.setOpacity(0.3);
				g.drawEllipse([5, 5, a[2] - 10, a[3] - 10], 1.5);
					
				}
				
				if (obj.over)
				{
				g.setColour(obj.itemColour2);
				g.fillEllipse([6, 6, a[2] - 12, a[3] - 12]);
				}
	
				g.setColour(Theme.ButtonColor4);
				g.setFont(Theme.boldFont, Theme.smallSize);
				g.drawAlignedText(text, a, "centred");
				
			
			}
		else if (obj.parentType == "MidiChannelList")
		{
			g.setColour(Colours.antiquewhite);
			g.setFont(Theme.mediumFont, Theme.controlSize);
			g.drawAlignedText(obj.text, [a[0] + 35, a[1], a[2], a[3]], "left");
			
			obj.value == 0 ? g.setColour(Theme.MidColor) : g.setColour(Theme.MainColor);
			
			g.fillEllipse([10, 5, 15, 15]);
		}
		else if (obj.parentType == "MidiSources")
		{
			g.setColour(Colours.antiquewhite);
			g.setFont(Theme.mediumFont, Theme.controlSize);
			g.drawAlignedText(obj.text, [a[0] + 35, a[1], a[2], a[3]], "left");
			
			obj.value == 0 ? g.setColour(Theme.MidColor) : g.setColour(Theme.MainColor);
			
			g.fillEllipse([10, 5, 15, 15]);
		}
});

//Alert Buttons

laf.registerFunction("drawDialogButton", function(g, obj)
{
	var a = obj.area;
	var line = 1.5;
	
	g.setColour(obj.value ? Theme.MainColor : Colours.withAlpha(Theme.TextColor, 0.7));
	
	if (obj.over)
		g.setColour(Theme.TextColor);
	
	if (obj.text == "OK" || obj.text == "Cancel")
	g.drawRoundedRectangle([a[0] + 2, a[1] + 2, a[2] - 4, a[3] - 4], 10, line);
	
	if (obj.text == "Add")
	{
		g.fillPath(Paths.icons.plus, [a[2] / 2 - 5, a[1], 16, 16]);
	}
	else if (obj.text == "Rename")
	{
		g.fillPath(Paths.icons.pencil, [a[2] / 2 - 5, a[1], 15, 16]);
	}
	else if (obj.text == "Delete")
	{
		g.fillPath(Paths.icons.trash, [a[2] / 2 - 5, a[1], 12, 16]);	
	}
	else
	{
		g.setFont(Theme.boldFont, Theme.fontSize);
		g.drawAlignedText(obj.text, obj.area, "centred");
	}

});

//Custom Dialog Button

customDialogButton.registerFunction("drawToggleButton", function(g, obj)
{
	var a = obj.area;
	var line = 1.5;
	
	g.setColour(obj.value ? Theme.MainColor : Colours.withAlpha(Theme.TextColor, 0.7));
	
	if (obj.over)
		g.setColour(Theme.TextColor);
	
	//g.drawRoundedRectangle([a[0] + 2, a[1] + 2, a[2] - 4, a[3] - 4], 10, line);

	g.setFont(Theme.boldFont, Theme.fontSize);
	g.drawAlignedText(obj.text, obj.area, "centred");

});


// ComboBox

ZoomComboLaf.registerFunction("drawComboBox", function(g, obj)
{
  
});

ZoomComboLaf.registerFunction("drawPopupMenuBackground", function(g, obj)
{
    g.fillAll(Theme.MidColor);

});

ZoomComboLaf.registerFunction("drawPopupMenuItem", function(g, obj)
{
    var a = obj.area;
    var h = a[3];
    
    if(obj.isSeparator)
    {
        g.setColour(Theme.TextColor);
        g.drawLine(a[0]+10, a[0] + a[2]-10, a[1] + a[3]/2, a[1] + a[3]/2, 1.0);
        return;
    }
    
    if(obj.isTicked)
    {
		g.setColour(Theme.TextColor);
		g.fillEllipse([a[0] + h/3, a[1] + h/3, h/3, h/3]);
    }
    
    if(obj.isHighlighted)
    {
    	g.setColour(0x22FFFFFF);
    	g.fillRect(obj.area);
    }
    
    g.setFont(Theme.mainFont, Theme.fontSize);
    g.setColour(Theme.TextColor);
    g.drawAlignedText(obj.text, [a[0] + h, a[1], a[2] - h, a[3]], "left");
    
});

laf.registerFunction("drawComboBox", function(g, obj)
{
	var a = obj.area;
	
	g.setColour(Theme.FaderColor);
	g.fillRoundedRectangle([a[0] + 2, a[1] + 2, a[2] - 4, a[3] - 4], 8);

    g.setColour(Theme.FaderColor4);
    g.drawRoundedRectangle([a[0] + 2, a[1] + 2, a[2] - 4, a[3] - 4], 9, 1);
    
    g.setColour(Theme.FaderColor2);
    g.setFont(Theme.mediumFont, Theme.controlSize);
    g.drawAlignedText(obj.text, [a[0] + 10, a[1], a[2]-10, a[3]], "left");
    var h = a[3];
    
    g.setColour(Theme.FaderColor2);
    g.fillTriangle([a[0] + a[2] - h/3 - 10, a[1] + h/3, h/3 - 1, h/3 - 1], Math.PI);
    
    g.setColour(Theme.FaderColor3);
    g.drawTriangle([a[0] + a[2] - h/3 - 10, a[1] + h/3, h/3 - 1, h/3 - 1], Math.PI, 1);
    
});

laf.registerFunction("drawPopupMenuBackground", function(g, obj)
{
    g.fillAll(Theme.MidColor);

});

laf.registerFunction("drawPopupMenuItem", function(g, obj)
{
    var a = obj.area;
    var h = a[3];
    
    if(obj.isSeparator)
    {
        g.setColour(Theme.TextColor);
        g.drawLine(a[0]+10, a[0] + a[2]-10, a[1] + a[3]/2, a[1] + a[3]/2, 1.0);
        return;
    }
    
    if(obj.isTicked)
    {
		g.setColour(Theme.TextColor);
		g.fillEllipse([a[0] + h/3, a[1] + h/3, h/3, h/3]);
    }
    
    if(obj.isHighlighted)
    {
        g.setColour(0x22FFFFFF);
        g.fillRect(obj.area);
    }
    
    g.setFont(Theme.mainFont, Theme.fontSize);
    g.setColour(Theme.TextColor);
    g.drawAlignedText(obj.text, [a[0] + h, a[1], a[2] - h, a[3]], "left");
});

//Filter Combo Laf

FilterComboLaf.registerFunction("drawComboBox", function(g, obj)
{
	var a = obj.area;
    
    g.setColour(Theme.FaderColor2);
    g.setFont(Theme.mediumFont, Theme.controlSize - 1);
    g.drawAlignedText(obj.text, [a[0] + 10, a[1], a[2]-10, a[3]], "left");
    var h = a[3];
    
    g.setColour(Theme.FaderColor2);
    g.fillTriangle([a[0] + a[2] - h/3 - 10, a[1] + h/3, 10, 8], Math.PI);
    
    
});

FilterComboLaf.registerFunction("drawPopupMenuBackground", function(g, obj)
{
    g.fillAll(Theme.MidColor);

});

FilterComboLaf.registerFunction("drawPopupMenuItem", function(g, obj)
{
    var a = obj.area;
    var h = a[3];
    
    if(obj.isSeparator)
    {
        g.setColour(Theme.TextColor);
        g.drawLine(a[0]+10, a[0] + a[2]-10, a[1] + a[3]/2, a[1] + a[3]/2, 1.0);
        return;
    }
    
    if(obj.isTicked)
    {
		g.setColour(Theme.TextColor);
		g.fillEllipse([a[0] + h/3, a[1] + h/3, h/3, h/3]);
    }
    
    if(obj.isHighlighted)
    {
        g.setColour(0x22FFFFFF);
        g.fillRect(obj.area);
    }
    
    g.setFont(Theme.mainFont, Theme.fontSize);
    g.setColour(Theme.TextColor);
    g.drawAlignedText(obj.text, [a[0] + h, a[1], a[2] - h, a[3]], "left");
});


laf.registerFunction("drawAlertWindow", function(g, obj)
{
	var a = [0, 0, obj.area[2], 30];
	
	var gradient = [Theme.LightColor, 0, obj.area[3] / 2, Theme.MidColor, 0, obj.area[3] / 1];
	var gradient2 = [Colours.withAlpha(Theme.BrightColor, 0.1), 0, 0, Colours.withAlpha(Colours.black, 0.5), 0, obj.area[3] / 1.1];

	g.setColour(Theme.MidColor);
	g.fillRoundedRectangle(obj.area, 2);
	
	g.setColour(Theme.DarkColor);
	g.fillRoundedRectangle(a, 2);

	g.setGradientFill(gradient2);
	g.drawRect(obj.area, 0.5);
	
	g.setColour(Theme.TextColor);
	g.setFont(Theme.mainFont, Theme.fontSize);
	g.drawAlignedText(obj.title, a, "centred");
	
});

laf.registerFunction("getAlertWindowMarkdownStyleData", function(obj)
{
    obj.font = Theme.mainFont;
    obj.fontSize = Theme.titleSize;
    obj.headlineColour = Theme.TextColor;
    
    return obj;
});

laf.registerFunction("drawAlertWindowIcon", function(g, obj)
{
	var a = obj.area;
	var area = [a[0], a[1], a[2] - 10, a[2] - 10];
	
	g.setColour(Theme.DarkColor);

    if(obj.type == "Question")
    {	
	    g.fillPath(Paths.icons.circlequestion, area);
    }
    
    else if(obj.type == "Info")
    {	
    	g.fillPath(Paths.icons.circleinfo, area);
    }
    
    else if(obj.type == "Warning")
    {	
        g.fillPath(Paths.icons.circlewarning, area);
    }
    
    else if(obj.type == "Error")
    {	
    	g.fillPath(Paths.icons.circlexmark, area);
    }

});


laf.registerFunction("drawWhiteNote", function(g, obj)
{
	var a = obj.area;
	var c = obj.keyColour;
	
	if (obj.down)
		{

			g.setColour(Colours.withAlpha(Theme.MainColor, 0.8));
			g.fillRoundedRectangle(a, 6);
			
			g.setColour(Colours.black);
			g.drawRoundedRectangle(a, 6, 2);
		
		}
	else if (obj.hover)
		{
		
			g.setColour(Colours.withAlpha(Theme.SecondColor, 0.5));
			g.fillRoundedRectangle(a, 6);
				
			g.setColour(Colours.black);
			g.drawRoundedRectangle(a, 6, 2);
		}
	else
		{
		
			g.setColour(c);
			g.fillRoundedRectangle(a, 6);
		
			g.setColour(Colours.black);
			g.drawRoundedRectangle(a, 6, 2);
		
		}
});

laf.registerFunction("drawBlackNote", function(g, obj)
{
	var a = obj.area;
	var c = obj.keyColour;
	
	if (obj.down)
		{

			g.setColour(Colours.black);
			g.fillRoundedRectangle(a, 6);
			
			g.setColour(Colours.withAlpha(Theme.MainColor, 0.8));
			g.fillRoundedRectangle(a, 6);
			
		}
	else if (obj.hover)
		{

			g.setColour(Colours.black);
			g.fillRoundedRectangle(a, 6);

			g.setColour(Colours.withAlpha(Theme.SecondColor, 0.5));
			g.fillRoundedRectangle(a, 6);
			
		}
	else
		{
		
			g.setColour(Colours.black);
			g.fillRoundedRectangle(a, 6);

		}

});

laf.registerFunction("drawTableBackground", function(g, obj)
{
	var a = obj.area;
	
	g.setGradientFill([Colours.withAlpha(Colours.black, 0.8), 0, a[3], Colours.withAlpha(Colours.black, 0.3), 0.8, 0, a[1]]);
	g.fillRoundedRectangle(a, 4);
	
	g.setColour(Colours.withAlpha(Colours.whitesmoke, 0.1));
	g.drawRoundedRectangle(a, 4, 1.5);
	
	g.drawDropShadow([a[0], a[1] / 2, a[2], 5], Colours.withAlpha(Colours.black, 0.3), 5);
	g.drawDropShadow([0, 0, 0, a[3]], Colours.withAlpha(Colours.black, 0.3), 5);
	g.drawDropShadow([a[2] - 5, 0, 0, a[3]], Colours.withAlpha(Colours.black, 0.5), 5);
	
});

laf.registerFunction("drawAhdsrBackground", function(g, obj)
{
	var a = obj.area;
	
	g.setGradientFill([Colours.withAlpha(Colours.black, 0.8), 0, a[3], Colours.withAlpha(Colours.black, 0.3), 0.8, 0, a[1]]);
	g.fillRoundedRectangle(a, 4);
	
	g.setColour(0x0CFFFFFF);
	g.drawRoundedRectangle(a, 4, 1.5);
	
	g.drawDropShadow([a[0], a[1] / 2, a[2], 5], Colours.withAlpha(Colours.black, 0.3), 5);
	g.drawDropShadow([0, 0, 0, a[3]], Colours.withAlpha(Colours.black, 0.3), 5);
	g.drawDropShadow([a[2] - 5, 0, 0, a[3]], Colours.withAlpha(Colours.black, 0.5), 5);
	
});

laf.registerFunction("drawAhdsrPath", function(g, obj)
{
	// This function will be called for the whole path
	// and once again for the currently active section
	
	var a = obj.area;
	var gradient = [Theme.TableColor2, 0, 0, Theme.TableColor, 0, a[3]];

	if(obj.isActive)
	{
		// Just render the "active section of the path"
		g.setColour(Theme.TableColor3);
		
		// the `area` property contains the original bounds 
		// of the path, so we need to pass it to the method
		g.fillPath(obj.path, obj.area);
	}
	else
	{

	    g.setColour(Theme.TableColor3);
	    g.drawPath(obj.path, obj.area, 2);

	    g.setGradientFill(gradient);
	    g.fillPath(obj.path, obj.area);

	}
});

laf.registerFunction("drawAhdsrBall", function(g, obj)
{
	g.setColour(obj.itemColour2);
	g.drawEllipse([obj.position[0] - 5, obj.position[1] - 5, 10, 10], 2.5);

});

//Filter BG

laf.registerFunction("drawFilterBackground", function(g, obj)
{
	var a = obj.area;
	
	g.setGradientFill([Colours.withAlpha(Colours.black, 0.8), 0, a[3], Colours.withAlpha(Colours.black, 0.3), 0.8, 0, a[1]]);
	g.fillRoundedRectangle(a, 4);
	
	g.setColour(Colours.withAlpha(Colours.whitesmoke, 0.2));
	g.drawRoundedRectangle(a, 4, 1.5);
	
	g.drawDropShadow([a[0], a[1] / 2, a[2], 5], Colours.withAlpha(Colours.black, 0.3), 5);
	g.drawDropShadow([0, 0, 0, a[3]], Colours.withAlpha(Colours.black, 0.3), 5);
	
});

laf.registerFunction("drawTablePoint", function(g, obj)
{
	var a = obj.tablePoint;

    g.setColour(Theme.TableColor3);
    g.drawEllipse([a[0] + 3, a[1] + 3, a[2] - 6, a[3] - 6], 2.5);
    
    if(obj.hover)
    {
        g.setColour(Colours.withAlpha(Theme.MainColor, 0.6));
        g.fillEllipse([a[0] + 3, a[1] + 3, a[2] - 6, a[3] - 6]);
    }
});

laf.registerFunction("drawTablePath", function(g, obj)
{
	var a = obj.area;

    g.setColour(Theme.TableColor3);
    g.drawPath(obj.path, obj.area, 2);
    
    var gradient = [Theme.TableColor2, 0, 0, Theme.TableColor, 0, a[3]];
    
    g.setGradientFill(gradient);
    g.fillPath(obj.path, obj.area);
    
    g.drawDropShadow([a[2] - 2, 0, 0, a[3]], 0xFF191919, 10);
    g.drawDropShadow([0, a[3] - 2, a[2], 5], Colours.withAlpha(Colours.black, 0.7), 5);
    
});

laf.registerFunction("drawTableRuler", function(g, obj)
{
    g.setColour(Colours.withAlpha(Theme.TableColor3, 0.05));
    
    var x = obj.position * obj.area[2] - 4;
    var a = obj.area;
    
    g.fillRoundedRectangle([a[0] + 2, a[1] + 2, x, a[3] - 4], 4);
    
    g.setColour(Colours.withAlpha(Theme.TableColor3, 0.15));
    g.drawLine(x, x, 4, obj.area[3] - 3, 2.0);

});

// PRESET BROWSER

laf.registerFunction("drawPresetBrowserListItem", function(g, obj)
{
	var a = obj.area;
	var h = a[3];
	
	if (obj.columnIndex == -1)
	{	
		g.drawDropShadow([a[0] + 4, a[1] + 4, 201 - 8, a[3] - 8], Colours.withAlpha(Colours.black, 0.5), 5);
		g.setColour(Colours.withAlpha(Colours.white, obj.selected ? 1.0 : 0.6));
		g.drawImage(obj.text, [a[0] + 4, a[1] + 4, 201 - 8, a[3] - 8], 0, 0);

		if (obj.hover)
		{
			g.setGradientFill([Colours.withAlpha(Colours.white, 0.2), a[0] , a[1], 0x000000, a[2], a[1]]);
			g.fillRoundedRectangle([a[0] + 4, a[1] + 4, 201 - 8, a[3] - 8], 2);
		}
		if (obj.selected)
		{
			g.setColour(Colours.withAlpha(Theme.MainColor, 0.5));
			g.drawRoundedRectangle([a[0] + 1, a[1] + 1, 199, a[3] - 2], 1, 2);
			g.fillTriangle([4, a[3] / 2 - 7, 10, 15], Math.toRadians(90));
		}
		
	}
	else
	{
		if (obj.selected)
		{
			g.setGradientFill([Colours.withAlpha(Colours.black, 0.5), a[0] , a[1], 0x000000, a[2], a[1]]);
			g.fillRoundedRectangle([a[0] + 10, a[1], a[2], a[3]], 2);
			
			g.setColour(Theme.MainColor);
			g.fillRoundedRectangle([2, 2, 5, a[3] - 2], 2);
		}
		if (obj.hover)
		{
			g.setGradientFill([Colours.withAlpha(Colours.white, 0.2), a[0] , a[1], 0x000000, a[2], a[1]]);
			g.fillRoundedRectangle([a[0] + 10, a[1], a[2], a[3]], 2);
			
			g.setColour(Colours.withAlpha(Colours.white, 0.2));
			g.fillRoundedRectangle([2, 2, 5, a[3] - 2], 2);
		}
		
		g.setColour(Colours.withAlpha(Theme.MainColor, 0.4));
		g.fillRoundedRectangle([3, 3, 3, a[3] - 4], 2);
		
		g.setFont(Theme.mediumFont, Theme.titleSize - 1);
		g.setColour(Theme.TextColor);
		g.drawAlignedText(obj.text, [a[0] + 20, a[1], a[2], a[3]], "left");
	}
	



});

laf.registerFunction("drawPresetBrowserColumnBackground", function(g, obj)
{	
	var a = obj.area;
	
	g.setColour(Colours.withAlpha(Theme.TextColor, 0.05));
	g.fillRoundedRectangle([0, 0, 2, a[3]], 2);

});

laf.registerFunction("drawPresetBrowserSearchBar", function(g, obj)
{	
	var a = obj.area;
	
	g.setColour(Colours.withAlpha(Colours.white, 0.08));
	g.fillRoundedRectangle(a, 10);
	
	g.setColour(Colours.withAlpha(Theme.TextColor, 0.5));
	g.fillPath(Paths.icons.search, [5, 5, 15, 15]);

});

inline function removeFromTop(area, amountToRemove)
{
    local a = [area[0], area[1], area[2], amountToRemove];
    
    area[1] += amountToRemove;
    area[2] -= amountToRemove;
    return a;
}

laf.registerFunction("drawPresetBrowserDialog", function(g, obj)
{
	var a = obj.area;

   g.setColour(Theme.MidColor);
   g.fillRoundedRectangle([a[0], a[1], a[2], a[3] + 20], 5.0);
   
   g.setColour(Theme.DarkColor);
   g.fillRoundedRectangle(obj.labelArea, 5.0);
   
   g.setFont(Theme.mediumFont, Theme.titleSize);
   g.setColour(Theme.TextColor);
   g.drawAlignedText(obj.title, removeFromTop(obj.area, 50), "centred");
    
});

SliderLaf.registerFunction("drawLinearSlider", function(g, obj)
{
	var a = obj.area;
	
	g.setGradientFill([Theme.SliderPackColor, 0, a[3] / 2, Theme.SliderPackColor2, 0, a[3]]);
	var h = 6;
	var y = a[3] - a[3] * obj.valueNormalized;
	g.fillRoundedRectangle([1, y, a[2] - 2, a[3]], 3);


});

SliderLaf.registerFunction("drawSliderPackFlashOverlay", function(g, obj)
{
	var a = obj.area;
	
	g.setGradientFill([0x000000, 0, a[3] / 2, Theme.SliderPackColor3, 0, a[3]]);
	g.fillRoundedRectangle([a[0] + 1, obj.valueNormalized, a[2] - 2, a[3]], 2);

});

SliderLaf.registerFunction("drawSliderPackBackground", function(g, obj)
{
	
});

SliderLaf.registerFunction("drawSliderPackTextPopup", function(g, obj)
{
	var a = obj.area;
	
	g.setColour(Colours.withAlpha(Theme.DarkColor, 0.6));
	g.fillRoundedRectangle([0, a[3] - 18, 50, 18], 2);

	
	g.setColour(Colours.withAlpha(Theme.TextColor, 0.5));
	g.setFont(Theme.mediumFont, Theme.controlSize);
	g.drawAlignedText(obj.text, a, "bottomLeft");
	
});

ComboLaf.registerFunction("drawComboBox", function(g, obj)
{
	var a = obj.area;
	
	g.setColour(Theme.FaderColor);
	g.fillRoundedRectangle([a[0] + 2, a[1] + 2, a[2] - 4, a[3] - 4], 6);

    g.setColour(Theme.FaderColor4);
    g.drawRoundedRectangle([a[0] + 2, a[1] + 2, a[2] - 4, a[3] - 4], 7, 1);
    
    g.setColour(Theme.FaderColor2);
    g.setFont(Theme.mediumFont, Theme.smallSize);
    g.drawAlignedText(obj.text, a, "centred");
    var h = a[3];
    
});

ComboLaf.registerFunction("drawPopupMenuBackground", function(g, obj)
{
    g.fillAll(Theme.MidColor);

});

ComboLaf.registerFunction("drawPopupMenuItem", function(g, obj)
{
    var a = obj.area;
    var h = a[3];
    
    if(obj.isSeparator)
    {
        g.setColour(Theme.TextColor);
        g.drawLine(a[0]+10, a[0] + a[2]-10, a[1] + a[3]/2, a[1] + a[3]/2, 1.0);
        return;
    }
    
    if(obj.isTicked)
    {
		g.setColour(Theme.TextColor);
		g.fillEllipse([a[0] + h/3, a[1] + h/3, h/3, h/3]);
    }
    
    if(obj.isHighlighted)
    {
        g.setColour(0x22FFFFFF);
        g.fillRect(obj.area);
    }
    
    g.setFont(Theme.mainFont, Theme.smallSize + 1);
    g.setColour(Theme.TextColor);
    g.drawAlignedText(obj.text, [a[0] + h, a[1], a[2] - h, a[3]], "left");
});

ReductionLaf.registerFunction("drawLinearSlider", function(g, obj)
{
	var a = obj.area;
	
	g.setColour(obj.bgColour);
	g.fillRoundedRectangle([a[0] + 2, a[1] + 2, a[2] - 4, a[3] - 4], 6);
	
	g.setColour(obj.textColour);
	g.drawRoundedRectangle([a[0] + 1, a[1] + 1, a[2] - 2, a[3] - 2], 7, 0.5);
	
	if (obj.style == 2)
	{
		g.setColour(obj.itemColour1);
		var w = 6;
		var x = a[2] * obj.valueNormalized - (w + 2) * obj.valueNormalized + 4;
		g.fillRoundedRectangle([x, 4, a[2], a[3] - 8], 2);
				
	}
	else if (obj.style == 3)
	{
		g.setColour(obj.itemColour1);
		var h = 6;
		var y = - a[3] * obj.valueNormalized - (h + 2) + (h + 4) * obj.valueNormalized;
		g.fillRoundedRectangle([4, y, a[2] - 8, a[3]], 2);
	}
	
});

laf.registerFunction("drawNumberTag", function(g, obj)
{
    obj.area[0] += obj.area[2] - 16;
    obj.area[1] += 2;
    obj.area[2] = 14;
    obj.area[3] = 14;
    
    g.drawDropShadow(obj.area, Colours.withAlpha(Colours.cyan, 0.3), 3);
    
    
    g.setColour(Theme.TextColor);
    g.drawEllipse(obj.area, 1);
    
    var letters = ["X", "Y"];
    
    g.setFont(Theme.mainFont, Theme.fontSize);
    g.drawAlignedText(letters[obj.macroIndex], obj.area, "centred");
});

//waveform

laf.registerFunction("drawThumbnailBackground", function(g, obj)
{
	 
});

laf.registerFunction("drawThumbnailRange", function(g, obj)
{
	 
});

laf.registerFunction("drawThumbnailRuler", function(g, obj)
{

});

laf.registerFunction("drawThumbnailPath", function(g, obj) {
   
    var a = obj.area;
	g.setGradientFill([Theme.MainColor, a[0], a[1], Theme.SecondColor, a[1], a[3]]);
	g.fillPath(obj.path, obj.area);

});

//FUNCTIONS

inline function loadExpansionIcon(obj)
{
	local expHandler = Engine.createExpansionHandler();
	
	for (e in expHandler.getExpansionList())
	{
		local img = e.getWildcardReference("Icon.png");
		
		if (isDefined(img))
		{
			obj.loadImage(img, e.getProperties().Name);
		}
	}
}

}

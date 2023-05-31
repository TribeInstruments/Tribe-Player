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

//MasterVuMeter-------------------------------------------------------

namespace VuMeter
{

	inline function createVuMeter(name, x, y)
	{
		local widget = Content.addPanel(name, x, y);
    
		Content.setPropertiesFromJSON(name, {
		"width": 150,
		"height": 150,
		"saveInPreset": false,
		"opaque": 0,
		"borderRadius": 1.0,
		"borderSize": 1.0
		});
    	
		widget.setPaintRoutine(function(g)
		{
			g.rotate(Math.PI / 2.0, [this.getWidth()/2, this.getHeight()/2]);

			g.fillAll(this.get("bgColour"));
			
			//g.setColour(this.get("itemColour"));
			g.setGradientFill([Theme.MeterColor, 50, 50, Theme.MeterColor2, 10, 30]);
    	
			var lsize = parseInt(this.data.lvalue * (this.getWidth()*1.5));
			var rsize = parseInt(this.data.rvalue * (this.getWidth()*1.5));
    	
			g.fillRect([2, this.getWidth() - lsize - 2, (this.getWidth()-4)/2-1, lsize]);
			g.fillRect([2 + this.getWidth() / 2 - 1, this.getWidth() - rsize - 2, (this.getWidth()-4)/2-1, rsize]);
    	
		});
    
		widget.setTimerCallback(function()
		{
			var lvalue;
			var rvalue;
			
			if(this.data.fx)
			{
				lvalue = getNormalizedPeakValue(this.data.fx.getCurrentLevel(1));
				rvalue = getNormalizedPeakValue(this.data.fx.getCurrentLevel(0));
			}
			else
			{
				lvalue = getNormalizedPeakValue(Engine.getMasterPeakLevel(1));
				rvalue = getNormalizedPeakValue(Engine.getMasterPeakLevel(0));
			}
			
			
    	
			this.data.lvalue = Math.max(lvalue, this.data.lvalue - 0.04);
			this.data.rvalue = Math.max(rvalue, this.data.rvalue - 0.04);
    	
			this.repaintImmediately();
		});
    
		widget.startTimer(60);
		return widget;
	};

	inline function setModule(vuMeter, module)
	{
		vuMeter.data.fx = module;
	}
	
	inline function getNormalizedPeakValue(gain)
	{
		return 0.01 * (100.0 + Engine.getDecibelsForGainFactor(gain));
	}
}

const var masterMeter = VuMeter.createVuMeter("masterMeter", 7, 5);
masterMeter.set("height", 10);
masterMeter.set("width", 96);
VuMeter.setModule(masterMeter, Synth.getEffect("MasterLevel"));

//Channel Meters

namespace ChMeter
{
	/** Creates a peak meter.
	*
	*	Usage: Give it a reference to a module (either synth or effect).
	*
	*	It looks best using a width and height with multiple of 4.
	*	Customize the colours using the scriptPanel colour Ids
	*/
	inline function createChMeter(name, x, y)
	{
		local widget = Content.addPanel(name, x, y);
    
		Content.setPropertiesFromJSON(name, {
		"width": 14,
		"height": 148,
		//"itemColour": 3868000511,     
		//"itemColour2": 4281860193,
		//"bgColour": 0xFF00000,
		//"textColour": 4283782485,
		"saveInPreset": false,
		"opaque": 0,
		"borderRadius": 13.0,
		"borderSize": 7.0
		});
    	
		widget.setPaintRoutine(function(g)
		{
			g.fillAll(this.get("bgColour"));
			
			//g.setColour(this.get("itemColour"));
			g.setGradientFill([Theme.MeterColor, 10, 80, Theme.MeterColor2, 10, 10]);
    	
			var lsize = parseInt(this.data.lvalue * (this.getHeight()-4));
			var rsize = parseInt(this.data.rvalue * (this.getHeight()-4));
    	
			g.fillRect([2, this.getHeight() - lsize - 2, (this.getWidth()-4)/2-1, lsize]);
			g.fillRect([2 + this.getWidth() / 2 - 1, this.getHeight() - rsize - 2, (this.getWidth()-4)/2-1, rsize]);
    	
			g.setColour(this.get("itemColour2"));
    	
			for(i = 1; i < this.getHeight()-1; i = i + 3)
			{
				g.fillRect([1, i, this.getWidth()-2, 1]);
			}
		});
    
		widget.setTimerCallback(function()
		{
			var lvalue;
			var rvalue;
			
			if(this.data.fx)
			{
				lvalue = getNormalizedPeakValue(this.data.fx.getCurrentLevel(1));
				rvalue = getNormalizedPeakValue(this.data.fx.getCurrentLevel(0));
			}
			else
			{
				lvalue = getNormalizedPeakValue(Engine.getMasterPeakLevel(1));
				rvalue = getNormalizedPeakValue(Engine.getMasterPeakLevel(0));
			}
			
			
    	
			this.data.lvalue = Math.max(lvalue, this.data.lvalue - 0.04);
			this.data.rvalue = Math.max(rvalue, this.data.rvalue - 0.04);
    	
			this.repaintImmediately();
		});
    
		widget.startTimer(60);
		
		return widget;
	};

	inline function setModule(chMeter, module)
	{
		chMeter.data.fx = module;
	}
	
	inline function getNormalizedPeakValue(gain)
	{
		return 0.01 * (100.0 + Engine.getDecibelsForGainFactor(gain));
	}
}

const var ChMeter1 = ChMeter.createChMeter("ChMeter1", 42, 105);
ChMeter1.set("height", 95);
ChMeter.setModule(ChMeter1, Synth.getEffect("Ch0"));

const var ChMeter2 = ChMeter.createChMeter("ChMeter2", 79, 105);
ChMeter2.set("height", 95);
ChMeter.setModule(ChMeter2, Synth.getEffect("Ch1"));

const var ChMeter3 = ChMeter.createChMeter("ChMeter3", 117, 105);
ChMeter3.set("height", 95);
ChMeter.setModule(ChMeter3, Synth.getEffect("Ch2"));

const var ChMeter4 = ChMeter.createChMeter("ChMeter4", 155, 105);
ChMeter4.set("height", 95);
ChMeter.setModule(ChMeter4, Synth.getEffect("Ch3"));

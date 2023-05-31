Content.makeFrontInterface(960, 540);

Synth.deferCallbacks(true);

Engine.loadAudioFilesIntoPool();

const var ParametriqEQ = Synth.getEffect("Parametriq EQ");

Engine.addModuleStateToUserPreset("Parametriq EQ");

Content.setUseHighResolutionForPanels(true);

//Includes-------------------------------------------------------------------

include ("Theme.js");
include ("Paths.js");
include ("LAF.js");
include ("GUI.js");
include ("Filters.js");
include ("Controls.js");
include ("Expansions.js");
include ("Meters.js");
include ("ZoomHandler.js");
include ("Paint.js");
//include ("XYPad.js");


//Definitions----------------------------------------------------------------

//UserAccount.LoginPanel.showControl(true);

//XYPad Definitions

const var XYPanel = Content.getComponent("XYPanel");

const var XYKnob = [];
const var MacroCC = [];

const var macroKnob = [Content.getComponent("macroKnob0"),
                        Content.getComponent("macroKnob1")];

const SIZE = 18;

for (i = 0; i < 2; i++)
{
	XYKnob[i] = Content.getComponent("XYKnob" + i);
	XYKnob[i].setControlCallback(onXYKnobControl);

}


//XY Pad Control Callback

XYPanel.setControlCallback(onXYPanelControl);

inline function onXYPanelControl(component, value)
{
	local x = component.data.x;
	local y = component.data.y;
	
	macroKnob[0].setValue(127 * x);
	macroKnob[0].changed();
	
	macroKnob[1].setValue(127 - 127 * y);
	macroKnob[1].changed();
	
	XYKnob[0].setValue(x);
	XYKnob[1].setValue(1 - y);
	
	component.repaint();

	//Console.print(component.data.x + " : " + component.data.y);
}

//XY Pad Paint Routine

XYPanel.loadImage("{PROJECT_FOLDER}XYPadBg.png", "XYPadBg");

XYPanel.setPaintRoutine(function(g)
{
	var a = this.getLocalBounds(0);

	var gradient = [Colours.withAlpha(Theme.MainColor, 0.6), 0, this.getHeight() / 2, Theme.DarkColor, 0, this.getHeight() / 1];
	
	var gradient2 = [Theme.DarkColor, 0, 0, Colours.withAlpha(Theme.MainColor, 0.6), this.getWidth(), 0];
	
	var gradient3 = [Colours.withAlpha(Theme.BrightColor, 0.1), 0, 0, Colours.withAlpha(Colours.black, 0.1), 0, this.getHeight() / 1.1];
	
	g.drawImage("XYPadBg", a, 0, 0);
	
	/*g.setColour(this.get("bgColour"));
	g.fillRoundedRectangle(this.getLocalBounds(2), 10);
	
	g.drawDropShadow(this.getLocalBounds(10), 0xFF0C1016, 20);
	
	
	g.setGradientFill(gradient3);
	g.drawRoundedRectangle(this.getLocalBounds(1), 10, 1);*/
	
	//var x = Math.range(this.data.x * this.getWidth(), 0, this.getWidth() - SIZE);
	//var y = Math.range(this.data.y * this.getHeight(), 0, this.getHeight() - SIZE);
	
	var x = Math.range(XYKnob[0].getValue() * this.getWidth(), 0, this.getWidth() - SIZE);
	var y = Math.range((1 - XYKnob[1].getValue()) * this.getHeight(), 0, this.getHeight() - SIZE);
	
	//XYKnob[0].setValue(x);
	//XYKnob[1].setValue(1 - y);
	
	//g.setColour(this.get("itemColour2"));
	g.setGradientFill(gradient2);
	g.drawLine(x + (SIZE / 2), x + (SIZE / 2), 4, this.getHeight() - 5, 1.5);
	
	
	//g.setColour(this.get("itemColour2"));
	g.setGradientFill(gradient);
	g.drawLine(4, this.getWidth() - 5, y + (SIZE / 2), y + (SIZE / 2), 1.5);
	
	g.setColour(Theme.SecondColor);
	//g.fillEllipse([x, y, SIZE, SIZE]);
	g.drawEllipse([x + 3, y + 3, SIZE - 6, SIZE - 6], 3);

});

//Mouse Control

XYPanel.setMouseCallback(function(event)
{
	if (event.clicked || event.drag)
	{
		this.data.x = Math.range(event.x / this.getWidth(), 0, 1);
		this.data.y = Math.range(event.y / this.getHeight(), 0, 1);
		
		this.set("itemColour", 0xFFE3FC0C);
		
		this.changed();
	}

});

//Control Pad with Knobs

inline function onXYKnobControl(component, value)
{
	XYPanel.data.x = XYKnob[0].getValue();
	XYPanel.data.y = 1 - XYKnob[1].getValue();
	
	XYPanel.changed();
	
};

//Sampler
const var TRIBEPlayer = Synth.getChildSynth("TRIBE Player");
const var Matrix = Synth.getRoutingMatrix("TRIBE Player");
const var Sampler1 = Synth.getChildSynth("Sampler1");
const var Sampler2 = Synth.getChildSynth("Sampler2");
const var Sampler3 = Synth.getChildSynth("Sampler3");
const var Sampler4 = Synth.getChildSynth("Sampler4");
const var AsSampler1 = Synth.getSampler("Sampler1");
const var AsSampler2 = Synth.getSampler("Sampler2");
const var AsSampler3 = Synth.getSampler("Sampler3");
const var AsSampler4 = Synth.getSampler("Sampler4");
const var AsTable1 = Synth.getTableProcessor("Sampler1");
const var AsTable2 = Synth.getTableProcessor("Sampler2");

//Main Functions
AsSampler1.setUseStaticMatrix(true);
AsSampler2.setUseStaticMatrix(true);
AsSampler3.setUseStaticMatrix(true);
AsSampler4.setUseStaticMatrix(true);

const var configPanel0 = Content.getComponent("configPanel0");
const var configButton0 = Content.getComponent("configButton0");
const var midiDevicesPanel = Content.getComponent("midiDevicesPanel");

if (Engine.isPlugin() == 1)
{
	configPanel0.showControl(false);
	configButton0.showControl(false);
	midiDevicesPanel.showControl(false);
}
else
{
	configPanel0.showControl(true);
	configButton0.showControl(true);
	midiDevicesPanel.showControl(true);

}

//Keyboard-----------------------------------------------------------------

const var KeyboardFunctionPanel = Content.getComponent("KeyboardFunctionPanel");

KeyboardFunctionPanel.setLoadingCallback(function(isPreloading)
{
	if(!isPreloading)
	for (i = 0; i < 127; i++)
	{

	Engine.setKeyColour(i, Colours.withAlpha(Colours.antiquewhite, 0.15));
	
	if (Sampler2.asSampler().isNoteNumberMapped(i))
	Engine.setKeyColour(i, Colours.withAlpha(Theme.SamplerColorB, 0.4));
	                   	    
	if (Sampler1.asSampler().isNoteNumberMapped(i))
	Engine.setKeyColour(i, Colours.withAlpha(Theme.SamplerColorA, 0.4));
	
	}  
});

reg i;

for (i = 0; i < 127; i++)
{
	Engine.setKeyColour(i, Colours.withAlpha(Colours.antiquewhite, 0.15));
	
	if (Sampler2.asSampler().isNoteNumberMapped(i))
	Engine.setKeyColour(i, Colours.withAlpha(Theme.SamplerColorB, 0.4));
	                   	    
	if (Sampler1.asSampler().isNoteNumberMapped(i))
	Engine.setKeyColour(i, Colours.withAlpha(Theme.SamplerColorA, 0.4));

}



//Loading-------------------------------------------------------------------

const var loadingPanel = Content.getComponent("loadingPanel");
const var loadingPanel1 = Content.getComponent("loadingPanel1");
const var percentagePanel = Content.getComponent("percentagePanel");

loadingPanel.showControl(false);

loadingPanel.setLoadingCallback(function(isLoading)
{
	if(isLoading)
	{
		loadingPanel.setValue(0);
		loadingPanel.startTimer(100);
		percentagePanel.startTimer(100);
		loadingPanel.showControl(true);
		loadingPanel1.showControl(true);
		percentagePanel.showControl(true);
	}

	if(!isLoading)
	{
		loadingPanel.stopTimer();
		loadingPanel.showControl(false);
		loadingPanel1.showControl(false);
		
		percentagePanel.stopTimer();
		percentagePanel.showControl(false);
		
	}

});


reg angle = 360;
reg speed = 30;

loadingPanel.setTimerCallback(function()
{
	var x = this.getValue();
	x = x + 0.1;
	this.setValue(x);	
	angle = (angle + speed) % 360;
	this.repaint();
});

loadingPanel.setPaintRoutine(function(g)
{
	var a = [5, 5, this.getWidth() - 10, this.getHeight() - 10];
		
	var v = this.getValue();
	
	g.rotate(Math.toRadians(angle), [this.get("width")/2, this.get("height")/2]);
	g.drawDropShadowFromPath(Paths.icons.logoicon, a, 0x88000000, 5, [0, 0]);
	g.setColour(Colours.whitesmoke);
	g.setOpacity(0.8);
	g.fillPath(Paths.icons.logoicon, a);
	
});

//Percentage Show

percentagePanel.setPaintRoutine(function(g)
{
	g.setColour(Colours.whitesmoke);
	g.setFont(Theme.mediumFont, Theme.fontSize);
	g.drawAlignedText(Math.round(this.data.progress * 100) + " %", this.getLocalBounds(2), "topLeft");
	g.drawAlignedText(this.data.message, this.getLocalBounds(2), "bottomLeft");
	
});

percentagePanel.setTimerCallback(function()
{
	this.data.progress = Engine.getPreloadProgress();
	this.data.message = Engine.getPreloadMessage();
	this.repaint();
});


 

//Show Version--------------------------------------------------------------------------

const var versionLabel = Content.getComponent("versionLabel");
versionLabel.set("text", "VERSION  " + Engine.getVersion());
function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{

	if (Message.getControllerNumber() == 1)
	{
		WheelVelSlider.setValue(Message.getControllerValue());
		wheelSlider.setValue(Message.getControllerValue());
	}
	
	
}
 
function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 
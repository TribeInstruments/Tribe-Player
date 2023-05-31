namespace XYPad
{
/*	
//Get References

/*const var XYPanel = Content.getComponent("XYPanel");

const var XYKnob = [];
const var MacroCC = [];

const var macroKnob = [Content.getComponent("macroKnob0"),
                        Content.getComponent("macroKnob1")];

const SIZE = 15;

for (i = 0; i < 2; i++)
{
	XYKnob[i] = Content.getComponent("XYKnob" + i);
	XYKnob[i].setControlCallback(onXYKnobControl);
	
	MacroCC[i] = Synth.getModulator("MacroCC" + i);

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

	Console.print(component.data.x + " : " + component.data.y);
}

//XY Pad Paint Routine

XYPanel.setPaintRoutine(function(g)
{
	var a = this.getLocalBounds(0);
	
	g.fillAll(this.get("bgColour"));
	
	//var x = Math.range(this.data.x * this.getWidth(), 0, this.getWidth() - SIZE);
	//var y = Math.range(this.data.y * this.getHeight(), 0, this.getHeight() - SIZE);
	
	var x = Math.range(XYKnob[0].getValue() * this.getWidth(), 0, this.getWidth() - SIZE);
	var y = Math.range((1 - XYKnob[1].getValue()) * this.getHeight(), 0, this.getHeight() - SIZE);
	
	//XYKnob[0].setValue(x);
	//XYKnob[1].setValue(1 - y);
	
	g.setColour(this.get("itemColour2"));
	g.drawLine(x + (SIZE / 2), x + (SIZE / 2), 0, this.getHeight(), 2);
	
	g.setColour(this.get("itemColour2"));
	g.drawLine(0, this.getWidth(), y + (SIZE / 2), y + (SIZE / 2), 2);
	
	g.setColour(this.get("itemColour"));
	//g.fillEllipse([x, y, SIZE, SIZE]);
	g.drawEllipse([x, y, SIZE, SIZE], 3);

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
*/
}
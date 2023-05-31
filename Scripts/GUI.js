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

//GUI

//Definitions
const var footerLogo = Content.getComponent("footerLogo");
const var ZoomCombo = Content.getComponent("ZoomCombo");
const var BypassButton = Content.getComponent("BypassButton");

//BypassButton.repaint();

const FADE = 100;

//Label Management

const var crossfadeLabels = [Content.getComponent("crossfadeLabel0"),
                             Content.getComponent("crossfadeLabel1")];

for (i = 0; i < 2; i++)
	crossfadeLabels[i].set("fontSize", Theme.smallSize);
	
const var performanceTile = Content.getComponent("performanceTile");
performanceTile.set("FontSize", Theme.controlSize);
performanceTile.set("Font", Theme.regularFont);

const var presetBrowserTile = Content.getComponent("presetBrowserTile");
presetBrowserTile.set("FontSize", Theme.fontSize);
presetBrowserTile.set("Font", Theme.boldFont);


//Set Font Size of Macro Controls

const var macroLabels = Content.getAllComponents("macroLabel");

for (i = 0; i < macroLabels.length; i++)
{
	//macroLabels[i].set("fontSize", Theme.fontSize);
	//macroLabels[i].set("fontName", Theme.boldFont);
	macroLabels[i].set("textColour", Theme.TextColor);
}

//Set Font Size of Sampler Options Controls

const var samplerLabels = Content.getAllComponents("samplerControlLabel");

for (i = 0; i < samplerLabels.length; i++)
{
	samplerLabels[i].set("fontSize", Theme.controlSize + 1);
	samplerLabels[i].set("fontName", Theme.mediumFont);
	samplerLabels[i].set("textColour", Theme.TextColor);
}
	
//Set Font Size of FX Controls

const var fxLabels = Content.getAllComponents("fxlabel");

for (i = 0; i < fxLabels.length; i++)
{
	fxLabels[i].set("fontSize", Theme.controlSize + 1);
	fxLabels[i].set("fontName", Theme.mediumFont);
	fxLabels[i].set("textColour", Theme.TextColor);
}

//Set Font Size of Arpeggiator Controls

const var arpLabels = Content.getAllComponents("arpLabel");

for (i = 0; i < arpLabels.length; i++)
{
	arpLabels[i].set("fontSize", Theme.controlSize + 1);
	arpLabels[i].set("fontName", Theme.mediumFont);
	arpLabels[i].set("textColour", Theme.TextColor);
}

//Set Font Size of Sidebar Controls

const var sidebarLabels = Content.getAllComponents("sidebarLabel");

for (i = 0; i < sidebarLabels.length; i++)
{
	sidebarLabels[i].set("fontSize", Theme.controlSize + 1);
	sidebarLabels[i].set("textColour", Theme.TextColor);
	//sidebarLabels[i].set("fontName", Theme.mediumFont);
}

const var configLabels = Content.getAllComponents("configLabel");

for (i = 0; i < configLabels.length; i++)
{
	configLabels[i].set("fontSize", Theme.fontSize);
	configLabels[i].set("textColour", Theme.TextColor);
}

//Zoom---------------------------------------------------------------

//ZoomLevels

const var zoomLevels = [0.5, 0.75, 1.0, 1.2, 1.5, 1.75, 2.0];

inline function onZoomComboControl(component, value)
{
	Settings.setZoomLevel(zoomLevels[value - 1]);
};

Content.getComponent("ZoomCombo").setControlCallback(onZoomComboControl);

//Header


for (i = 0; i < 7; i++)
	Content.getComponent("ArpSliderPack" + i).setLocalLookAndFeel(SliderLaf);


for (i = 0; i < 4; i++)
	Content.getComponent("RoutingCombo" + i).setLocalLookAndFeel(LAF.ComboLaf);



//GUI Tabs-------------------------------------------------------------------------

//CHANGE TABS
//Grab References

const var NUM_TABS = 5;
const var panels = [];
const var buttons = [];

for (i = 0; i < NUM_TABS; i++)
{
    panels[i] = Content.getComponent("GUIPanel"+(i));
    buttons[i] = Content.getComponent("GUIButton"+(i));
    buttons[i].setControlCallback(changeTab);
}

//Tab Button Callback function
inline function changeTab(component, value)
{	
	if (value)
	{
	
	local idx = buttons.indexOf(component);

	for (i = 0; i < panels.length; i++)
		{
			panels[i].fadeComponent(false, FADE);
		}
		
 	panels[idx].fadeComponent(true, FADE);
        
    }
}

//Sidebar
const var NUM_SIDEBARS = 6;
const var sidebars = [];
const var sidebarButtons = [];

for (i = 0; i < NUM_SIDEBARS; i++)
{
    sidebars[i] = Content.getComponent("sideBarPanel"+(i));
    sidebarButtons[i] = Content.getComponent("sideBarButton"+(i));
    sidebarButtons[i].setControlCallback(changeSideBar);
}

//Tab Button Callback function
inline function changeSideBar(component, value)
{	
	if (value)
	{
	
	local idx = sidebarButtons.indexOf(component);

	for (i = 0; i < sidebars.length; i++)
		{
			sidebars[i].fadeComponent(false, FADE);
		}
		
 	sidebars[idx].fadeComponent(true, FADE);
        
    }
}

//InfoTab
const var QuestionPanel = Content.getComponent("QuestionPanel");

inline function onInfoButtonControl(component, value)
{
	QuestionPanel.fadeComponent(value, FADE);
};

Content.getComponent("InfoButton").setControlCallback(onInfoButtonControl);

//Config Tabs

const var configPanels = [];
const var configButtons = [];

for (i = 0; i < 4; i++)
{
    configPanels[i] = Content.getComponent("configPanel"+(i));
    configButtons[i] = Content.getComponent("configButton"+(i));
    configButtons[i].setControlCallback(changeConfigTab);
}

//Tab Button Callback function
inline function changeConfigTab(component, value)
{	
	if (value)
	{
	
	local idx = configButtons.indexOf(component);

	for (i = 0; i < configPanels.length; i++)
		{
			configPanels[i].fadeComponent(false, FADE);
		}
		
 	configPanels[idx].fadeComponent(true, FADE);
        
    }
}


const var ConfigPanel = Content.getComponent("ConfigPanel");

inline function onConfigButtonControl(component, value)
{
	ConfigPanel.fadeComponent(value, FADE);
};

Content.getComponent("ConfigButton").setControlCallback(onConfigButtonControl);

//Add Library

inline function onshowInstallerButtonControl(component, value)
{
	if(!value)
	return;

	Engine.showMessageBox("Add new library", "Please use the TRIBE MANAGER APP to download and install your libraries", 1);
	
};

Content.getComponent("showInstallerButton").setControlCallback(onshowInstallerButtonControl);

//ModPanel

const var modPanel = Content.getComponent("modPanel");


inline function onshowModPanelButtonControl(component, value)
{
	modPanel.fadeComponent(value, FADE);
};

Content.getComponent("showModPanelButton").setControlCallback(onshowModPanelButtonControl);

//MidiCC Panel

const var midiCCPanel = Content.getComponent("midiCCPanel");

inline function onshowMidiCCControl(component, value)
{
	midiCCPanel.fadeComponent(value, FADE);
};

Content.getComponent("showMidiCC").setControlCallback(onshowMidiCCControl);

//MPE Panel

const var mpePanel = Content.getComponent("mpePanel");

inline function onshowMPEControl(component, value)
{
	mpePanel.fadeComponent(value, FADE);
};

Content.getComponent("showMPE").setControlCallback(onshowMPEControl);



//Mic Mod Panel

const var micModPanel = Content.getComponent("micModPanel");

inline function onshowModPanelButton1Control(component, value)
{
	micModPanel.fadeComponent(value, FADE);
};

Content.getComponent("showModPanelButton1").setControlCallback(onshowModPanelButton1Control);

//Pan Mod Panel

const var panModPanel = Content.getComponent("panModPanel");

inline function onshowPanModsButtonControl(component, value)
{
	panModPanel.fadeComponent(value, FADE);
};

Content.getComponent("showPanModsButton").setControlCallback(onshowPanModsButtonControl);

//Velocity Panel

const var velocityPanel = Content.getComponent("velocityPanel");

inline function onvelFaderButtonControl(component, value)
{
	velocityPanel.fadeComponent(value, FADE);
};

Content.getComponent("velFaderButton").setControlCallback(onvelFaderButtonControl);

//Crossfade Panel

const var crossfadePanel = Content.getComponent("crossfadePanel");

inline function oncrossfadeButtonControl(component, value)
{
	crossfadePanel.fadeComponent(value, FADE);
};

Content.getComponent("crossfadeButton").setControlCallback(oncrossfadeButtonControl);





//Filter Envelope Panels

const var filterEnvelopePanel1 = Content.getComponent("filterEnvelopePanel1");
const var filterEnvelopePanel2 = Content.getComponent("filterEnvelopePanel2");


inline function onshowFilterEnv1Control(component, value)
{
	filterEnvelopePanel1.fadeComponent(value, FADE);
};

Content.getComponent("showFilterEnv1").setControlCallback(onshowFilterEnv1Control);


inline function onshowFilterEnv2Control(component, value)
{
	filterEnvelopePanel2.fadeComponent(value, FADE);
};

Content.getComponent("showFilterEnv2").setControlCallback(onshowFilterEnv2Control);

//Show Macro Contros

const var macroControlsPanel = Content.getComponent("macroControlsPanel");

inline function onshowMacroControlsControl(component, value)
{
	macroControlsPanel.fadeComponent(value, FADE);
};

Content.getComponent("showMacroControls").setControlCallback(onshowMacroControlsControl);



//PlayButtons

const var GlideTimeKnob = Content.getComponent("GlideTimeKnob");
const var Legato = Synth.getMidiProcessor("Legato");
const var killHangingButton = Content.getComponent("killHangingButton");
const var Glide = Synth.getMidiProcessor("Glide");

inline function onPlayButton0Control(component, value)
{
	if(value)
	{
		GlideTimeKnob.fadeComponent(1-value, FADE);
		killHangingButton.fadeComponent(1-value, FADE);
		Legato.setBypassed(value);
		Glide.setAttribute(Glide.Bypass, value);
	}

};

Content.getComponent("PlayButton0").setControlCallback(onPlayButton0Control);

inline function onPlayButton1Control(component, value)
{
	if(value)
	{
		GlideTimeKnob.fadeComponent(1-value, FADE);
		killHangingButton.fadeComponent(1-value, FADE);
		Legato.setBypassed(1-value);
		Glide.setAttribute(Glide.Bypass, value);		
	}
};

Content.getComponent("PlayButton1").setControlCallback(onPlayButton1Control);

inline function onPlayButton2Control(component, value)
{
	if(value)
	{
		GlideTimeKnob.fadeComponent(value, FADE);
		killHangingButton.fadeComponent(value, FADE);
		Legato.setBypassed(value);
		Glide.setAttribute(Glide.Bypass, 1-value);
	}
};

Content.getComponent("PlayButton2").setControlCallback(onPlayButton2Control);

//Play B

const var GlideTimeKnobB = Content.getComponent("GlideTimeKnobB");
const var Legato2 = Synth.getMidiProcessor("Legato2");
const var killHangingButtonB = Content.getComponent("killHangingButtonB");
const var Glide2 = Synth.getMidiProcessor("Glide2");


inline function onPlayButtonB0Control(component, value)
{
	if(value)
	{
		GlideTimeKnobB.fadeComponent(1-value, FADE);
		killHangingButtonB.fadeComponent(1-value, FADE);
		Legato2.setBypassed(value);
		Glide2.setAttribute(Glide2.Bypass, value);
	}
};

Content.getComponent("PlayButtonB0").setControlCallback(onPlayButtonB0Control);

inline function onPlayButtonB1Control(component, value)
{
	if(value)
	{
		GlideTimeKnobB.fadeComponent(1-value, FADE);
		killHangingButtonB.fadeComponent(1-value, FADE);
		Legato2.setBypassed(1-value);
		Glide2.setAttribute(Glide2.Bypass, value);		
	}
};

Content.getComponent("PlayButtonB1").setControlCallback(onPlayButtonB1Control);

inline function onPlayButtonB2Control(component, value)
{
	if(value)
	{
		GlideTimeKnobB.fadeComponent(value, FADE);
		killHangingButtonB.fadeComponent(value, FADE);
		Legato2.setBypassed(value);
		Glide2.setAttribute(Glide.Bypass, 1-value);
	}
};

Content.getComponent("PlayButtonB2").setControlCallback(onPlayButtonB2Control);




//Tooltip--------------------------------------------------------------------------

namespace ToolTip
{
	const var toolTipPanel = Content.getComponent("toolTipPanel");
	
	toolTipPanel.setPaintRoutine(function(g)
	{
		var t = Content.getCurrentTooltip();
		
		g.setColour(this.get("textColour"));
		g.setFont(Theme.regularFont, Theme.fontSize);
		g.drawAlignedText(t, [0, 0, this.getWidth(), this.getHeight()], "left");
	});
	
	toolTipPanel.setTimerCallback(function()
	{
		this.repaint();
	});
	
	toolTipPanel.startTimer(250);

}

//
inline function onfindButtonControl(component, value)
{
	Engine.openWebsite("https://tribeinstruments.com/products");
};

Content.getComponent("findButton").setControlCallback(onfindButtonControl);

inline function onScriptButton2Control(component, value)
{
	Engine.openWebsite("https://tribeinstruments.com/");
};

Content.getComponent("ScriptButton2").setControlCallback(onScriptButton2Control);

inline function onScriptButton3Control(component, value)
{
	Engine.openWebsite("https://tribeinstruments.com/tribeplayermanual");
};

Content.getComponent("ScriptButton3").setControlCallback(onScriptButton3Control);


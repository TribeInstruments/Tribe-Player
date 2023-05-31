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

//Linkers------------------------------------------------------------------

//Envelope Link

const var Envelope1 = Synth.getModulator("Envelope1");
const var Envelope2 = Synth.getModulator("Envelope2");
const var GlobalEnvelope1 = Synth.getModulator("GlobalEnvelope1");
const var GlobalEnvelope2 = Synth.getModulator("GlobalEnvelope2");
const var GlobalEnvelopePanel = Content.getComponent("GlobalEnvelopePanel");
const var BlockGlobalEnvelopePanel = Content.getComponent("BlockGlobalEnvelopePanel");
const var EnvelopePanels = [Content.getComponent("EnvelopePanel2"),
                            Content.getComponent("EnvelopePanel1")];
                                                       
const var MacroEnvelopeControls = [Content.getComponent("macroAttackKnob"),
                                   Content.getComponent("macroHoldKnob"),
                                   Content.getComponent("macroDecay"),
                                   Content.getComponent("macroSustain"),
                                   Content.getComponent("macroRelease")];

const var EnvelopeLink = Content.getComponent("EnvelopeLink");

inline function onEnvelopeLinkControl(component, value)
{
	EnvelopePanels[0].fadeComponent(1-value, 80);
	EnvelopePanels[1].fadeComponent(1-value, 80);
		
	GlobalEnvelopePanel.fadeComponent(value, 80);
	BlockGlobalEnvelopePanel.fadeComponent(1-value, 80);
	
	Envelope1.setBypassed(value);
	Envelope2.setBypassed(value);
	GlobalEnvelope1.setBypassed(1-value);
	GlobalEnvelope2.setBypassed(1-value);
	
	for(i = 0; i < 5; i++)
	{
		MacroEnvelopeControls[i].set("enabled", value);
	}
	
	if (value == 0)
	{
		EnvelopeLink.set("y", 178);
		EnvelopeLink.set("text", "icon-link");
	}
	else if (value == 1)
	{
		EnvelopeLink.set("y", 85);
		EnvelopeLink.set("text", "icon-unlink");
	}
	
};

Content.getComponent("EnvelopeLink").setControlCallback(onEnvelopeLinkControl);

//Velocity Link

const var SamplerVel1 = Synth.getModulator("SamplerVel1");
const var SamplerVel2 = Synth.getModulator("SamplerVel2");
const var VelocityModulator1 = Synth.getModulator("VelocityModulator1");
const var VelocityModulator2 = Synth.getModulator("VelocityModulator2");
const var GlobalVelocityPanel = Content.getComponent("GlobalVelocityPanel");
const var VelLFOModulator1 = Synth.getModulator("VelLFOModulator1");
const var VelLFOModulator2 = Synth.getModulator("VelLFOModulator2");
const var GlobalVelLFO1 = Synth.getModulator("GlobalVelLFO1");
const var GlobalVelLFO2 = Synth.getModulator("GlobalVelLFO2");
const var VelTableModulator1 = Synth.getModulator("VelTableModulator1");
const var VelTableModulator2 = Synth.getModulator("VelTableModulator2");
const var GlobalVelTable1 = Synth.getModulator("GlobalVelTable1");
const var GlobalVelTable2 = Synth.getModulator("GlobalVelTable2");
const var VelocityPanels = [Content.getComponent("VelocityPanel2"),
                            Content.getComponent("VelocityPanel1")];

const var VelocityLink = Content.getComponent("VelocityLink");

inline function onVelocityLinkControl(component, value)
{
	VelocityPanels[0].fadeComponent(1-value, 80);
	VelocityPanels[1].fadeComponent(1-value, 80);
	GlobalVelocityPanel.fadeComponent(value, 80);
	
	SamplerVel1.setBypassed(value);
	SamplerVel2.setBypassed(value);
	VelocityModulator1.setBypassed(1-value);
	VelocityModulator2.setBypassed(1-value);
	
	VelLFOModulator1.setBypassed(value);
	VelLFOModulator2.setBypassed(value);
	GlobalVelLFO1.setBypassed(1-value);
	GlobalVelLFO2.setBypassed(1-value);
	
	VelTableModulator1.setBypassed(value);
	VelTableModulator2.setBypassed(value);
	GlobalVelTable1.setBypassed(1-value);
	GlobalVelTable2.setBypassed(1-value);
	
	if (value == 0)
	{
		VelocityLink.set("y", 178);
		VelocityLink.set("text", "icon-link");
	}
	else if (value == 1)
	{
		VelocityLink.set("y", 85);
		VelocityLink.set("text", "icon-unlink");
	}
};

Content.getComponent("VelocityLink").setControlCallback(onVelocityLinkControl);

//PitchLink

const var PitchLFOModulator1 = Synth.getModulator("PitchLFOModulator1");
const var PitchLFOModulator2 = Synth.getModulator("PitchLFOModulator2");
const var PitchTableModulator1 = Synth.getModulator("PitchTableModulator1");
const var PitchTableModulator2 = Synth.getModulator("PitchTableModulator2");
const var PitchWheelMod1 = Synth.getModulator("PitchWheelMod1");
const var PitchWheelMod2 = Synth.getModulator("PitchWheelMod2");
const var GlobalPitchWheel1 = Synth.getModulator("GlobalPitchWheel1");
const var GlobalPitchWheel2 = Synth.getModulator("GlobalPitchWheel2");
const var GlobalPitchLFO1 = Synth.getModulator("GlobalPitchLFO1");
const var GlobalPitchLFO2 = Synth.getModulator("GlobalPitchLFO2");
const var GlobalPitchTable1 = Synth.getModulator("GlobalPitchTable1");
const var GlobalPitchTable2 = Synth.getModulator("GlobalPitchTable2");
const var GlobalPitchPanel = Content.getComponent("GlobalPitchPanel");
const var PitchPanels = [Content.getComponent("PitchPanel1"),
                         Content.getComponent("PitchPanel2")];
                         
const var PitchLink = Content.getComponent("PitchLink");
                   
inline function onPitchLinkControl(component, value)
{
	PitchPanels[0].fadeComponent(1-value, 80);
	PitchPanels[1].fadeComponent(1-value, 80);
	GlobalPitchPanel.fadeComponent(value, 80);
	
	PitchLFOModulator1.setBypassed(value);
	PitchLFOModulator2.setBypassed(value);
	GlobalPitchLFO1.setBypassed(1-value);
	GlobalPitchLFO2.setBypassed(1-value);
	
	PitchTableModulator1.setBypassed(value);
	PitchTableModulator2.setBypassed(value);
	GlobalPitchTable1.setBypassed(1-value);
	GlobalPitchTable2.setBypassed(1-value);
	
	PitchWheelMod1.setBypassed(value);
	PitchWheelMod2.setBypassed(value);
	GlobalPitchWheel1.setBypassed(1-value);
	GlobalPitchWheel2.setBypassed(1-value);
	
	if (value == 0)
	{
		PitchLink.set("y", 178);
		PitchLink.set("text", "icon-link");
	}
	else if (value == 1)
	{
		PitchLink.set("y", 85);
		PitchLink.set("text", "icon-unlink");
	}
};

Content.getComponent("PitchLink").setControlCallback(onPitchLinkControl);
 
//FilterLink

const var Filter = Synth.getEffect("Filter");
const var SamplerFilter1 = Synth.getEffect("SamplerFilter1");
const var SamplerFilter2 = Synth.getEffect("SamplerFilter2");
const var GlobalFilterBlock = Content.getComponent("GlobalFilterBlock");
const var macroFilter = Content.getComponent("macroFilter");

const var FilterPanel = Content.getComponent("FilterPanel");
const var FilterPanel1 = Content.getComponent("FilterPanel1");
const var FilterPanel2 = Content.getComponent("FilterPanel2");

const var FilterLFOModulation = Synth.getModulator("FilterLFOModulation");
const var FilterTableModulation = Synth.getModulator("FilterTableModulation");
const var FilterLFOModulator1 = Synth.getModulator("FilterLFOModulator1");
const var FilterTableModulator1 = Synth.getModulator("FilterTableModulator1");
const var FilterLFOModulator2 = Synth.getModulator("FilterLFOModulator2");
const var FilterTableModulator2 = Synth.getModulator("FilterTableModulator2");
const var FilterEnvelope1 = Synth.getModulator("FilterEnvelope1");
const var FilterEnvelope2 = Synth.getModulator("FilterEnvelope2");

const var FilterLink = Content.getComponent("FilterLink");

inline function onFilterLinkControl(component, value)
{
	FilterPanel.fadeComponent(value, 80);
	FilterPanel1.fadeComponent(1-value, 80);
	FilterPanel2.fadeComponent(1-value, 80);
	GlobalFilterBlock.fadeComponent(1-value, 80);
	
	macroFilter.set("enabled", value);
	Filter.setBypassed(1-value);
	SamplerFilter1.setBypassed(value);
	SamplerFilter2.setBypassed(value);
	
	if (value == 0)
	{
		FilterLink.set("y", 178);
		FilterLink.set("text", "icon-link");
	}
	else if (value == 1)
	{
		FilterLink.set("y", 85);
		FilterLink.set("text", "icon-unlink");
	}
};

Content.getComponent("FilterLink").setControlCallback(onFilterLinkControl);

//Filter Controls

const var filterModes = Engine.getFilterModeList();

const var filters = [filterModes.StateVariableLP,
					 filterModes.StateVariableHP,
                     filterModes.StateVariableNotch,
                     filterModes.LadderFourPoleLP,
                     filterModes.LowPass,
                     filterModes.OnePoleLowPass,
                     filterModes.OnePoleHighPass,
                     filterModes.MoogLP,
                     filterModes.RingMod];

inline function onglobalFilterModeControl(component, value)
{
	local filterIndex = value - 1;
	Filter.setAttribute(Filter.Mode, filters[filterIndex]);
	
	if (value == 8)
	{
		FilterLFOModulation.setBypassed(true);
		FilterTableModulation.setBypassed(true);
	}
	else
	{
		FilterLFOModulation.setBypassed(false);
		FilterTableModulation.setBypassed(false);
	}
	
};

Content.getComponent("globalFilterMode").setControlCallback(onglobalFilterModeControl);


inline function onsamplerFilterMode1Control(component, value)
{
	local filterIndex = value - 1;
	SamplerFilter1.setAttribute(SamplerFilter1.Mode, filters[filterIndex]);
	
	if (value == 8)
	{
		FilterLFOModulator1.setBypassed(true);
		FilterTableModulator1.setBypassed(true);
		FilterEnvelope1.setBypassed(true);
	}
	else
	{
		FilterLFOModulator1.setBypassed(false);
		FilterTableModulator1.setBypassed(false);
		FilterEnvelope1.setBypassed(false);
	}
};

Content.getComponent("samplerFilterMode1").setControlCallback(onsamplerFilterMode1Control);


inline function onsamplerFilterMode2Control(component, value)
{
	local filterIndex = value - 1;
	SamplerFilter2.setAttribute(SamplerFilter2.Mode, filters[filterIndex]);
	
	if (value == 8)
	{
		FilterLFOModulator2.setBypassed(true);
		FilterTableModulator2.setBypassed(true);
		FilterEnvelope2.setBypassed(true);
	}
	else
	{
		FilterLFOModulator2.setBypassed(false);
		FilterTableModulator2.setBypassed(false);
		FilterEnvelope2.setBypassed(false);
	}
};

Content.getComponent("samplerFilterMode2").setControlCallback(onsamplerFilterMode2Control);



//Arpeggiator Link

const var ArpPanel = Content.getComponent("ArpPanel");
const var ArpPanel1 = Content.getComponent("ArpPanel1");
const var ArpPanel2 = Content.getComponent("ArpPanel2");
const var Arpeggiator1 = Synth.getMidiProcessor("Arpeggiator1");
const var Arpeggiator2 = Synth.getMidiProcessor("Arpeggiator2");
const var Arpeggiator3 = Synth.getMidiProcessor("Arpeggiator3");


inline function onunlinkArpButtonControl(component, value)
{
	ArpPanel.fadeComponent(value, 80);
	ArpPanel1.fadeComponent(1-value, 80);
	ArpPanel2.fadeComponent(1-value, 80);
	
	Arpeggiator1.setBypassed(1-value);
	Arpeggiator2.setBypassed(value);
	Arpeggiator3.setBypassed(value);
	
};

Content.getComponent("unlinkArpButton").setControlCallback(onunlinkArpButtonControl);


                                               
//Controls---------------------------------------------------------------------

//Global Attack Control

inline function onGlobalAttackControl(component, value)
{
	GlobalEnvelope1.setAttribute(GlobalEnvelope1.Attack, value);
	GlobalEnvelope2.setAttribute(GlobalEnvelope2.Attack, value);
};

Content.getComponent("GlobalAttack").setControlCallback(onGlobalAttackControl);

//Global Hold Control

inline function onGlobalHoldControl(component, value)
{
	GlobalEnvelope1.setAttribute(GlobalEnvelope1.Hold, value);
	GlobalEnvelope2.setAttribute(GlobalEnvelope2.Hold, value);
};

Content.getComponent("GlobalHold").setControlCallback(onGlobalHoldControl);

//Global Decay Control

inline function onGlobalDecayControl(component, value)
{
	GlobalEnvelope1.setAttribute(GlobalEnvelope1.Decay, value);
	GlobalEnvelope2.setAttribute(GlobalEnvelope2.Decay, value);
};

Content.getComponent("GlobalDecay").setControlCallback(onGlobalDecayControl);

//Global Sustain Control

inline function onGlobalSustainControl(component, value)
{
	GlobalEnvelope1.setAttribute(GlobalEnvelope1.Sustain, value);
	GlobalEnvelope2.setAttribute(GlobalEnvelope2.Sustain, value);
};

Content.getComponent("GlobalSustain").setControlCallback(onGlobalSustainControl);

//Global Release Control

inline function onGlobalReleaseControl(component, value)
{
	GlobalEnvelope1.setAttribute(GlobalEnvelope1.Release, value);
	GlobalEnvelope2.setAttribute(GlobalEnvelope2.Release, value);
};

Content.getComponent("GlobalRelease").setControlCallback(onGlobalReleaseControl);

//Global Velocity LFO Control

inline function onGlobalVelLFOControl(component, value)
{
	GlobalVelLFO1.setIntensity(value);
	GlobalVelLFO2.setIntensity(value);
};

Content.getComponent("GlobalVelLFO").setControlCallback(onGlobalVelLFOControl);


inline function onvelocityLfoPhaseButtonControl(component, value)
{
	GlobalVelLFO1.setAttribute(GlobalVelLFO1.Inverted, value);
	GlobalVelLFO2.setAttribute(GlobalVelLFO2.Inverted, value);
};

Content.getComponent("velocityLfoPhaseButton").setControlCallback(onvelocityLfoPhaseButtonControl);


//Global Velocity Table Control

inline function onGlobalVelTableControl(component, value)
{
	GlobalVelTable1.setIntensity(value);
	GlobalVelTable2.setIntensity(value);
	
};

Content.getComponent("GlobalVelTable").setControlCallback(onGlobalVelTableControl);


inline function onVelocityTablePhaseButtonControl(component, value)
{
	GlobalVelTable1.setAttribute(GlobalVelTable1.Inverted, value);
	GlobalVelTable2.setAttribute(GlobalVelTable2.Inverted, value);
};

Content.getComponent("VelocityTablePhaseButton").setControlCallback(onVelocityTablePhaseButtonControl);


//Global Pitch LFO Control

inline function onGlobalPitchLFOControl(component, value)
{
	GlobalPitchLFO1.setIntensity(value);
	GlobalPitchLFO2.setIntensity(value);
};

Content.getComponent("GlobalPitchLFO").setControlCallback(onGlobalPitchLFOControl);


inline function onpitchLfoPhaseButtonControl(component, value)
{
	GlobalPitchLFO1.setAttribute(GlobalPitchLFO1.Inverted, value);
	GlobalPitchLFO2.setAttribute(GlobalPitchLFO2.Inverted, value);
};

Content.getComponent("pitchLfoPhaseButton").setControlCallback(onpitchLfoPhaseButtonControl);


//Global Pitch Table Control

inline function onGlobalPitchTableControl(component, value)
{
	GlobalPitchTable1.setIntensity(value);
	GlobalPitchTable2.setIntensity(value);
};

Content.getComponent("GlobalPitchTable").setControlCallback(onGlobalPitchTableControl);


inline function onpitchTablePhaseButtonControl(component, value)
{
	GlobalPitchTable1.setAttribute(GlobalPitchTable1.Inverted, value);
	GlobalPitchTable2.setAttribute(GlobalPitchTable2.Inverted, value);
};

Content.getComponent("pitchTablePhaseButton").setControlCallback(onpitchTablePhaseButtonControl);



//Global Pitch Range Control

inline function onGlobalPitchRangeControl(component, value)
{
	GlobalPitchWheel1.setIntensity(value);
	GlobalPitchWheel2.setIntensity(value);
};

Content.getComponent("GlobalPitchRange").setControlCallback(onGlobalPitchRangeControl);

inline function onSamplerPitchRangeControl(component, value)
{
	PitchWheelMod1.setIntensity(value);
};

Content.getComponent("SamplerPitchRange").setControlCallback(onSamplerPitchRangeControl);

inline function onSamplerPitchRange1Control(component, value)
{
	PitchWheelMod2.setIntensity(value);
};

Content.getComponent("SamplerPitchRange1").setControlCallback(onSamplerPitchRange1Control);

inline function onpitchWheelPhaseButtonControl(component, value)
{
	GlobalPitchWheel1.setAttribute(GlobalPitchWheel1.Inverted, value);
	GlobalPitchWheel2.setAttribute(GlobalPitchWheel2.Inverted, value);
};

Content.getComponent("pitchWheelPhaseButton").setControlCallback(onpitchWheelPhaseButtonControl);


//Pitch Control

const var SamplerPitch1 = Synth.getModulator("SamplerPitch1");
const var SamplerPitch2 = Synth.getModulator("SamplerPitch2");
const var RelPitch = Synth.getModulator("RelPitch");
const var LegatoPitch = Synth.getModulator("LegatoPitch");

inline function onSamplerPitch1Control(component, value)
{
	SamplerPitch1.setIntensity(value);
};

Content.getComponent("SamplerPitch1").setControlCallback(onSamplerPitch1Control);

inline function onSamplerPitch2Control(component, value)
{
	SamplerPitch2.setIntensity(value);
};

Content.getComponent("SamplerPitch2").setControlCallback(onSamplerPitch2Control);


inline function onreleasePitchControl(component, value)
{
	RelPitch.setIntensity(value);
};

Content.getComponent("releasePitch").setControlCallback(onreleasePitchControl);

inline function ontransitionPitchControl(component, value)
{
	LegatoPitch.setIntensity(value);
};

Content.getComponent("transitionPitch").setControlCallback(ontransitionPitchControl);



//Mixer--------------------------------------------------------------------

const NUM_CHANNELS = 4;
const soloState = [];
const gainLevel = [];
const chFader= [];
const muteButton = [];
const soloButton = [];


for (i = 0; i < NUM_CHANNELS; ++i)
{
    gainLevel.push(Synth.getEffect("Ch" + i));
        
    chFader.push(Content.getComponent("Fader" + i));
    chFader[i].setControlCallback(onchFaderControl);
    
    muteButton.push(Content.getComponent("Mute" + i));
    muteButton[i].setControlCallback(onmuteButtonControl);
    
    soloButton.push(Content.getComponent("Solo" + i));
    soloButton[i].setControlCallback(onsoloButtonControl);

}

//Levels
inline function onchFaderControl(component, value)
{
    local index = chFader.indexOf(component);
    
    if ((!muteButton[index].getValue() && !soloState.contains(1)) || soloButton[index].getValue())
        gainLevel[index].setAttribute(gainLevel[index].Gain, value);
}

//Mute
inline function onmuteButtonControl(component, value)
{
    soloMuteProcess();
}

//Solo
inline function onsoloButtonControl(component, value)
{
    local index = soloButton.indexOf(component);
    
    soloState[index] = value;
    
    soloMuteProcess();
}

// Functions
inline function soloMuteProcess()
{
    for (i = 0; i < NUM_CHANNELS; i++)
    {
        if ((!soloState.contains(1) || soloButton[i].getValue()) && (!muteButton[i].getValue() || soloButton[i].getValue()))
            gainLevel[i].setAttribute(gainLevel[i].Gain, chFader[i].getValue());
        else
            gainLevel[i].setAttribute(gainLevel[i].Gain, -100);
    }
}

//Mod Wheel Handler----------------------------------------------------------

const var wheelSlider = Content.getComponent("wheelSlider");
const var modSlider = Content.getComponent("modSlider");
const var Constant1 = Synth.getModulator("Constant1");
const var Constant2 = Synth.getModulator("Constant2");
const var ModWheelButton = Content.getComponent("ModWheelButton");

const var WheelVelSlider = Content.getComponent("WheelVelSlider");
const var VelSlider = Content.getComponent("VelSlider");
const var GlobalMidiCC1 = Synth.getModulator("GlobalMidiCC1");
const var GlobalMidiCC2 = Synth.getModulator("GlobalMidiCC2");

const var ConstantMod = Synth.getModulator("ConstantMod");
const var GlobalMidiCC = Synth.getModulator("GlobalMidiCC");

//Switch

inline function onModWheelButtonControl(component, value)
{
	wheelSlider.fadeComponent(value, FADE);
	modSlider.fadeComponent(1-value, FADE);
	
	ConstantMod.setAttribute(ConstantMod.ControllerNumber, value);
	
	modSlider.changed();
	
};

Content.getComponent("ModWheelButton").setControlCallback(onModWheelButtonControl);


inline function onVelWheelButtonControl(component, value)
{
	WheelVelSlider.fadeComponent(value, FADE);
	VelSlider.fadeComponent(1-value, FADE);
	
	GlobalMidiCC.setAttribute(ConstantMod.ControllerNumber, value);
	
	VelSlider.changed();
		
};

Content.getComponent("VelWheelButton").setControlCallback(onVelWheelButtonControl);


//Control

inline function onVelSliderControl(component, value)
{
	VelFaderModulator1.setIntensity(1-value);
	VelFaderModulator2.setIntensity(1-value);
};

Content.getComponent("VelSlider").setControlCallback(onVelSliderControl);

//Velocity Level Table Modes

const var VelocityLevelTable = Synth.getTableProcessor("GlobalMidiCC");


inline function onlinearVelButtonControl(component, value)
{
	VelocityLevelTable.reset(0);
	VelocityLevelTable.setTablePoint(0, 1, 0, 1, 0.5);
};

Content.getComponent("linearVelButton").setControlCallback(onlinearVelButtonControl);

inline function onlinearVelButton1Control(component, value)
{
	VelocityLevelTable.reset(0);
	VelocityLevelTable.setTablePoint(0, 1, 0, 1, 0.8);
};

Content.getComponent("linearVelButton1").setControlCallback(onlinearVelButton1Control);

inline function onlinearVelButton2Control(component, value)
{
	VelocityLevelTable.reset(0);
	VelocityLevelTable.setTablePoint(0, 1, 0, 1, 0.2);
};

Content.getComponent("linearVelButton2").setControlCallback(onlinearVelButton2Control);

//Crossfade Types

const var CrossfadeTableType = Synth.getTableProcessor("ConstantMod");


inline function oncrossfadeTypeButton0Control(component, value)
{
	CrossfadeTableType.reset(0);
	CrossfadeTableType.setTablePoint(0, 1, 0, 1, 0.5);
};

Content.getComponent("crossfadeTypeButton0").setControlCallback(oncrossfadeTypeButton0Control);


inline function oncrossfadeTypeButton1Control(component, value)
{
	CrossfadeTableType.reset(0);
	CrossfadeTableType.setTablePoint(0, 1, 0, 1, 0.8);
};

Content.getComponent("crossfadeTypeButton1").setControlCallback(oncrossfadeTypeButton1Control);


inline function oncrossfadeTypeButton2Control(component, value)
{
	CrossfadeTableType.reset(0);
	CrossfadeTableType.setTablePoint(0, 1, 0, 1, 0.2);
};

Content.getComponent("crossfadeTypeButton2").setControlCallback(oncrossfadeTypeButton2Control);



//Tables Resets--------------------------------------------------------

const var VelocityModulatorTable = Synth.getTableProcessor("Velocity Modulator");
const var TableModulatorTable = Synth.getTableProcessor("Table Modulator");
const var SamplerVel1Table = Synth.getTableProcessor("SamplerVel1");
const var SamplerVel2Table = Synth.getTableProcessor("SamplerVel2");

inline function onVelReset3Control(component, value)
{
	if (value == 0)
	VelocityModulatorTable.reset(0);
};

Content.getComponent("VelReset3").setControlCallback(onVelReset3Control);

inline function onVelReset1Control(component, value)
{
	if (value == 0)
	SamplerVel1Table.reset(0);
};

Content.getComponent("VelReset1").setControlCallback(onVelReset1Control);

inline function onVelReset2Control(component, value)
{
	if (value == 0)
	SamplerVel2Table.reset(0);
};

Content.getComponent("VelReset2").setControlCallback(onVelReset2Control);

inline function onTableResetControl(component, value)
{
	if (value == 0)
	TableModulatorTable.reset(0);
};

Content.getComponent("TableReset").setControlCallback(onTableResetControl);


//LFO Modulator-----------------------------------------------------------

const var LFOModulator = Synth.getModulator("LFO Modulator");
const var LFOFrequency = Content.getComponent("LFOFrequency");
const var LFOTempo = Content.getComponent("LFOTempo");

inline function onLFOSyncControl(component, value)
{
	LFOFrequency.showControl(1-value);
	LFOTempo.showControl(value);
	LFOModulator.setAttribute(LFOModulator.TempoSync, value);
};

Content.getComponent("LFOSync").setControlCallback(onLFOSyncControl);

inline function onLFOTempoControl(component, value)
{
	LFOModulator.setAttribute(LFOModulator.Frequency, value);
};

Content.getComponent("LFOTempo").setControlCallback(onLFOTempoControl);

inline function onLFOFrequencyControl(component, value)
{
	LFOModulator.setAttribute(LFOModulator.Frequency, value);
};

Content.getComponent("LFOFrequency").setControlCallback(onLFOFrequencyControl);

//Crossfade Modulator
const var CrossfadeMod1 = Synth.getModulator("CrossfadeMod1");
const var CrossfadeMod2 = Synth.getModulator("CrossfadeMod2");

const var CrossfadeModTable1 = Synth.getTableProcessor("CrossfadeMod1");
const var CrossfadeModTable2 = Synth.getTableProcessor("CrossfadeMod2");

inline function oncrossfadeModBypassButtonControl(component, value)
{
	CrossfadeMod1.setBypassed(1-value);
	CrossfadeMod2.setBypassed(1-value);
	Constant1.setBypassed(value);
	Constant2.setBypassed(value);
	
};

Content.getComponent("crossfadeModBypassButton").setControlCallback(oncrossfadeModBypassButtonControl);

inline function oncrossfadeModKnobControl(component, value)
{
	CrossfadeMod1.setIntensity(value);
	CrossfadeMod2.setIntensity(value);
};

Content.getComponent("crossfadeModKnob").setControlCallback(oncrossfadeModKnobControl);

//Reset Crossfade Tables

inline function onresetCrossfadeTablesButtonControl(component, value)
{
	CrossfadeModTable1.reset(0);
	CrossfadeModTable1.setTablePoint(0, 1, 0, 1, 0.2);
	
	CrossfadeModTable2.reset(0);
	CrossfadeModTable2.setTablePoint(0, 1, 0, 0, 0.8);
	CrossfadeModTable2.setTablePoint(0, 0, 0, 1, 0.8);
};

Content.getComponent("resetCrossfadeTablesButton").setControlCallback(onresetCrossfadeTablesButtonControl);


//Table Modulator-----------------------------------------------------------


const var TableModulator = Synth.getModulator("Table Modulator");
const var TableFrequency = Content.getComponent("TableFrequency");
const var TableTempo = Content.getComponent("TableTempo");

inline function onTableSyncControl(component, value)
{
	TableFrequency.showControl(1-value);
	TableTempo.showControl(value);
	TableModulator.setAttribute(TableModulator.TempoSync, value);
};

Content.getComponent("TableSync").setControlCallback(onTableSyncControl);

inline function onTableFrequencyControl(component, value)
{
	TableModulator.setAttribute(TableModulator.Frequency, value);
};

Content.getComponent("TableFrequency").setControlCallback(onTableFrequencyControl);

inline function onTableTempoControl(component, value)
{
	TableModulator.setAttribute(TableModulator.Frequency, value);
};

Content.getComponent("TableTempo").setControlCallback(onTableTempoControl);

//MPE Modulators -----------------------------------------------------------------------

const var SlideMPE1 = Synth.getModulator("CrossfadeMPE1");
const var SlideMPE2 = Synth.getModulator("CrossfadeMPE2");

inline function onactivateSlideMPEButtonControl(component, value)
{
	SlideMPE1.setBypassed(1-value);
	SlideMPE2.setBypassed(1-value);
	SlideMPE1.setAttribute(SlideMPE1.GestureCC, 2);
	SlideMPE2.setAttribute(SlideMPE2.GestureCC, 2);
	
	if(value == 1)
	{
		modSlider.setValue(63);
		modSlider.changed();
		
	}
	else if (value == 0)
	{
		modSlider.setValue(0);
		modSlider.changed();
	}

};

Content.getComponent("activateSlideMPEButton").setControlCallback(onactivateSlideMPEButtonControl);


//Convolution Reverb
const var ConvolutionReverb = Synth.getAudioSampleProcessor("Convolution Reverb");
const var IRHide = Content.getComponent("IRHide");
const var IRLabel = Content.getComponent("IRLabel");

inline function onReverbTypeControl(component, value)
{
	if (value == 1)
	ConvolutionReverb.setFile("{PROJECT_FOLDER}ROM.wav");
	if (value == 2)
	ConvolutionReverb.setFile("{PROJECT_FOLDER}CHR.wav");
	if (value == 3)
	ConvolutionReverb.setFile("{PROJECT_FOLDER}PLT.wav");
	if (value == 4)
	ConvolutionReverb.setFile("{PROJECT_FOLDER}SPR.wav");
	if (value == 5)
	ConvolutionReverb.setFile("{PROJECT_FOLDER}NON.wav");
	if (value == 6)
	ConvolutionReverb.setFile("{PROJECT_FOLDER}DIG.wav");
	
	if (value == 7)
	{
		IRHide.showControl(false);
		IRLabel.showControl(true);	
	}
	else
	{
		IRHide.showControl(true);
		IRLabel.showControl(false);
	}
	
};

Content.getComponent("ReverbType").setControlCallback(onReverbTypeControl);

//Tremolo

const var preTremoloButton = Content.getComponent("preTremoloButton");
const var PreTremolo = Synth.getEffect("PreTremolo");
const var PostTremolo = Synth.getEffect("PostTremolo");
const var tremoloBypass = Content.getComponent("tremoloBypass");

//Pre Post
inline function onpreTremoloButtonControl(component, value)
{
	if (tremoloBypass.getValue() == 1)
	{
		if (value == 0)
		{
			preTremoloButton.set("text", "textlined-Pre FX");
			PreTremolo.setBypassed(false);
			PostTremolo.setBypassed(true);
		}
		else if (value == 1)
		{
			preTremoloButton.set("text", "textlined-Post FX");
			PreTremolo.setBypassed(true);
			PostTremolo.setBypassed(false);
		}
	}
	
	else if (tremoloBypass.getValue() == 0)
	{
		if (value == 0)
		{
			preTremoloButton.set("text", "textlined-Pre FX");
			PreTremolo.setBypassed(true);
			PostTremolo.setBypassed(true);
		}
		else if (value == 1)
		{
			preTremoloButton.set("text", "textlined-Post FX");
			PreTremolo.setBypassed(true);
			PostTremolo.setBypassed(true);
		}
	}
};

preTremoloButton.setControlCallback(onpreTremoloButtonControl);

//Sync Button
const var tremoloSpeedKnob = Content.getComponent("tremoloSpeedKnob");
const var tremoloSpeedSyncedKnob = Content.getComponent("tremoloSpeedSyncedKnob");

inline function ontremoloSyncButtonControl(component, value)
{
	tremoloSpeedKnob.showControl(1-value);
	tremoloSpeedSyncedKnob.showControl(value);
	PreTremolo.setAttribute(PreTremolo.TempoSync, value);
	PostTremolo.setAttribute(PostTremolo.TempoSync, value);
	
};

Content.getComponent("tremoloSyncButton").setControlCallback(ontremoloSyncButtonControl);

//Intensity

inline function ontremoloIntensityKnobControl(component, value)
{
	PreTremolo.setAttribute(PreTremolo.Intensity, value);
	PostTremolo.setAttribute(PostTremolo.Intensity, value);
	
};

Content.getComponent("tremoloIntensityKnob").setControlCallback(ontremoloIntensityKnobControl);

//Speed

inline function ontremoloSpeedKnobControl(component, value)
{
	PreTremolo.setAttribute(PreTremolo.Speed, value);
	PostTremolo.setAttribute(PostTremolo.Speed, value);
};

Content.getComponent("tremoloSpeedKnob").setControlCallback(ontremoloSpeedKnobControl);

//Speed Synced

inline function ontremoloSpeedSyncedKnobControl(component, value)
{
	PreTremolo.setAttribute(PreTremolo.SpeedSynced, value);
	PostTremolo.setAttribute(PostTremolo.SpeedSynced, value);
};

Content.getComponent("tremoloSpeedSyncedKnob").setControlCallback(ontremoloSpeedSyncedKnobControl);

//Smooth

inline function ontremoloSmoothControl(component, value)
{
	PreTremolo.setAttribute(PreTremolo.Smooth, value);
	PostTremolo.setAttribute(PostTremolo.Smooth, value);
};

Content.getComponent("tremoloSmooth").setControlCallback(ontremoloSmoothControl);

//Phase

inline function ontremoloPhaseControl(component, value)
{
	PreTremolo.setAttribute(PreTremolo.Phase, value);
	PostTremolo.setAttribute(PostTremolo.Phase, value);
};

Content.getComponent("tremoloPhase").setControlCallback(ontremoloPhaseControl);

//Tremolo Mode

inline function ontremoloModeControl(component, value)
{
	PreTremolo.setAttribute(PreTremolo.Mode, value - 1);
	PostTremolo.setAttribute(PostTremolo.Mode, value - 1);
};

Content.getComponent("tremoloMode").setControlCallback(ontremoloModeControl);

//Bypass

inline function ontremoloBypassControl(component, value)
{
	PreTremolo.setBypassed(1-value);
	PostTremolo.setBypassed(1-value);
	preTremoloButton.changed();
};

Content.getComponent("tremoloBypass").setControlCallback(ontremoloBypassControl);






//Arp Resets

const var ArpSliderPacks = [Content.getComponent("ArpSliderPack0"),
                            Content.getComponent("ArpSliderPack1"),
                            Content.getComponent("ArpSliderPack2"),
                            Content.getComponent("ArpSliderPack3"),
                            Content.getComponent("ArpSliderPack4"),
                            Content.getComponent("ArpSliderPack5"),
                            Content.getComponent("ArpSliderPack6")];
                            
inline function onArpReset0Control(component, value)
{
	ArpSliderPacks[0].setAllValues(109);
};

Content.getComponent("ArpReset0").setControlCallback(onArpReset0Control);

inline function onArpReset1Control(component, value)
{
	ArpSliderPacks[1].setAllValues(75);
};

Content.getComponent("ArpReset1").setControlCallback(onArpReset1Control);

inline function onArpReset2Control(component, value)
{
	ArpSliderPacks[2].setAllValues(0);
};

Content.getComponent("ArpReset2").setControlCallback(onArpReset2Control);


inline function onArpReset4Control(component, value)
{
	ArpSliderPacks[3].setAllValues(109);
	ArpSliderPacks[6].setAllValues(75);
};

Content.getComponent("ArpReset4").setControlCallback(onArpReset4Control);

inline function onArpReset5Control(component, value)
{
	ArpSliderPacks[4].setAllValues(109);
	ArpSliderPacks[5].setAllValues(75);
};

Content.getComponent("ArpReset5").setControlCallback(onArpReset5Control);

//Arp Random

const var ArpSteps = Content.getComponent("ArpSteps");
const var ArpSteps1 = Content.getComponent("ArpSteps1");
const var ArpSteps2 = Content.getComponent("ArpSteps2");



inline function onarpRandom1Control(component, value)
{
	if(value == 0)
	return;
	
	for (i = 0; i < ArpSteps.getValue(); i++)
	ArpSliderPacks[0].setSliderAtIndex(i, Math.randInt(0, 127));
};

Content.getComponent("arpRandom1").setControlCallback(onarpRandom1Control);


inline function onarpRandom2Control(component, value)
{
	if(value == 0)
	return;
	
	for (i = 0; i < ArpSteps.getValue(); i++)
	ArpSliderPacks[1].setSliderAtIndex(i, Math.randInt(0, 127));
};

Content.getComponent("arpRandom2").setControlCallback(onarpRandom2Control);


inline function onarpRandom3Control(component, value)
{
	if(value == 0)
	return;
	
	for (i = 0; i < ArpSteps.getValue(); i++)
	ArpSliderPacks[2].setSliderAtIndex(i, Math.randInt(-24, 24));
};

Content.getComponent("arpRandom3").setControlCallback(onarpRandom3Control);


inline function onarpRandom4Control(component, value)
{
	if(value == 0)
	return;
	
	for (i = 0; i < ArpSteps2.getValue(); i++)
	{
		ArpSliderPacks[4].setSliderAtIndex(i, Math.randInt(0, 127));
		ArpSliderPacks[5].setSliderAtIndex(i, Math.randInt(0, 127));
	}

};

Content.getComponent("arpRandom4").setControlCallback(onarpRandom4Control);


inline function onarpRandom5Control(component, value)
{
	if(value == 0)
	return;
	
	for (i = 0; i < ArpSteps1.getValue(); i++)
	{
		ArpSliderPacks[3].setSliderAtIndex(i, Math.randInt(0, 127));
		ArpSliderPacks[6].setSliderAtIndex(i, Math.randInt(0, 127));
	}
};

Content.getComponent("arpRandom5").setControlCallback(onarpRandom5Control);






//Clear Midi CC

inline function onclearMidiCCButtonControl(component, value)
{
	if (value == 0)
	return;
	
	Engine.showYesNoWindow("Clear All Midi CC", "Are you sure you want to Clear All Midi CC Assignments?", function(response)
	{
		if (response)
		Settings.clearMidiLearn();
	});
	
};

Content.getComponent("clearMidiCCButton").setControlCallback(onclearMidiCCButtonControl);


//NoteKiller

inline function onPanicButtonControl(component, value)
{
	Engine.allNotesOff();
};

Content.getComponent("PanicButton").setControlCallback(onPanicButtonControl);

//LFO LED
const var lfoledPanel1 = Content.getComponent("lfoledPanel1");

lfoledPanel1.setPaintRoutine(function(g){
    g.setColour(Colours.withAlpha(Colours.whitesmoke, LFOModulator.getCurrentLevel()));
    g.fillEllipse([5,5,10,10]);
});

lfoledPanel1.setTimerCallback(function(){
    this.repaint();
});

lfoledPanel1.startTimer(40);
                            
//Pitch Factor

inline function onGlobalPitchFactorControl(component, value)
{
	Engine.setGlobalPitchFactor(value);
};

Content.getComponent("GlobalPitchFactor").setControlCallback(onGlobalPitchFactorControl);

//Loop Controls

inline function onloopButton2Control(component, value)
{
	for (s in AsSampler2.createSelection(".*"))
	    {
	        s.set(AsSampler2.LoopEnabled, value);
	    }
	
};

Content.getComponent("loopButton2").setControlCallback(onloopButton2Control);

inline function onloopButton1Control(component, value)
{
	for (s in AsSampler1.createSelection(".*"))
	    {
	        s.set(AsSampler1.LoopEnabled, value);
	    }
	
};

Content.getComponent("loopButton1").setControlCallback(onloopButton1Control);

//Reverse Controls


inline function onreverseButton1Control(component, value)
{
	Sampler1.setAttribute(Sampler1.Reversed, value);
};

Content.getComponent("reverseButton1").setControlCallback(onreverseButton1Control);

//Routing Matrix
const var Container1 = Synth.getRoutingMatrix("Container1");

const var NUM_ROUTES = 4;
const var routers = [];

for (i = 0; i < NUM_ROUTES; i++)
{
	routers[i] = Content.getComponent("RoutingCombo"+i);
	routers[i].setControlCallback(onRoutersControl);
}

inline function onRoutersControl(component, value)
{
	if (value)
	{ 
		local idx = routers.indexOf(component);
		
		for (i = 0; i < NUM_ROUTES; i++)
		{
			
				Container1.addConnection((idx)*2,(value-1)*2);
				Container1.addConnection(1+(idx)*2,1+(value-1)*2);
		}
		
		Matrix.addConnection(0, 0);
		Matrix.addConnection(1, 1);
		Matrix.addConnection(2, 2);
		Matrix.addConnection(3, 3);
		Matrix.addConnection(4, 4);
		Matrix.addConnection(5, 5);
		Matrix.addConnection(6, 6);
		Matrix.addConnection(7, 7);
		
	}
};

//Compressor Gain Reduction
/*

const var Dynamics = Synth.getEffect("Dynamics");
const var gainReductionKnob = Content.getComponent("gainReductionKnob");
gainReductionKnob.setLocalLookAndFeel(ReductionLaf);

gainReductionKnob.setValue(0);

const var rt = Engine.createTimerObject();
rt.setTimerCallback(function()
{
	var v = (Dynamics.getAttribute(Dynamics.Reduction));
	
	gainReductionKnob.setValue(v);
});

rt.startTimer(30);

*/

// Fetch a displaybuffer source reference to the DSP network
const var dp = Synth.getDisplayBufferSource("Compressor");

// Get the first "external" Displaybuffer
const var gr = dp.getDisplayBuffer(0);

// Set the buffer length to 1024 (about 23ms)
// (this correlates with the timer frequency below)
gr.setRingBufferProperties({
  "BufferLength": 1024,
  "NumChannels": 1
});

// Get a reference to the FIFO that contains the values
const var buffer = gr.getReadBuffer();


const var gainReductionKnob = Content.getComponent("gainReductionKnob");

gainReductionKnob.setLocalLookAndFeel(LAF.ReductionLaf);

const var reduction = Engine.createTimerObject();

reduction.setTimerCallback(function()
{
	// Fetch the maximum value of the last 50ms and display
	// it on the knob
	
	//gainReductionKnob.setValue(buffer.getMagnitude(0, buffer.length));
	gainReductionKnob.setValue(Engine.getDecibelsForGainFactor(1-buffer.getMagnitude(0, buffer.length)));
});

// Start the timer with ~30Hz.
reduction.startTimer(30);







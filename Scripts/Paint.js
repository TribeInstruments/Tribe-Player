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

namespace Paint
{
//**** set Look And Feel to change appearence

//Definitions

const var cornerData = 5;

//Set Font Size of Macro Controls

const var macroLabels = Content.getAllComponents("macroLabel");

for (i = 0; i < macroLabels.length; i++)
{
	macroLabels[i].set("fontSize", Theme.fontSize);
	macroLabels[i].set("fontName", Theme.boldFont);
	macroLabels[i].set("textColour", Theme.TextColor);
}

//Set Font Size of Sampler Options Controls

const var samplerLabels = Content.getAllComponents("samplerControlLabel");

for (i = 0; i < samplerLabels.length; i++)
{
	samplerLabels[i].set("fontSize", Theme.controlSize);
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


//Close and Hide Buttons

const var closeButtons = Content.getAllComponents("close");

for (i = 0; i < closeButtons.length; i++)
	closeButtons[i].setLocalLookAndFeel(LAF.customLaf);

Content.getComponent("hideQuestionButton").setLocalLookAndFeel(LAF.customLaf);

//******* HEADER Painting *********

//Zoom Viewer
Content.getComponent("ZoomCombo").setLocalLookAndFeel(LAF.ZoomComboLaf);
Content.getComponent("BypassButton").setLocalLookAndFeel(LAF.customLaf);

//Navigation Buttons
const var NUM_NAVIGATION = 5;

for (i = 0; i < NUM_NAVIGATION; i++)
	Content.getComponent("GUIButton" + i).setLocalLookAndFeel(LAF.roundedIcon);

//Preset Buttons
const var presetButtons = [Content.getComponent("showPresetsButton"),
                           Content.getComponent("nextPresetButton"),
                           Content.getComponent("savePresetButton"),
                           Content.getComponent("previousPresetButton")];

for (i = 0; i < presetButtons.length; i++)
	presetButtons[i].setLocalLookAndFeel(LAF.presetButtonLaf);

//Preset BG
const var showPresetPanel = Content.getComponent("showPresetPanel");

//Config Button
Content.getComponent("ConfigButton").setLocalLookAndFeel(LAF.roundedIcon);

//Panic Button
Content.getComponent("PanicButton").setLocalLookAndFeel(LAF.roundedIcon);

//Master Volume Fader
Content.getComponent("MasterFader").setLocalLookAndFeel(LAF.customLaf);

//Master Pan Knob
Content.getComponent("MasterPanSlider").setLocalLookAndFeel(LAF.pinSliderLaf);

//Master Pan Knob
Content.getComponent("GlobalPitchFactor").setLocalLookAndFeel(LAF.pinSliderLaf);

//***** MAIN NAVIGATION GUI PANELS PAINTING

//Main Controllers Buttons
const var mainControllerButtons = [Content.getComponent("velFaderButton"),
                                   Content.getComponent("crossfadeButton"),
                                   Content.getComponent("ModWheelButton"),
                                   Content.getComponent("VelWheelButton")];

for (i = 0; i < mainControllerButtons.length; i++)
	mainControllerButtons[i].setLocalLookAndFeel(LAF.customLaf);

//Crossfade Modulation Button
Content.getComponent("showModPanelButton").setLocalLookAndFeel(LAF.customLaf);

//Main Controller Faders
const var mainControllerFaders = [Content.getComponent("modSlider"),
                                  Content.getComponent("VelSlider")];

for (i = 0; i < mainControllerFaders.length; i++)
	mainControllerFaders[i].setLocalLookAndFeel(LAF.customLaf);
	
const var modControllerFaders = [Content.getComponent("wheelSlider"),
                                  Content.getComponent("WheelVelSlider")];

for (i = 0; i < modControllerFaders.length; i++)
	modControllerFaders[i].setLocalLookAndFeel(LAF.modSliderLaf);

//Init Show Presets Button

Content.getComponent("initButton").setLocalLookAndFeel(LAF.customLaf);

//Preset Window Buttons
const var presetBrowserButtons = [Content.getComponent("findButton"),
                           Content.getComponent("showInstallerButton")];

for (i = 0; i < presetBrowserButtons.length; i++)
	presetBrowserButtons[i].setLocalLookAndFeel(LAF.customDialogButton);
	
Content.getComponent("refreshButton").setLocalLookAndFeel(LAF.customLaf);

//Player Performance Panel

//Link Buttons
const var linkButtons = [Content.getComponent("FilterLink"),
                         Content.getComponent("EnvelopeLink"),
                         Content.getComponent("VelocityLink"),
                         Content.getComponent("PitchLink")];

for (i = 0; i < linkButtons.length; i++)
	linkButtons[i].setLocalLookAndFeel(LAF.customLaf);

//Sampler Volume Faders

const var NUM_SAMPLERS = 2;

for (i = 0; i < NUM_SAMPLERS; i++)
{
	Content.getComponent("SamplerVolume" + (i+1)).setLocalLookAndFeel(LAF.customLaf);
	Content.getComponent("SamplerPitch" + (i+1)).setLocalLookAndFeel(LAF.pinSliderLaf);
	Content.getComponent("SamplerPan" + (i+1)).setLocalLookAndFeel(LAF.pinSliderLaf);
}

// Filter Knobs

const var filterKnobs = [Content.getComponent("FilterLFO"),
                         Content.getComponent("FilterTable"),
                         Content.getComponent("FilterEnvelope2"),
                         Content.getComponent("FilterLFO2"),
                         Content.getComponent("FilterTable2"),
                         Content.getComponent("FilterEnvelope1"),
                         Content.getComponent("FilterLFO1"),
                         Content.getComponent("FilterTable1")];

for (i = 0; i < filterKnobs.length; i++)
	filterKnobs[i].setLocalLookAndFeel(LAF.customLaf);

const var filterSliders = [Content.getComponent("FilterFrequency"),
						   Content.getComponent("FilterFrequency1"),
						   Content.getComponent("FilterFrequency2"),
						   Content.getComponent("FilterQ"),
						   Content.getComponent("FilterQ1"),
						   Content.getComponent("FilterQ2")];

for (i = 0; i < filterSliders.length; i++)
	filterSliders[i].setLocalLookAndFeel(LAF.filterSlider);
						   
//Filter Buttons

const var filterButtons = [Content.getComponent("filterLfoPhaseButton"),
                           Content.getComponent("filterTablePhaseButton"),
                           Content.getComponent("showFilterEnv2"),
                           Content.getComponent("filterLfoPhaseButton2"),
                           Content.getComponent("filterTablePhaseButton2"),
                           Content.getComponent("showFilterEnv1"),
                           Content.getComponent("filterLfoPhaseButton1"),
                           Content.getComponent("filterTablePhaseButton1")];
                           
for (i = 0; i < filterButtons.length; i++)
	filterButtons[i].setLocalLookAndFeel(LAF.customLaf);

//Filter Combo

Content.getComponent("globalFilterMode").setLocalLookAndFeel(LAF.FilterComboLaf);
Content.getComponent("samplerFilterMode1").setLocalLookAndFeel(LAF.FilterComboLaf);
Content.getComponent("samplerFilterMode2").setLocalLookAndFeel(LAF.FilterComboLaf);

//Envelope Knobs

const var EnvelopeKnobs = [Content.getComponent("GlobalAttack"),
                           Content.getComponent("GlobalHold"),
                           Content.getComponent("GlobalDecay"),
                           Content.getComponent("GlobalSustain"),
                           Content.getComponent("GlobalRelease"),
                           Content.getComponent("SamplerAttack1"),
                           Content.getComponent("SamplerHold1"),
                           Content.getComponent("SamplerDecay1"),
                           Content.getComponent("SamplerSustain1"),
                           Content.getComponent("SamplerRelease1"),
                           Content.getComponent("SamplerRelease2"),
                           Content.getComponent("SamplerSustain2"),
                           Content.getComponent("SamplerDecay2"),
                           Content.getComponent("SamplerHold2"),
                           Content.getComponent("SamplerAttack2")];

for (i = 0; i < EnvelopeKnobs.length; i++)
	EnvelopeKnobs[i].setLocalLookAndFeel(LAF.smallSliderLaf);

//Velocity Knobs

const var VelocityKnobs = [Content.getComponent("GlobalVelLFO"),
                           Content.getComponent("GlobalVelTable"),
                           Content.getComponent("SamplerVelLFO2"),
                           Content.getComponent("SamplerVelTable2"),
                           Content.getComponent("SamplerVelLFO1"),
                           Content.getComponent("SamplerVelTable1")];

for (i = 0; i < VelocityKnobs.length; i++)
	VelocityKnobs[i].setLocalLookAndFeel(LAF.customLaf);

//VelocityButtons

const var velocityButtons = [Content.getComponent("velocityLfoPhaseButton2"),
                             Content.getComponent("VelocityTablePhaseButton2"),
                             Content.getComponent("VelReset2"),
                             Content.getComponent("velocityLfoPhaseButton1"),
                             Content.getComponent("VelocityTablePhaseButton1"),
                             Content.getComponent("VelReset1"),
                             Content.getComponent("velocityLfoPhaseButton"),
                             Content.getComponent("VelocityTablePhaseButton"),
                             Content.getComponent("VelReset3")];

for (i = 0; i < velocityButtons.length; i++)
	velocityButtons[i].setLocalLookAndFeel(LAF.customLaf);

//Pitch Faders

const var pitchFaders = [Content.getComponent("GlobalPitchLFO"),
                         Content.getComponent("GlobalPitchTable"),
                         Content.getComponent("GlobalPitchRange"),
                         Content.getComponent("SamplerPitchLFO2"),
                         Content.getComponent("SamplerPitchTable2"),
                         Content.getComponent("SamplerPitchRange1"),
                         Content.getComponent("SamplerPitchLFO1"),
                         Content.getComponent("SamplerPitchTable1"),
                         Content.getComponent("SamplerPitchRange")];

for (i = 0; i < pitchFaders.length; i++)
	pitchFaders[i].setLocalLookAndFeel(LAF.customLaf);
	
//Pitch Buttons

const var pitchButtons = [Content.getComponent("pitchLfoPhaseButton2"),
                          Content.getComponent("pitchTablePhaseButton2"),
                          Content.getComponent("pitchWheelPhaseButton2"),
                          Content.getComponent("pitchLfoPhaseButton1"),
                          Content.getComponent("pitchTablePhaseButton1"),
                          Content.getComponent("pitchWheelPhaseButton1"),
                          Content.getComponent("pitchLfoPhaseButton"),
                          Content.getComponent("pitchTablePhaseButton"),
                          Content.getComponent("pitchWheelPhaseButton")];

for (i = 0; i < pitchButtons.length; i++)
	pitchButtons[i].setLocalLookAndFeel(LAF.customLaf);
	
	
//Effect Window

//Effect Bypass Buttons

const var NUM_FX = 9;

const var fxBypassButtons = [Content.getComponent("DynBypass"),
                             Content.getComponent("EQBypass"),
                             Content.getComponent("CrusherBypass"),
                             Content.getComponent("DelayBypass"),
                             Content.getComponent("PhaserBypass1"),
                             Content.getComponent("PhaserBypass"),
                             Content.getComponent("ReverbBypass"),
                             Content.getComponent("ChorusBypass"),
                             Content.getComponent("AlgoBypass"),
                             Content.getComponent("tremoloBypass")];

for (i = 0; i < fxBypassButtons.length; i++)
	fxBypassButtons[i].setLocalLookAndFeel(LAF.customLaf);
	
//Delay Controls

const var delayKnobs = [Content.getComponent("DelayFeedback"),
                        Content.getComponent("DelayFilter"),
                        Content.getComponent("DelayTimeLeft"),
                        Content.getComponent("DelayTimeRight")];
                        
for (i = 0; i < delayKnobs.length; i++)
	delayKnobs[i].setLocalLookAndFeel(LAF.smallSliderLaf);
	
//Convolution Knobs

const var convoKnobs = [Content.getComponent("ReverbMix"),
                        Content.getComponent("ReverbPredelay"),
                        Content.getComponent("ReverbDamp")];

for (i = 0; i < convoKnobs.length; i++)
	convoKnobs[i].setLocalLookAndFeel(LAF.smallSliderLaf);

Content.getComponent("DelayMix").setLocalLookAndFeel(LAF.customLaf);

//Reverb Knobs

const var reverbKnobs = [Content.getComponent("AlgoMix"),
                         Content.getComponent("AlgoSize"),
                         Content.getComponent("AlgoDamp"),
                         Content.getComponent("AlgoDiffusion"),
                         Content.getComponent("AlgoTime"),
                         Content.getComponent("AlgoFeedback"),
                         Content.getComponent("AlgoLowCut"),
                         Content.getComponent("AlgoMod"),
                         Content.getComponent("AlgoModFreq")];

for (i = 0; i < reverbKnobs.length; i++)
	reverbKnobs[i].setLocalLookAndFeel(LAF.smallSliderLaf);
	
//Compressor Controls

Content.getComponent("DynThreshold").setLocalLookAndFeel(LAF.customLaf);

const var compKnobs = [Content.getComponent("DynAttack"),
                       Content.getComponent("DynRelease"),
                       Content.getComponent("DynRatio"),
                       Content.getComponent("DynMakeUp")];

for (i = 0; i < compKnobs.length; i++)
	compKnobs[i].setLocalLookAndFeel(LAF.smallSliderLaf);

//Bit Crusher Controls

const var crusherKnobs = [Content.getComponent("CrusherDegrade"),
                          Content.getComponent("CrusherMix"),
                          Content.getComponent("CrusherBits")];

for (i = 0; i < crusherKnobs.length; i++)
	crusherKnobs[i].setLocalLookAndFeel(LAF.smallSliderLaf);
	
Content.getComponent("CrusherDC").setLocalLookAndFeel(LAF.customLaf);

//Distortion Controls

const var distortionKnobs = [Content.getComponent("DistortionMix"),
                             Content.getComponent("DistortionGain"),
                             Content.getComponent("DistortionLowCut"),
                             Content.getComponent("DistortionHiCut")];

for (i = 0; i < distortionKnobs.length; i++)
	distortionKnobs[i].setLocalLookAndFeel(LAF.smallSliderLaf);
	
//Phaser Knobs

const var phaserButtons = [Content.getComponent("PhaserMix"),
                           Content.getComponent("PhaserSpeed"),
                           Content.getComponent("PhaserFeedback"),
                           Content.getComponent("PhaserRange")];

for (i = 0; i < phaserButtons.length; i++)
	phaserButtons[i].setLocalLookAndFeel(LAF.smallSliderLaf);

//Chorus Controls

const var chorusKnobs = [Content.getComponent("ChorusDelay"),
                         Content.getComponent("ChorusMix"),
                         Content.getComponent("ChorusDepth")];

for (i = 0; i < chorusKnobs.length; i++)
	chorusKnobs[i].setLocalLookAndFeel(LAF.smallSliderLaf);
	
//Tremolo Controls

const var tremKnobs = [Content.getComponent("tremoloPhase"),
                       Content.getComponent("tremoloSmooth"),
                       Content.getComponent("tremoloIntensityKnob"),
                       Content.getComponent("tremoloSpeedKnob"),
                       Content.getComponent("tremoloSpeedSyncedKnob")];

for (i = 0; i < tremKnobs.length; i++)
	tremKnobs[i].setLocalLookAndFeel(LAF.smallSliderLaf);
	
Content.getComponent("tremoloSyncButton").setLocalLookAndFeel(LAF.customLaf);
Content.getComponent("preTremoloButton").setLocalLookAndFeel(LAF.customLaf);
	
//Arpeggiator Controls------------

//Arpeggiator Linker Button
Content.getComponent("unlinkArpButton").setLocalLookAndFeel(LAF.customLaf);

//Arpeggiator Bypass Buttons
const var arpBypassButtons = Content.getAllComponents("ArpEnable");

for (i = 0; i < arpBypassButtons.length; i++)
	arpBypassButtons[i].setLocalLookAndFeel(LAF.customLaf);
	
//Arpeggiator Knobs
const var arpKnobs = [Content.getComponent("ArpOctave"),
                      Content.getComponent("ArpSpeed"),
                      Content.getComponent("ArpStepReset"),
                      Content.getComponent("ArpSteps"),
                      Content.getComponent("ArpStride"),
                      Content.getComponent("ArpShuffle"),
                      Content.getComponent("ArpOctave2"),
                      Content.getComponent("ArpSpeed2"),
                      Content.getComponent("ArpSteps2"),
                      Content.getComponent("ArpShuffle2"),
                      Content.getComponent("ArpOctave1"),
                      Content.getComponent("ArpSpeed1"),
                      Content.getComponent("ArpSteps1"),
                      Content.getComponent("ArpShuffle1")];

for (i = 0; i < arpKnobs.length; i++)
	arpKnobs[i].setLocalLookAndFeel(LAF.smallSliderLaf);

//Apreggiator Options Buttons

const var arpResetButtons = Content.getAllComponents("ArpReset");
const var arpRandomButtons = Content.getAllComponents("arpRandom");

for (i = 0; i < arpResetButtons.length; i++)
	arpResetButtons[i].setLocalLookAndFeel(LAF.customLaf);

for (i = 0; i < arpRandomButtons.length; i++)
	arpRandomButtons[i].setLocalLookAndFeel(LAF.customLaf);

//ArpSliderPacks

const var arpSliderPacks = Content.getAllComponents("ArpSliderPack");

for (i = 0; i < arpSliderPacks.length; i++)
	arpSliderPacks[i].setLocalLookAndFeel(LAF.SliderLaf);


//Macro Section

//MacroKnobs
const var NUM_MACROS = 15;

const var macroKnobs = [Content.getComponent("macroAttackKnob"),
                        Content.getComponent("macroHoldKnob"),
                        Content.getComponent("macroDecay"),
                        Content.getComponent("macroSustain"),
                        Content.getComponent("macroRelease"),
                        Content.getComponent("macroPhaser"),
                        Content.getComponent("macroChorus"),
                        Content.getComponent("macroDelay"),
                        Content.getComponent("macroReverb"),
                        Content.getComponent("macroReverb2"),
                        Content.getComponent("MinVelocity"),
                        Content.getComponent("relTriggerAttack"),
                        Content.getComponent("transitionAttack"),
                        Content.getComponent("transitionRelease"),
                        Content.getComponent("releaseTriggerLevel"),
                        Content.getComponent("transitionLevel"),
                        Content.getComponent("macroDistortion"),
                        Content.getComponent("macroTremolo")];

for (i = 0; i < macroKnobs.length; i++)
	macroKnobs[i].setLocalLookAndFeel(LAF.macroSliderLaf);

Content.getComponent("macroFilter").setLocalLookAndFeel(LAF.macroBackwardsLaf);
Content.getComponent("MaxVelocity").setLocalLookAndFeel(LAF.macroBackwardsLaf);
	
for (i = 0; i < 2; i++)
	Content.getComponent("lockButton" + i).setLocalLookAndFeel(LAF.customLaf);

//SIDEBAR PAINTING

//Siderbar Buttons
const var NUM_SIDEBARS = 6;

const var sidebarButtons = Content.getAllComponents("sideBarButton");

for (i = 0; i < NUM_SIDEBARS; i++)
	sidebarButtons[i].setLocalLookAndFeel(LAF.customLaf);

//Microphone Mixer

const var NUM_CHANNELS = 4;

//Channel Pan

for (i = 0; i < NUM_CHANNELS; i++)
{
	Content.getComponent("Pan" + i).setLocalLookAndFeel(LAF.pinSliderLaf);
	Content.getComponent("Width" + i).setLocalLookAndFeel(LAF.smallSliderLaf);
	Content.getComponent("Fader" + i).setLocalLookAndFeel(LAF.customLaf);
	Content.getComponent("Solo" + i).setLocalLookAndFeel(LAF.customLaf);
	Content.getComponent("Mute" + i).setLocalLookAndFeel(LAF.customLaf);	
}

Content.getComponent("showPanModsButton").setLocalLookAndFeel(LAF.customLaf);
Content.getComponent("showModPanelButton1").setLocalLookAndFeel(LAF.customLaf);

//LFO Panel and Table

const var LFOWaveform = Content.getComponent("LFOWaveform");
LFOWaveform.set("itemColour", Theme.TableColor2);


//Lfo Faders
const var lfoFaders = [Content.getComponent("LFOTempo"),
                       Content.getComponent("LFOFadein"),
                       Content.getComponent("LFOSmooth"),
                       Content.getComponent("LFOFrequency"),
                       Content.getComponent("TableSmooth"),
                       Content.getComponent("TableFade"),
                       Content.getComponent("TableFrequency"),
                       Content.getComponent("TableTempo")];
                       
for (i = 0; i < lfoFaders.length; i++)
	lfoFaders[i].setLocalLookAndFeel(LAF.customLaf);

//Lfo Buttons

const var lfoButtons = [Content.getComponent("LFOLegato"),
                        Content.getComponent("LFOSync"),
                        Content.getComponent("LFOLoop"),
                        Content.getComponent("TableLegato"),
                        Content.getComponent("TableSync"),
                        Content.getComponent("TableLegato1")];

for (i = 0; i < lfoButtons.length; i++)
	lfoButtons[i].setLocalLookAndFeel(LAF.customLaf);
	
//Table Reset Button

Content.getComponent("TableReset").setLocalLookAndFeel(LAF.customLaf);

//XY PAD Painting

//XY Knobs

for (i = 0; i < 2; i++)
	Content.getComponent("XYKnob" + i).setLocalLookAndFeel(LAF.customLaf);

Content.getComponent("showMacroControls").setLocalLookAndFeel(LAF.customLaf);

//Playing Style Controls

const var playingButtons = [Content.getComponent("loopButton2"),
                            Content.getComponent("PlayButtonB0"),
                            Content.getComponent("PlayButtonB1"),
                            Content.getComponent("PlayButtonB2"),
                            Content.getComponent("loopButton1"),
                            Content.getComponent("reverseButton1"),
                            Content.getComponent("PlayButton0"),
                            Content.getComponent("PlayButton1"),
                            Content.getComponent("PlayButton2")];

for (i = 0; i < playingButtons.length; i++)
	playingButtons[i].setLocalLookAndFeel(LAF.customLaf);

//Glide Kill Buttons
const var killButtons = [Content.getComponent("killHangingButtonB"),
                         Content.getComponent("killHangingButton")];

for (i = 0; i < killButtons.length; i++)
	killButtons[i].setLocalLookAndFeel(LAF.customLaf);

//Glide Faders
const var glideFaders = [Content.getComponent("GlideTimeKnob"),
                         Content.getComponent("GlideTimeKnobB")];

for (i = 0; i < glideFaders.length; i++)
	glideFaders[i].setLocalLookAndFeel(LAF.customLaf);
	
// Release Legato Knobs

Content.getComponent("releasePitch").setLocalLookAndFeel(LAF.pinSliderLaf);
Content.getComponent("transitionPitch").setLocalLookAndFeel(LAF.pinSliderLaf);

// ******* FOOTER PAINTING ***********

Content.getComponent("footerLogo").setLocalLookAndFeel(LAF.logoButtonLaf);

const var footerButtons = [Content.getComponent("showMPE"),
                           Content.getComponent("showMidiCC"),
                           Content.getComponent("InfoButton")];

for (i = 0; i < footerButtons.length; i++)
	footerButtons[i].setLocalLookAndFeel(LAF.footerButtonLaf);
	
//****** ABOUT SECTION PAINTING ******
Content.getComponent("logoPlayerButton").setLocalLookAndFeel(LAF.logoButtonLaf);

//****** MIDI CC PANEL PAINTING *******

Content.getComponent("clearMidiCCButton").setLocalLookAndFeel(LAF.customLaf);

//******* FLOATING CONTROLS *********

//Crossfade Modulation
const var crossfadeCurveButtons = [Content.getComponent("crossfadeTypeButton0"),
                                   Content.getComponent("crossfadeTypeButton1"),
                                   Content.getComponent("crossfadeTypeButton2"),
                                   Content.getComponent("activateSlideMPEButton")];

for (i = 0; i < crossfadeCurveButtons.length; i++)
	crossfadeCurveButtons[i].setLocalLookAndFeel(LAF.customLaf);

//Intensity Modulation
const var intensityCurveButtons = [Content.getComponent("linearVelButton"),
                                   Content.getComponent("linearVelButton1"),
                                   Content.getComponent("linearVelButton2")];

for (i = 0; i < intensityCurveButtons.length; i++)
	intensityCurveButtons[i].setLocalLookAndFeel(LAF.customLaf);

//Crossfade Modulation	
Content.getComponent("crossfadeModBypassButton").setLocalLookAndFeel(LAF.customLaf);
Content.getComponent("crossfadeModKnob").setLocalLookAndFeel(LAF.smallSliderLaf);
Content.getComponent("resetCrossfadeTablesButton").setLocalLookAndFeel(LAF.customLaf);

//Filter Envelope
const var filterEnvelopeKnobs = [Content.getComponent("FilterAttack1"),
                                 Content.getComponent("FilterRelease1"),
                                 Content.getComponent("FilterAttack"),
                                 Content.getComponent("FilterRelease")];

for (i = 0; i < filterEnvelopeKnobs.length; i++)
	filterEnvelopeKnobs[i].setLocalLookAndFeel(LAF.smallSliderLaf);

Content.getComponent("FilterMonophonic").setLocalLookAndFeel(LAF.customLaf);
Content.getComponent("FilterMonophonic1").setLocalLookAndFeel(LAF.customLaf);

//Microphone Mixer Modualtions

for (i = 0; i < NUM_CHANNELS; i++)
{
	Content.getComponent("chPanModEnable" + i).setLocalLookAndFeel(LAF.customLaf);
	Content.getComponent("chPanPhaseMod" + i).setLocalLookAndFeel(LAF.customLaf);
	Content.getComponent("chPanModKnob" + i).setLocalLookAndFeel(LAF.smallSliderLaf);
	Content.getComponent("Ch" + i + "ModKnob").setLocalLookAndFeel(LAF.smallSliderLaf);
	Content.getComponent("Ch" + i + "TableKnob").setLocalLookAndFeel(LAF.smallSliderLaf);
	Content.getComponent("chLfoPhase" + i).setLocalLookAndFeel(LAF.customLaf);
	Content.getComponent("chTablePhase" + i).setLocalLookAndFeel(LAF.customLaf);
}

//***** Configuration Panel Painting *******

//Config Tab Buttons
for (i = 0; i < 4; i++)
	Content.getComponent("configButton" + i).setLocalLookAndFeel(LAF.configLaf);


//Midi Config Tiles
Content.getComponent("ScriptFloatingTile10").setLocalLookAndFeel(LAF.customLaf);
Content.getComponent("ScriptFloatingTile11").setLocalLookAndFeel(LAF.customLaf);

//Manual Button
Content.getComponent("ScriptButton2").setLocalLookAndFeel(LAF.customLaf);

//Logo Button
Content.getComponent("ScriptButton3").setLocalLookAndFeel(LAF.customLaf);

//******** PAINT ROUTINES **************

//Shades
const var drawPanel = Content.getComponent("drawPanel");

drawPanel.setPaintRoutine(function(g)
{
	g.drawDropShadow([-10, -10, 795, 15], Colours.withAlpha(Colours.black, 0.3), 10);
	g.drawDropShadow([-10, 365, 795, 15], Colours.withAlpha(Colours.black, 0.3), 10);
	g.drawDropShadow([745, -10, 10, 400], Colours.withAlpha(Colours.black, 0.3), 10);	
	
});

const var drawPanel1 = Content.getComponent("drawPanel1");

drawPanel1.setPaintRoutine(function(g)
{	
	var a = this.getLocalBounds(0);
	
	g.drawDropShadow([-10, -10, 795, 15], Colours.withAlpha(Colours.black, 0.3), 10);
	g.drawDropShadow([-10, 365, 795, 15], Colours.withAlpha(Colours.black, 0.3), 10);
	g.drawDropShadow([745, -10, 10, 400], Colours.withAlpha(Colours.black, 0.3), 10);	
	
});

//Auth And Config Tabs
for (i = 0; i < 4; i++)
{
	Content.getComponent("configPanel" + i).setPaintRoutine(function(g)
	{
		g.fillAll(Theme.MidColor);
		
	});
}

//Main Tab

const var MainTabPanel = Content.getComponent("MainTabPanel");

MainTabPanel.setPaintRoutine(function(g)
{	
	var a = this.getLocalBounds(0);
	var position = [showPresetPanel.get("x"),
				  showPresetPanel.get("y"),
				  showPresetPanel.get("width"),
				  showPresetPanel.get("height")];
	
	g.setColour(Theme.FaderColor);
	g.fillRoundedRectangle(position, 12);
	
	g.setColour(Theme.FaderColor4);
	g.drawRoundedRectangle(position, 12, 1);

	
});

//Sidebar 

const var SidebarPanels = Content.getAllComponents("sideBarPanel");

for (i = 0; i < SidebarPanels.length; i++)
{
	SidebarPanels[i].setPaintRoutine(function(g)
	{
		g.setColour(Theme.TextColor);
		g.setFont(Theme.boldFont, Theme.fontSize - 1);
		g.drawAlignedText(this.get("text"), [0, 7, this.getWidth(), 30], "centredTop");

	});

}

//FX Panels



const var fxPanels = [Content.getComponent("EQPanel"),
                      Content.getComponent("DelayPanel"),
                      Content.getComponent("ReverbPanel"),
                      Content.getComponent("AlgoPanel"),
                      Content.getComponent("ChorusPanel"),
                      Content.getComponent("PhaserPanel"),
                      Content.getComponent("SatPanel"),
                      Content.getComponent("BitPanel"),
                      Content.getComponent("CompPanel"),
                      Content.getComponent("TremoloPanel")];

for (i = 0; i < fxPanels.length; i++)
{

	fxPanels[i].setPaintRoutine(function(g)
	{
		var a = this.getLocalBounds(0);
		var a2 = [10, 25, this.getWidth() - 20, this.getHeight() - 35];
		
		drawSemiTransparentBG(a, a2);
		
		drawLeftTitle();
			
	});	

}


//Volume Panels

const var volumePanels = [Content.getComponent("VolumePanel1"),
                          Content.getComponent("VolumePanel2")];

const var samplerNames = ["Sampler A", "Sampler B"];

for (i = 0; i < volumePanels.length; i++)
{

	volumePanels[i].setPaintRoutine(function(g)
	{
		var a = this.getLocalBounds(0);
		var a2 = [10, 0, this.getWidth() - 20, this.getHeight() - 35];
		
		drawSemiTransparentNoTitle(a, a2);
		
		g.setColour(Theme.TextColor);
		g.setFont(Theme.boldFont, Theme.titleSize + 1);
		g.drawAlignedText(this.get("text"), this.getLocalBounds(15), "left");
		
		g.setFont(Theme.mainFont, Theme.fontSize);
		g.drawAlignedText("Pitch", [225, 0, this.getWidth(), this.getHeight()], "left");
		
		g.setFont(Theme.mainFont, Theme.fontSize);
		g.drawAlignedText("Pan", [288, 0, this.getWidth(), this.getHeight()], "left");
		
		g.setFont(Theme.mainFont, Theme.fontSize);
		g.drawAlignedText("Articulation", [345, 0, this.getWidth(), this.getHeight()], "left");
				

		
	});
	
}

//Sampler Panels
const var samplerPanels = [Content.getComponent("EnvelopePanel2"),
                           Content.getComponent("EnvelopePanel1"),
                           Content.getComponent("VelocityPanel2"),
                           Content.getComponent("VelocityPanel1"),
                           Content.getComponent("PitchPanel1"),
                           Content.getComponent("PitchPanel2"),
                           Content.getComponent("GlobalPitchPanel"),
                           Content.getComponent("GlobalVelocityPanel"),
                           Content.getComponent("GlobalEnvelopePanel")];


for (i = 0; i < samplerPanels.length; i++)
{
	
	samplerPanels[i].setPaintRoutine(function(g)
	{
		var a = this.getLocalBounds(0);
		var a2 = [10, 25, this.getWidth() - 20, this.getHeight() - 35];
		
		drawSemiTransparentNoTitle(a, a2);
		
		drawCentredTitle();
		
		if (this.get("text") == "Velocity")
		{
			g.setColour(Theme.TextColor);
			g.setFont(Theme.mainFont, Theme.controlSize);
			g.drawAlignedText("LFO Mod", [0, a[3] / 2 + 22, a[2] / 2 - 10, a[3]], "topRight");
			g.drawAlignedText("Table Mod", [0, a[3] / 2 + 45, a[2] / 2 - 10, a[3]], "topRight");
			
		}
		else if (this.get("text") == "Velocity A" || this.get("text") == "Velocity B")
		{
			g.setColour(Theme.TextColor);
			g.setFont(Theme.mainFont, Theme.controlSize);
			g.drawAlignedText("LFO Mod", [0, a[3] / 2 + 20, a[2] / 2 - 10, a[3]], "topRight");
			g.drawAlignedText("Table Mod", [0, a[3] / 2 + 40, a[2] / 2 - 10, a[3]], "topRight");
			
		}
				
	});
	
}

//Filter Panels
const var filterPanels = [Content.getComponent("FilterPanel2"),
                           Content.getComponent("FilterPanel1"),
                           Content.getComponent("FilterPanel")];

for (i = 0; i < filterPanels.length; i++)
{
	
	filterPanels[i].setPaintRoutine(function(g)
	{
		var a = this.getLocalBounds(0);
		var a2 = [10, 25, this.getWidth() - 20, this.getHeight() - 35];
		
		drawSemiTransparentNoTitle(a, a2);
		
		drawCentredTitle();
		
		/*if(this.get("text") == "Filter A" || this.get("text") == "Filter B")
		{
			g.setColour(Colours.withAlpha(Colours.black, 0.3));
			g.fillRoundedRectangle([10, a[3] / 2 + 2, a[2] - 20, a[3] / 2 - 10], cornerData);
		}
		else
		{
			g.setColour(Colours.withAlpha(Colours.black, 0.3));
			g.fillRoundedRectangle([10, a[3] / 2 + 10, a[2] - 20, a[3] / 2 - 20], cornerData);
		}*/

		
		
		//g.setColour(Colours.withAlpha(Theme.TitleColor, 0.5));
		//g.setFont(Theme.lightFont, Theme.smallSize);
		//g.drawAlignedText(" Modulation Sources", [15, a[3] / 2 + 12, a[2] - 20, a[3] / 2 - 20], "topLeft");
				
	});
	
}

const var GlobalBlockers = [Content.getComponent("BlockGlobalEnvelopePanel"),
                            Content.getComponent("GlobalFilterBlock")];

for (i = 0; i < GlobalBlockers.length; i++)
{
	
	GlobalBlockers[i].setPaintRoutine(function(g)
	{
		
		g.beginLayer(1);
		g.gaussianBlur(5);	
		g.endLayer();
	
	});
	
}

const var ArpPanels = [Content.getComponent("ArpPanel2"),
                       Content.getComponent("ArpPanel1"),
                       Content.getComponent("ArpPanel")];

for (i = 0; i < ArpPanels.length; i++)
{
	
	ArpPanels[i].setPaintRoutine(function(g)
	{
		var a = this.getLocalBounds(0);
		var a2 = [10, 25, this.getWidth() - 20, this.getHeight() - 35];
		
		drawSemiTransparentBG(a, a2);
		
		drawLeftTitle();
		
	});
	
}

const var modControlsPanel = Content.getComponent("modControlsPanel");

modControlsPanel.setPaintRoutine(function(g)
{
		var a = this.getLocalBounds(0);
		var a2 = [10, 25, this.getWidth() - 20, this.getHeight() - 35];
		
		drawBG(a, a2);
		
		drawLeftTitle();
		
});

//MIDI CC Panel

const var configMidiCCPanel = Content.getComponent("configMidiCCPanel");

configMidiCCPanel.setPaintRoutine(function(g)
{
		var a = this.getLocalBounds(0);
		var a2 = [10, 25, this.getWidth() - 20, this.getHeight() - 35];
		
		drawBG(a, a2);
		
		drawCentredTitle();
		
});

//MPE Config Panel

const var mpeConfigPanel = Content.getComponent("mpeConfigPanel");

mpeConfigPanel.setPaintRoutine(function(g)
{
		var a = this.getLocalBounds(0);
		var a2 = [10, 25, this.getWidth() - 20, this.getHeight() - 35];
		
		drawBG(a, a2);
		
		drawCentredTitle();
		
});



//Configuration Panel

const var configContentPanel = Content.getComponent("configContentPanel");

configContentPanel.setPaintRoutine(function(g)
{
		var a = this.getLocalBounds(0);
		var a2 = [10, 25, this.getWidth() - 20, this.getHeight() - 35];

		drawBG(a, a2);
		
		g.setColour(Colours.withAlpha(Theme.DarkColor, 0.3));
		g.fillRoundedRectangle([5, 25, 135, 270], 0);
		
		drawCentredTitle();
		
});

//Authorization Dialog Panel


//MicModPAnel

const var micModulatorsPanel = Content.getComponent("micModulatorsPanel");

micModulatorsPanel.setPaintRoutine(function(g)
{
		var a = this.getLocalBounds(0);
		var a2 = [10, 25, this.getWidth() - 20, this.getHeight() - 35];

		drawBG(a, a2);
		
		drawCentredTitle();
		
});

//Pan Modulators Panel

const var panModulatorsPanel = Content.getComponent("panModulatorsPanel");

panModulatorsPanel.setPaintRoutine(function(g)
{
		var a = this.getLocalBounds(0);
		var a2 = [10, 25, this.getWidth() - 20, this.getHeight() - 35];
		
		drawBG(a, a2);
		
		drawCentredTitle();
		
});

//Velocity Controls Panel

const var velocityControlsPanel = Content.getComponent("velocityControlsPanel");

velocityControlsPanel.setPaintRoutine(function(g)
{
		var a = this.getLocalBounds(0);
		var a2 = [10, 25, this.getWidth() - 20, this.getHeight() - 35];
		
		drawBG(a, a2);
		
		drawCentredTitle();
		
});

//CrossfadeControls Panel

const var crossfadeControlsPanel = Content.getComponent("crossfadeControlsPanel");

crossfadeControlsPanel.setPaintRoutine(function(g)
{
		var a = this.getLocalBounds(0);
		var a2 = [10, 25, this.getWidth() - 20, this.getHeight() - 35];
		
		drawBG(a, a2);
		
		drawCentredTitle();
		
});



//Filter Envelope Controls

const var FilterEnvControlsPanels = [Content.getComponent("filterEnvControlsPanel1"),
                                     Content.getComponent("filterEnvControlsPanel2")];

for (i = 0; i < 2; i++)
{
	
	FilterEnvControlsPanels[i].setPaintRoutine(function(g)
	{
		var a = this.getLocalBounds(0);
		
		var gradient = [Theme.LightColor, 0, this.getHeight() / 2, Theme.MidColor, 0, this.getHeight() / 1];
		var gradient2 = [Colours.withAlpha(Theme.BrightColor, 0.1), 0, 0, Colours.withAlpha(Colours.black, 0.5), 0, this.getHeight() / 1.1];

		g.drawDropShadow(this.getLocalBounds(9), Colours.black, 10);
			
		g.setGradientFill(gradient2);
		g.drawRoundedRectangle(this.getLocalBounds(5), 2, 1);
		
		g.setColour(Theme.MidColor);
		g.fillRoundedRectangle(this.getLocalBounds(5), 2);
		
		g.setColour(Colours.withAlpha(Colours.black, 0.5));
		g.fillRoundedRectangle([15, a[3] / 2 - 15, a[2] - 30, 70], 2);
		
		g.setColour(Theme.TitleColor);
		g.setFont(Theme.mainFont, Theme.controlSize - 1);
		g.drawAlignedText("Envelope Mod", [25, a[3] / 2 - 10, a[2] - 30, 50], "topLeft");
		g.drawAlignedText("Attack", [25, a[3] / 2 - 8, a[2] - 30, 50], "left");
		g.drawAlignedText("Release", [40, a[3] / 2 - 8, a[2] - 30, 50], "centred");
		
	});
	
}

//Macro Controls Panel

const var macroControlsListPanel = Content.getComponent("macroControlsListPanel");

macroControlsListPanel.setPaintRoutine(function(g)
{
		var a = this.getLocalBounds(0);
		var a2 = [10, 25, this.getWidth() - 20, this.getHeight() - 35];
		
		drawBG(a, a2);
		
		drawCentredTitle();
	
});

//LFO Waveform Panel

const var lfoWaveformPanel = Content.getComponent("lfoWaveformPanel");

lfoWaveformPanel.setPaintRoutine(function(g)
{
	var a = this.getLocalBounds(0);
	
	g.setGradientFill([Colours.withAlpha(Theme.FaderColor, 0.8), 0, a[3], Colours.withAlpha(Colours.black, 0.3), 0.8, 0, a[1]]);
	g.fillRoundedRectangle(a, 4);
	
	g.setColour(Colours.withAlpha(Theme.FaderColor4, 0.2));
	g.drawRoundedRectangle(a, 4, 1.5);
	
	g.drawDropShadow([a[0], a[1] / 2, a[2], 5], Colours.withAlpha(Colours.black, 0.3), 5);
	g.drawDropShadow([0, 0, 0, a[3]], Colours.withAlpha(Colours.black, 0.3), 5);
	g.drawDropShadow([a[2] - 5, 0, 0, a[3]], Colours.withAlpha(Colours.black, 0.5), 5);
	
});

//****** Paint Functions *******

inline function drawSemiTransparentBG(a, a2)
{

	local gradient = [Theme.LightColor, 0, this.getHeight() / 2, Theme.MidColor, 0, this.getHeight() / 1];
	local gradient2 = [Colours.withAlpha(Theme.BrightColor, 0.06), 0, 0, Colours.withAlpha(Colours.darkgrey, 0.3), 0, this.getHeight() / 1.1];
	
		g.drawDropShadow(this.getLocalBounds(5), Colours.withAlpha(0xFF202020, 0.3), 5);

		g.setGradientFill(gradient2);
		g.drawRoundedRectangle(this.getLocalBounds(5), cornerData, 1);
		
		g.setColour(Colours.withAlpha(Theme.MidColor, 0.45));
		g.fillRoundedRectangle(this.getLocalBounds(5), cornerData);
		
		g.setColour(Colours.withAlpha(Theme.DarkColor, 0.3));
		g.fillRoundedRectangle([5, 5, this.getWidth() - 10, 20], cornerData);
};

inline function drawSemiTransparentNoTitle(a, a2)
{

	local gradient = [Theme.LightColor, 0, this.getHeight() / 2, Theme.MidColor, 0, this.getHeight() / 1];
	local gradient2 = [Colours.withAlpha(Theme.BrightColor, 0.06), 0, 0, Colours.withAlpha(Colours.darkgrey, 0.3), 0, this.getHeight() / 1.1];
	
	g.drawDropShadow(this.getLocalBounds(5), Colours.withAlpha(0xFF202020, 0.3), 5);
		
	g.setGradientFill(gradient2);
	g.drawRoundedRectangle(this.getLocalBounds(5), cornerData, 1);
		
	g.setColour(Colours.withAlpha(Theme.MidColor, 0.3));
	g.fillRoundedRectangle(this.getLocalBounds(5), cornerData);
};

inline function drawBG(a, a2)
{
	local gradient = [Theme.LightColor, 0, this.getHeight() / 2, Theme.MidColor, 0, this.getHeight() / 1];
	local gradient2 = [Colours.withAlpha(Theme.BrightColor, 0.08), 0, 0, Colours.withAlpha(Colours.darkgrey, 0.5), 0, this.getHeight() / 1.1];
	
	g.drawDropShadow(this.getLocalBounds(5), Colours.withAlpha(Colours.black, 0.6), 10);
	
	g.setGradientFill(gradient2);
	g.drawRoundedRectangle(this.getLocalBounds(5), cornerData, 1);
	
	g.setColour(Theme.MidColor);
	g.fillRoundedRectangle(this.getLocalBounds(5), cornerData);
	
	g.setColour(Colours.withAlpha(Theme.DarkColor, 0.3));
	g.fillRoundedRectangle([5, 5, this.getWidth() - 10, 20], 2);
}

inline function drawCentredTitle()
{
	g.setColour(Theme.TitleColor);
	g.setFont(Theme.mainFont, Theme.titleSize - 1);
	g.drawAlignedText(this.get("text"), [0, 7, this.getWidth(), 20], "centredTop");
}

inline function drawLeftTitle()
{
	g.setColour(Theme.TitleColor);
	g.setFont(Theme.mainFont, Theme.titleSize - 1);
	g.drawAlignedText(this.get("text"), [28, 7, this.getWidth(), 20], "topLeft");
}

}
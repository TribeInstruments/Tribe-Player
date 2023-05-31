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

//Definitios
const var SampleSelectorCombo1 = Content.getComponent("SampleSelectorCombo1");
const var SampleSelectorCombo2 = Content.getComponent("SampleSelectorCombo2");
const var releaseCombo = Content.getComponent("releaseCombo");
const var transitionCombo = Content.getComponent("transitionCombo");
const var TrueLegato = Synth.getMidiProcessor("TrueLegato");
const var TrueLegato1 = Synth.getMidiProcessor("TrueLegato1");
const var TrueLegato2 = Synth.getMidiProcessor("TrueLegato2");
const var Transition = Synth.getMidiProcessor("Transition");

const var initButton = Content.getComponent("initButton");

//Expansions---------------------------------------------------------------
const var expHandler = Engine.createExpansionHandler();
const var currentExpansion = expHandler.getCurrentExpansion();
const var expansionList = Engine.getExpansionList();

reg sampleMapList = [];
reg releaseList = [];
reg transitionList = [];

reg Thumbnail = "";

inline function onsamplemapSelectComboControl(component, value)
{
		if (value)
	{
		if (sampleMapList[value - 1] != "")
		{
			Sampler1.asSampler().loadSampleMap(Thumbnail + sampleMapList[value - 1]);
			
			Console.print(sampleMapList[value - 1]);
			//SamplemapName1.set("text", sampleMap);
		}
			
	}	
};

Content.getComponent("SampleSelectorCombo1").setControlCallback(onsamplemapSelectComboControl);

inline function onsamplemapSelectComboControl2(component, value)
{
		if (value)
	{
		if (sampleMapList[value - 1] != "")
		{
			Sampler2.asSampler().loadSampleMap(Thumbnail + sampleMapList[value - 1]);
			
			Console.print(sampleMapList[value - 1]);

		}
			
	}	
};

Content.getComponent("SampleSelectorCombo2").setControlCallback(onsamplemapSelectComboControl2);

inline function onreleaseComboControl(component, value)
{
		if (value)
	{
		if (releaseList[value - 1] != "")
		{
			Sampler3.asSampler().loadSampleMap(Thumbnail + releaseList[value - 1]);
			
			Console.print(releaseList[value - 1]);

		}
			
	}
};

Content.getComponent("releaseCombo").setControlCallback(onreleaseComboControl);


inline function ontransitionComboControl(component, value)
{
		if (value)
	{
		if (transitionList[value - 1] != "")
		{
			Sampler4.asSampler().loadSampleMap(Thumbnail + transitionList[value - 1]);
			
			Console.print(transitionList[value - 1]);

		}
			
	}
};

Content.getComponent("transitionCombo").setControlCallback(ontransitionComboControl);

//Expansion Functions

const var BrowserImage = Content.getComponent("BrowserImage");
const var BGimage = Content.getComponent("BGImage");
const var BackgroundImage = Content.getComponent("BackgroundImage");

const var BGLogo = Content.getComponent("BGLogo");
const var BrowserPanel = Content.getComponent("BrowserPanel");
const var expansionInfo = Content.getComponent("expansionInfo");

const var presetBrowserButtons = [Content.getComponent("previousPresetButton"),
                                  Content.getComponent("nextPresetButton"),
                                  Content.getComponent("savePresetButton")];


const var channelName = [];

for (i = 0; i < 4; i++)
{
	channelName[i] = Content.getComponent("channelName" + i);
}

for (i = 0; i < 4; i++)
{
	channelName[i].set("fontSize", Theme.smallSize - 1);
}

BGimage.setImageFile("{PROJECT_FOLDER}BG.png", true);
BrowserImage.setImageFile("{PROJECT_FOLDER}BG2.png", true);
BackgroundImage.setImageFile("{PROJECT_FOLDER}BG3.png", true);
BGLogo.setImageFile("{PROJECT_FOLDER}BGlogo.png", true);

expHandler.setExpansionCallback(function(e)
{

	if (!e)
	{
		SampleSelectorCombo1.set("items", "");
		SampleSelectorCombo2.set("items", "");
		releaseCombo.set("items", "");
		transitionCombo.set("items", "");
		
		BrowserImage.setImageFile("{PROJECT_FOLDER}BG2.png", true);
		BGimage.setImageFile("{PROJECT_FOLDER}BG.png", true);
		BackgroundImage.setImageFile("{PROJECT_FOLDER}BG3.png", true);
		BGLogo.setImageFile("{PROJECT_FOLDER}BGlogo.png", true);
		initButton.showControl(true);
		BrowserPanel.setPosition(36, 0, 730, 330);
		//SamplemapName0.set("text", "");
		//SamplemapName1.set("text", "");
		AsSampler1.clearSampleMap();
		AsSampler2.clearSampleMap();
		AsSampler3.clearSampleMap();
		AsSampler4.clearSampleMap();
		
		expansionInfo.set("text", "");
		
		for (i = 0; i < 4; i++)
		{
			channelName[i].set("text", "MIC" + (i+1));

		}
		
		for (i=0; i <presetBrowserButtons.length; i++)
			presetBrowserButtons[i].showControl(false);
	}

	else
	{
		
		Console.print(trace(e.getSampleMapList()));
		
		reg channelData = e.loadDataFile("channelInfo.json");
		reg cName = channelData.channelName;
		
		reg expansionData = e.loadDataFile("expansionInfo.json");
		reg eData = expansionData.expansionInfo;
		
		reg expansionColors = e.loadDataFile("colorInfo.json");
		
		reg manifest = e.loadDataFile("manifest.json");

		reg folder = e.getWildcardReference("BG.png");
		reg folder2 = e.getWildcardReference("BG2.png");
		reg folder3 = e.getWildcardReference("BGlogo.png");
		reg folder4 = e.getWildcardReference("BG3.png");
		
		sampleMapList = manifest.samplemap;
		releaseList = manifest.release;
		transitionList = manifest.transition;
		
			BGimage.setImageFile(folder, true);
			BackgroundImage.setImageFile(folder4, true);
			BrowserImage.setImageFile(folder2, true);
			BGLogo.setImageFile(folder3, true);
			BrowserImage.showControl(true);
			BGimage.showControl(true);
			BGLogo.showControl(true);
			initButton.showControl(false);
			BrowserPanel.setPosition(36, 0, 730, 370);
			Thumbnail = e.getWildcardReference("");
			
			Theme.DarkColor = expansionColors.DarkColor;
			Theme.MidColor = expansionColors.MidColor;
			Theme.LightColor = expansionColors.LightColor;
			Theme.MainColor = expansionColors.MainColor;
			Theme.SecondColor = expansionColors.SecondColor;
			Theme.BrightColor = expansionColors.BrightColor;
			Theme.TextColor = expansionColors.TextColor;
			Theme.TitleColor = expansionColors.TitleColor;
			
			Theme.IconColorOff = expansionColors.IconColorOff;
			Theme.IconColorOn = expansionColors.IconColorOn;
			Theme.IconColorHover = expansionColors.IconColorHover;
			
			Theme.FaderColor = expansionColors.FaderColor;
			Theme.FaderColor2 = expansionColors.FaderColor2;
			Theme.FaderColor3 = expansionColors.FaderColor3;
			Theme.FaderColor4 = expansionColors.FaderColor4;
			
			Theme.SliderPackColor = expansionColors.SliderPackColor;
			Theme.SliderPackColor2 = expansionColors.SliderPackColor2;
			Theme.SliderPackColor3 = expansionColors.SliderPackColor3;
			
			Theme.PinColor = expansionColors.PinColor;
			Theme.PinColor2 = expansionColors.PinColor2;
			Theme.KnobColor = expansionColors.KnobColor;
			Theme.KnobColor2 = expansionColors.KnobColor2;
			Theme.ModColor = expansionColors.ModColor;
			Theme.ModColor2 = expansionColors.ModColor2;
			
			Theme.ButtonColor = expansionColors.ButtonColor;
			Theme.ButtonColor2 = expansionColors.ButtonColor2;
			Theme.ButtonColor3 = expansionColors.ButtonColor3;
			Theme.ButtonColor4 = expansionColors.ButtonColor4;
			
			Theme.SamplerColorA = expansionColors.SamplerColorA;
			Theme.SamplerColorB = expansionColors.SamplerColorB;
			
			Theme.MacroColor = expansionColors.MacroColor;
			Theme.MacroColor2 = expansionColors.MacroColor2;
			Theme.MacroColor3 = expansionColors.MacroColor3;
			Theme.MacroColor4 = expansionColors.MacroColor4;
			Theme.MacroColor5 = expansionColors.MacroColor5;
			
			Theme.TableColor = expansionColors.TableColor;
			Theme.TableColor2 = expansionColors.TableColor2;
			Theme.TableColor3 = expansionColors.TableColor3;
			
			Theme.MeterColor = expansionColors.MeterColor;
			Theme.MeterColor2 = expansionColors.MeterColor2;
			
			//Console.print(expansionColors.BrightColor);
			
			expansionInfo.set("text", eData);
			
			for (i = 0; i < 4; i++)
			{
				channelName[i].set("text", cName[i]);
				
			}
			
			for (i = 0; i < 127; i++)
			{
				Engine.setKeyColour(i, Colours.withAlpha(Colours.antiquewhite, 0.15));
				
				if (Sampler2.asSampler().isNoteNumberMapped(i))
				Engine.setKeyColour(i, Colours.withAlpha(Theme.SamplerColorB, 0.4));
				                   	    
				if (Sampler1.asSampler().isNoteNumberMapped(i))
				Engine.setKeyColour(i, Colours.withAlpha(Theme.SamplerColorA, 0.4));
			
			}
			
			for (i = 0; i < Paint.SidebarPanels.length; i++)
			{
				Paint.SidebarPanels[i].repaint();
			}
			
			//Set Font Colors
			
			Content.getComponent("showPresetPanel").repaint();
			Content.getComponent("MainTabPanel").repaint();
			Content.getComponent("presetLabel").set("textColour", expansionColors.TextColor);
			Content.getComponent("ScriptFloatingTile6").set("itemColour2", expansionColors.TableColor2);
			Content.getComponent("ScriptFloatingTile17").set("itemColour2", expansionColors.TableColor2);
			Content.getComponent("ScriptFloatingTile16").set("itemColour2", expansionColors.TableColor2);
			Content.getComponent("LFOWaveform").set("itemColour", expansionColors.TableColor2);
			
			for (i = 0; i < 2; i++)
				crossfadeLabels[i].set("textColour", expansionColors.TextColor);
			
			//Set Font Size of Macro Controls
			
			for (i = 0; i < Paint.macroLabels.length; i++)
				Paint.macroLabels[i].set("textColour", expansionColors.TextColor);
			
			//Set Font Size of Sampler Options Controls
			
			for (i = 0; i < samplerLabels.length; i++)
				Paint.samplerLabels[i].set("textColour", expansionColors.TextColor);
				
			//Set Font Size of FX Controls
			
			for (i = 0; i < fxLabels.length; i++)
				Paint.fxLabels[i].set("textColour", expansionColors.TextColor);
			
			//Set Font Size of Arpeggiator Controls
			
			for (i = 0; i < arpLabels.length; i++)
				Paint.arpLabels[i].set("textColour", expansionColors.TextColor);
			
			//Set Font Size of Sidebar Controls
			
			for (i = 0; i < sidebarLabels.length; i++)
				Paint.sidebarLabels[i].set("textColour", expansionColors.TextColor);
			
			for (i = 0; i < configLabels.length; i++)
				Paint.configLabels[i].set("textColour", expansionColors.TextColor);

			SlideMPE1.setAttribute(SlideMPE1.GestureCC, 2);
			SlideMPE2.setAttribute(SlideMPE2.GestureCC, 2);
			
			for (i=0; i <presetBrowserButtons.length; i++)
				presetBrowserButtons[i].showControl(true);
			
			Sampler1.setAttribute(Sampler1.CrossfadeGroups, manifest.groupfade);
			Sampler2.setAttribute(Sampler2.CrossfadeGroups, manifest.groupfade);
			
			Sampler1.setAttribute(Sampler1.PitchTracking, manifest.pitchtracking);
			Sampler2.setAttribute(Sampler2.PitchTracking, manifest.pitchtracking);
			
			TrueLegato.setBypassed(1-manifest.trueLegato);
			TrueLegato1.setBypassed(1-manifest.trueLegato);
			TrueLegato2.setBypassed(1-manifest.trueLegato);
			Transition.setBypassed(manifest.trueLegato);
			
			AsTable1.setTablePoint(0, 0, 0, 1, 0.3);
			AsTable1.setTablePoint(0, 1, 0, 0, 0.3);
			AsTable1.setTablePoint(1, 0, 0, 0, 0.7);
			AsTable1.setTablePoint(1, 1, 0, 1, 0.7);
			
			AsTable2.setTablePoint(0, 0, 0, 1, 0.3);
			AsTable2.setTablePoint(0, 1, 0, 0, 0.3);
			AsTable2.setTablePoint(1, 0, 0, 0, 0.7);
			AsTable2.setTablePoint(1, 1, 0, 1, 0.7);
			
			SampleSelectorCombo1.set("items", sampleMapList.join("\n").replace(e.getWildcardReference("")));
			SampleSelectorCombo2.set("items", sampleMapList.join("\n").replace(e.getWildcardReference("")));
			releaseCombo.set("items", releaseList.join("\n").replace(e.getWildcardReference("")));
			transitionCombo.set("items", transitionList.join("\n").replace(e.getWildcardReference("")));

	}		
			
});

inline function onrefreshButtonControl(component, value)
{	
	if(value == 1)
	{
		LAF.loadExpansionIcon(LAF.laf);
	}
	else if(value == 0)
	{
		expHandler.refreshExpansions();
	}
};

Content.getComponent("refreshButton").setControlCallback(onrefreshButtonControl);

//Preset Manager---------------------------------------------------------------
const var presetLabel = Content.getComponent("presetLabel");
presetLabel.set("fontSize", Theme.controlSize);
presetLabel.set("textColour", Theme.TextColor);

inline function onpreviousPresetButtonControl(component, value)
{
	Engine.loadPreviousUserPreset(true);
};

Content.getComponent("previousPresetButton").setControlCallback(onpreviousPresetButtonControl);

inline function onnextPresetButtonControl(component, value)
{
	Engine.loadNextUserPreset(true);
};

Content.getComponent("nextPresetButton").setControlCallback(onnextPresetButtonControl);


inline function onpresetCallbackControl(component, value)
{
	if (Engine.getCurrentUserPresetName() == "")
	{
	presetLabel.set("text", "Load a Preset");
	}
	else
	{ 
	presetLabel.set("text", Engine.getCurrentUserPresetName());
	}
};

Content.getComponent("presetCallback").setControlCallback(onpresetCallbackControl);

inline function onsavePresetButtonControl(component, value)
{
	if(!value)
	return;

	Engine.saveUserPreset(Engine.getCurrentUserPresetName());
};

Content.getComponent("savePresetButton").setControlCallback(onsavePresetButtonControl);




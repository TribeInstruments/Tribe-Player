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

namespace Theme
{
//Fonts

//Unused Fonts

/*
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/SugoRegular.ttf", "SugoRegular");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/SugoLight.ttf", "SugoLight");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/Poppins-Regular.ttf", "Poppins-Regular");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/Poppins-Medium.ttf", "Poppins-Medium");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/Poppins-SemiBold.ttf", "Poppins-SemiBold");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/Poppins-Bold.ttf", "Poppins-Bold");

Engine.loadFontAs("{PROJECT_FOLDER}Fonts/SF-Thin.otf", "SF-Thin");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/SF-Light.otf", "SF-Light");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/SF-Regular.otf", "SF-Regular");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/SF-Medium.otf", "SF-Medium");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/SF-Semibold.otf", "SF-Semibold");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/SF-Bold.otf", "SF-Bold");

Engine.loadFontAs("{PROJECT_FOLDER}Fonts/Avenir Next Condensed.ttf", "Avenir Next Condensed");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/Copperplate.otf", "Copperplate");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/Montserrat.ttf", "Montserrat");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/DISTRO.ttf", "Distro");

*/

//Used Fonts

Engine.loadFontAs("{PROJECT_FOLDER}Fonts/futura.ttf", "Futura");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/InterTight-Thin.ttf", "InterTight-Thin");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/InterTight-Light.ttf", "InterTight-Light");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/InterTight-Regular.ttf", "InterTight-Regular");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/InterTight-Medium.ttf", "InterTight-Medium");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/InterTight-SemiBold.ttf", "InterTight-SemiBold");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/InterTight-Bold.ttf", "InterTight-Bold");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/InterTight-ExtraBold.ttf", "InterTight-ExtraBold");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/InterTight-Black.ttf", "InterTight-Black");

Engine.loadFontAs("{PROJECT_FOLDER}Fonts/Gotham-Thin.ttf", "Gotham-Thin");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/Gotham-XLight.ttf", "Gotham-Light");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/Gotham-Light.ttf", "Gotham-Regular");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/Gotham-Book.ttf", "Gotham-Medium");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/Gotham-Medium.ttf", "Gotham-SemiBold");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/Gotham-Bold.ttf", "Gotham-Bold");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/Gotham-Black.ttf", "Gotham-ExtraBold");
Engine.loadFontAs("{PROJECT_FOLDER}Fonts/Gotham-Ultra.ttf", "Gotham-Black");


//Font Sizes

const fontSize = Engine.getOS() == "WIN" ? 14 : 13;
const titleSize = Engine.getOS() == "WIN" ? 16 : 15;
const smallSize = Engine.getOS() == "WIN" ? 12 : 11;
const controlSize = Engine.getOS() == "WIN" ? 13 : 12;

//Font Names

/*const mainFont = "InterTight-SemiBold";
const mediumFont = "InterTight-Medium";
const lightFont = "InterTight-Light";
const thinFont = "InterTight-Thin";
const regularFont = "InterTight-Regular";
const boldFont = "InterTight-Bold";
const extraBoldFont = "InterTight-ExtraBold";
const blackFont = "InterTight-Black";*/

const mainFont = "Gotham-SemiBold";
const mediumFont = "Gotham-Medium";
const lightFont = "Gotham-Light";
const thinFont = "Gotham-Thin";
const regularFont = "Gotham-Regular";
const boldFont = "Gotham-Bold";
const extraBoldFont = "Gotham-ExtraBold";
const blackFont = "Gotham-Black";

//Custom Colors

var DarkColor = 0xFF2D2D2D;
var MidColor = 0xFF525252;
var LightColor = 0XFF606060;
var MainColor = 0xFFEDBC82;
var SecondColor = 0xFFA7C1B8;
var BrightColor = 0xBDa7c1b9;
var TextColor = 0xFFfffef3;
var TitleColor = 0xFFfffef3;
var IconColorOff = 0x85FFFFFF;
var IconColorOn = 0xFFFFFFFF;
var IconColorHover = 0xFFEDBC82;
var FaderColor = 0x73000000;
var FaderColor2 = 0xA4FFFFFF;
var FaderColor3 = 0x6B090909;
var FaderColor4 = 0x2AFFFFFF;
var SliderPackColor = 0x52FFFFFF;
var SliderPackColor2 = 0x0EFFFFFF;
var SliderPackColor3 = 0x29FFFFFF;
var PinColor = 0xA4FFFFFF;
var PinColor2 = 0xFB131313;
var KnobColor = 0x73000000;
var KnobColor2 = 0xCAD6D8DC;
var ModColor = 0x39FFFFB3;
var ModColor2 = 0xCAD6D8DC;
var ButtonColor = 0xFF353630;
var ButtonColor2 = 0xFFCFA091;
var ButtonColor3 = 0xFFDFBF9A;
var ButtonColor4 = 0xFFFFFFFF;
var SamplerColorA = 0xFFe29983;
var SamplerColorB = 0xFFa7c1b8;
var MacroColor = 0x3C000000;
var MacroColor2 = 0x8CFFFFFF;
var MacroColor3 = 0x00B6B6B6;
var MacroColor4 = 0xA7262626;
var MacroColor5 = 0x8CFFFFFF;
var TableColor = 0x0EADBEB9;
var TableColor2 = 0x82ADBEB9;
var TableColor3 = 0x6EADBEB9;
var MeterColor = 0x64FFFFFF;
var MeterColor2 = 0xFFFFFFFF;

//Popups

Content.setValuePopupData({
    "fontName":"InterTight-ExtraBold",
    "fontSize": fontSize,
    "borderSize": 0,
    "borderRadius": 6,
    "margin":3,
    "bgColour": 0xFF000000,
    "itemColour": 0xFFFFFFFF,
    "itemColour2": 0xFFECF2BA,
     "textColour": 0xFF252A35 
});


}
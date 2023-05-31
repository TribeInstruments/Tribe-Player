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

const var VelocityKnob = Content.addKnob("VelocityKnob", 0, 0);
const var VelocityKnob1 = Content.addKnob("VelocityKnob1", 128, 0);

VelocityKnob.set("text", "text-Velocity");
VelocityKnob.setRange(0, 127, 1);
VelocityKnob.set("suffix", "MAX");

VelocityKnob1.set("text", "text-Velocity");
VelocityKnob1.setRange(0, 127, 1);
VelocityKnob1.set("suffix", "MIN");function onNoteOn()
{
	if (Message.getVelocity() > VelocityKnob.getValue())
	{
		Message.setVelocity(VelocityKnob.getValue());
	}
	else if (Message.getVelocity() < VelocityKnob1.getValue())
	{
		Message.setVelocity(VelocityKnob1.getValue());
	}
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 
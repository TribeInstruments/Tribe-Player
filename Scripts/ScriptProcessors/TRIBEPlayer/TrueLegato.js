/**
 * Author: David Healey
 * License: GPLv3 - https://www.gnu.org/licenses/gpl-3.0.en.html
*/

reg interval;
reg lastNote;function onNoteOn()
{
local n = Message.getNoteNumber();

if (Synth.isLegatoInterval())
{
	interval = Math.abs(n - lastNote);
	Message.setNoteNumber(lastNote);
	Message.setVelocity(interval + (64 * (n > lastNote)));
}
else
{
	Message.ignoreEvent(true);
}

lastNote = n;
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
 
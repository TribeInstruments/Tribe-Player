/**
 * Author: David Healey
 * License: GPLv3 - https://www.gnu.org/licenses/gpl-3.0.en.html
*/

reg eventId = -99;
reg lastNote = -99;function onNoteOn()
{
	Message.makeArtificial();
	
	if (Synth.isLegatoInterval())
	{
		if (eventId != -99)
			Synth.addVolumeFade(eventId, 300, -100);
	
		Synth.addVolumeFade(Message.getEventId(), 0, -99);
		Synth.addVolumeFade(Message.getEventId(), 300, 0);
	}
	
	eventId = Message.getEventId();
	lastNote = Message.getNoteNumber();
}
 function onNoteOff()
{
	if (Message.getNoteNumber() == lastNote)
	{
		Synth.noteOffByEventId(eventId);
	
		eventId = -99;
		lastNote = -99;
	}
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
 
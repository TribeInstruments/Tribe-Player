 reg lastNote;
 reg vel;function onNoteOn()
{
	vel = Message.getVelocity();
	lastNote = Message.getNoteNumber();
	
	Message.ignoreEvent(true);
	
}
 function onNoteOff()
{	
	if(!Synth.isKeyDown(Message.getNoteNumber()))
		Synth.playNote(Message.getNoteNumber(), vel);
	
}
 function onController()
{
	
}
 function onTimer()
{
	Synth.addNoteOff(Message.getChannel(), Message.getNoteNumber(), 10);
}
 function onControl(number, value)
{
	
}
 
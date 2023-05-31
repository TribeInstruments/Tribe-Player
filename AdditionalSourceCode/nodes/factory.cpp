/** Autogenerated Main.cpp. */

// ================================| Include only the DSP files  |================================

#include <hi_dsp_library/hi_dsp_library.h>
#include <hi_faust/hi_faust.h>
#include "includes.h"
// ==========================| Now we can add the rest of the codebase |==========================

#include <JuceHeader.h>

// ======================================| Project Factory |======================================

namespace project
{

struct Factory: public scriptnode::dll::StaticLibraryHostFactory
{
	Factory()
	{
		TempoSyncer::initTempoData();
		// Node registrations -------------------------------------------------------------------
		
		registerPolyNode<project::FaustVerb<1>, project::FaustVerb<NUM_POLYPHONIC_VOICES>>();
		registerPolyNode<project::chorus<1>, wrap::illegal_poly<project::chorus<1>>>();
		registerPolyNode<project::Compressor<1>, wrap::illegal_poly<project::Compressor<1>>>();
		registerPolyNode<project::crusher<1>, wrap::illegal_poly<project::crusher<1>>>();
		registerPolyNode<project::delay<1>, wrap::illegal_poly<project::delay<1>>>();
		registerPolyNode<project::FaustReverb<1>, wrap::illegal_poly<project::FaustReverb<1>>>();
		registerPolyNode<project::Tremolo<1>, wrap::illegal_poly<project::Tremolo<1>>>();
	}
};
}

scriptnode::dll::FactoryBase* hise::FrontendHostFactory::createStaticFactory()
{
	return new project::Factory();
}


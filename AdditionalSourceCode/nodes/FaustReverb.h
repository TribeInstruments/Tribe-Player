#pragma once

// These will improve the readability of the connection definition

#define getT(Idx) template get<Idx>()
#define connectT(Idx, target) template connect<Idx>(target)
#define getParameterT(Idx) template getParameter<Idx>()
#define setParameterT(Idx, value) template setParameter<Idx>(value)
#define setParameterWT(Idx, value) template setWrapParameter<Idx>(value)
using namespace scriptnode;
using namespace snex;
using namespace snex::Types;

namespace FaustReverb_impl
{
// =========================| Node & Parameter type declarations |=========================

DECLARE_PARAMETER_RANGE_SKEW(xfader_c0Range, 
                             -100., 
                             0., 
                             5.42227);

using xfader_c0 = parameter::from0To1<core::gain, 
                                      0, 
                                      xfader_c0Range>;

using xfader_c1 = xfader_c0;

using xfader_multimod = parameter::list<xfader_c0, xfader_c1>;

using xfader_t = control::xfader<xfader_multimod, faders::rms>;

using chain_t = container::chain<parameter::empty, 
                                 wrap::fix<2, core::gain>>;

template <int NV>
using chain1_t = container::chain<parameter::empty, 
                                  wrap::fix<2, filters::svf<NV>>, 
                                  filters::svf<NV>, 
                                  project::FaustVerb<NV>, 
                                  core::gain>;

template <int NV>
using split_t = container::split<parameter::empty, 
                                 wrap::fix<2, chain_t>, 
                                 chain1_t<NV>>;

namespace FaustReverb_t_parameters
{
// Parameter list for FaustReverb_impl::FaustReverb_t -------------------------------------

using Mix = parameter::plain<FaustReverb_impl::xfader_t, 
                             0>;
template <int NV>
using Damp = parameter::plain<project::FaustVerb<NV>, 0>;
template <int NV>
using Diffusion = parameter::plain<project::FaustVerb<NV>, 1>;
template <int NV>
using Feedback = parameter::plain<project::FaustVerb<NV>, 2>;
template <int NV>
using ModDepth = parameter::plain<project::FaustVerb<NV>, 3>;
template <int NV>
using ModFrequency = parameter::plain<project::FaustVerb<NV>, 4>;
template <int NV>
using Size = parameter::plain<project::FaustVerb<NV>, 5>;
template <int NV>
using Time = parameter::plain<project::FaustVerb<NV>, 6>;
template <int NV>
using HiCut = parameter::plain<filters::svf<NV>, 0>;
template <int NV> using LowCut = HiCut<NV>;
template <int NV>
using FaustReverb_t_plist = parameter::list<Mix, 
                                            Damp<NV>, 
                                            Diffusion<NV>, 
                                            Feedback<NV>, 
                                            ModDepth<NV>, 
                                            ModFrequency<NV>, 
                                            Size<NV>, 
                                            Time<NV>, 
                                            HiCut<NV>, 
                                            LowCut<NV>>;
}

template <int NV>
using FaustReverb_t_ = container::chain<FaustReverb_t_parameters::FaustReverb_t_plist<NV>, 
                                        wrap::fix<2, xfader_t>, 
                                        split_t<NV>>;

// =============================| Root node initialiser class |=============================

template <int NV> struct instance: public FaustReverb_impl::FaustReverb_t_<NV>
{
	
	struct metadata
	{
		static const int NumTables = 0;
		static const int NumSliderPacks = 0;
		static const int NumAudioFiles = 0;
		static const int NumFilters = 0;
		static const int NumDisplayBuffers = 0;
		
		SNEX_METADATA_ID(FaustReverb);
		SNEX_METADATA_NUM_CHANNELS(2);
		SNEX_METADATA_ENCODED_PARAMETERS(162)
		{
			0x005B, 0x0000, 0x4D00, 0x7869, 0x0000, 0x0000, 0x0000, 0x8000, 
            0x9C3F, 0x0192, 0x003F, 0x8000, 0x003F, 0x0000, 0x5B00, 0x0001, 
            0x0000, 0x6144, 0x706D, 0x0000, 0x0000, 0x0000, 0x8000, 0x003F, 
            0x0000, 0x003F, 0x8000, 0x0A3F, 0x23D7, 0x5B3C, 0x0002, 0x0000, 
            0x6944, 0x6666, 0x7375, 0x6F69, 0x006E, 0x0000, 0x0000, 0x0000, 
            0x3F80, 0x0000, 0x3F00, 0x0000, 0x3F80, 0xD70A, 0x3C23, 0x035B, 
            0x0000, 0x4600, 0x6565, 0x6264, 0x6361, 0x006B, 0x0000, 0x0000, 
            0x0000, 0x3F80, 0x3D70, 0x3F0A, 0x0000, 0x3F80, 0xD70A, 0x3C23, 
            0x045B, 0x0000, 0x4D00, 0x646F, 0x6544, 0x7470, 0x0068, 0x0000, 
            0x0000, 0x0000, 0x3F80, 0x8F5C, 0x3F02, 0x0000, 0x3F80, 0xD70A, 
            0x3C23, 0x055B, 0x0000, 0x4D00, 0x646F, 0x7246, 0x7165, 0x6575, 
            0x636E, 0x0079, 0xCCCD, 0x3DCC, 0x0000, 0x4120, 0x51EB, 0x40B0, 
            0x0000, 0x3F80, 0xD70A, 0x3C23, 0x065B, 0x0000, 0x5300, 0x7A69, 
            0x0065, 0x0000, 0x3F00, 0x0000, 0x40A0, 0xA3D7, 0x4030, 0x0000, 
            0x3F80, 0xD70A, 0x3C23, 0x075B, 0x0000, 0x5400, 0x6D69, 0x0065, 
            0xCCCD, 0x3DCC, 0x0000, 0x4270, 0xCCCD, 0x3DCC, 0x0000, 0x3F80, 
            0xD70A, 0x3C23, 0x085B, 0x0000, 0x4800, 0x4369, 0x7475, 0x0000, 
            0xA000, 0x0041, 0x9C40, 0x0046, 0x9C40, 0x1A46, 0x6B6C, 0x003E, 
            0x0000, 0x5B00, 0x0009, 0x0000, 0x6F4C, 0x4377, 0x7475, 0x0000, 
            0xA000, 0x0041, 0x9C40, 0x0046, 0xA000, 0x1A41, 0x6B6C, 0x003E, 
            0x0000, 0x0000
		};
	};
	
	instance()
	{
		// Node References ----------------------------------------------------------------
		
		auto& xfader = this->getT(0);                // FaustReverb_impl::xfader_t
		auto& split = this->getT(1);                 // FaustReverb_impl::split_t<NV>
		auto& chain = this->getT(1).getT(0);         // FaustReverb_impl::chain_t
		auto& gain = this->getT(1).getT(0).getT(0);  // core::gain
		auto& chain1 = this->getT(1).getT(1);        // FaustReverb_impl::chain1_t<NV>
		auto& svf1 = this->getT(1).getT(1).getT(0);  // filters::svf<NV>
		auto& svf = this->getT(1).getT(1).getT(1);   // filters::svf<NV>
		auto& faust = this->getT(1).getT(1).getT(2); // project::FaustVerb<NV>
		auto& gain1 = this->getT(1).getT(1).getT(3); // core::gain
		
		// Parameter Connections ----------------------------------------------------------
		
		this->getParameterT(0).connectT(0, xfader); // Mix -> xfader::Value
		
		this->getParameterT(1).connectT(0, faust); // Damp -> faust::Damp
		
		this->getParameterT(2).connectT(0, faust); // Diffusion -> faust::Difussion
		
		this->getParameterT(3).connectT(0, faust); // Feedback -> faust::Feedback
		
		this->getParameterT(4).connectT(0, faust); // ModDepth -> faust::ModDepth
		
		this->getParameterT(5).connectT(0, faust); // ModFrequency -> faust::ModFreq
		
		this->getParameterT(6).connectT(0, faust); // Size -> faust::Size
		
		this->getParameterT(7).connectT(0, faust); // Time -> faust::Time
		
		this->getParameterT(8).connectT(0, svf1); // HiCut -> svf1::Frequency
		
		this->getParameterT(9).connectT(0, svf); // LowCut -> svf::Frequency
		
		// Modulation Connections ---------------------------------------------------------
		
		auto& xfader_p = xfader.getWrappedObject().getParameter();
		xfader_p.getParameterT(0).connectT(0, gain);  // xfader -> gain::Gain
		xfader_p.getParameterT(1).connectT(0, gain1); // xfader -> gain1::Gain
		
		// Default Values -----------------------------------------------------------------
		
		; // xfader::Value is automated
		
		;                           // gain::Gain is automated
		gain.setParameterT(1, 20.); // core::gain::Smoothing
		gain.setParameterT(2, 0.);  // core::gain::ResetValue
		
		;                            // svf1::Frequency is automated
		svf1.setParameterT(1, 1.);   // filters::svf::Q
		svf1.setParameterT(2, 0.);   // filters::svf::Gain
		svf1.setParameterT(3, 0.01); // filters::svf::Smoothing
		svf1.setParameterT(4, 0.);   // filters::svf::Mode
		svf1.setParameterT(5, 1.);   // filters::svf::Enabled
		
		;                               // svf::Frequency is automated
		svf.setParameterT(1, 0.979898); // filters::svf::Q
		svf.setParameterT(2, 0.);       // filters::svf::Gain
		svf.setParameterT(3, 0.01);     // filters::svf::Smoothing
		svf.setParameterT(4, 1.);       // filters::svf::Mode
		svf.setParameterT(5, 1.);       // filters::svf::Enabled
		
		; // faust::Damp is automated
		; // faust::Difussion is automated
		; // faust::Feedback is automated
		; // faust::ModDepth is automated
		; // faust::ModFreq is automated
		; // faust::Size is automated
		; // faust::Time is automated
		
		;                            // gain1::Gain is automated
		gain1.setParameterT(1, 20.); // core::gain::Smoothing
		gain1.setParameterT(2, 0.);  // core::gain::ResetValue
		
		this->setParameterT(0, 0.506143);
		this->setParameterT(1, 0.5);
		this->setParameterT(2, 0.5);
		this->setParameterT(3, 0.54);
		this->setParameterT(4, 0.51);
		this->setParameterT(5, 5.51);
		this->setParameterT(6, 2.76);
		this->setParameterT(7, 0.1);
		this->setParameterT(8, 20000.);
		this->setParameterT(9, 20.);
	}
	
	static constexpr bool isPolyphonic() { return NV > 1; };
	
	static constexpr bool hasTail() { return true; };
	
	static constexpr bool isSuspendedOnSilence() { return false; };
};
}

#undef getT
#undef connectT
#undef setParameterT
#undef setParameterWT
#undef getParameterT
// ==================================| Public Definition |==================================

namespace project
{
// polyphonic template declaration

template <int NV>
using FaustReverb = wrap::node<FaustReverb_impl::instance<NV>>;
}



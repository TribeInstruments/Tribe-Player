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

namespace crusher_impl
{
// ==============================| Node & Parameter type declarations |==============================

DECLARE_PARAMETER_RANGE_SKEW(xfader_c0Range, 
                             -100., 
                             0., 
                             5.42227);

using xfader_c0 = parameter::from0To1<core::gain, 
                                      0, 
                                      xfader_c0Range>;

DECLARE_PARAMETER_RANGE_SKEW(xfader_c1Range, 
                             -100., 
                             -6., 
                             5.42227);

using xfader_c1 = parameter::from0To1<core::gain, 
                                      0, 
                                      xfader_c1Range>;

using xfader_multimod = parameter::list<xfader_c0, xfader_c1>;

using xfader_t = control::xfader<xfader_multimod, faders::linear>;

template <int NV>
using split1_t = container::split<parameter::empty, 
                                  wrap::fix<2, fx::bitcrush<NV>>, 
                                  fx::sampleandhold<NV>>;

template <int NV>
using chain_t = container::chain<parameter::empty, 
                                 wrap::fix<2, split1_t<NV>>, 
                                 core::gain>;

using chain1_t = container::chain<parameter::empty, 
                                  wrap::fix<2, core::gain>>;

template <int NV>
using split_t = container::split<parameter::empty, 
                                 wrap::fix<2, chain_t<NV>>, 
                                 chain1_t>;

template <int NV>
using wrapsplit2_t_ = container::chain<parameter::empty, 
                                       wrap::fix<2, split_t<NV>>>;

template <int NV>
using wrapsplit2_t = wrap::frame<2, wrapsplit2_t_<NV>>;

template <int NV>
using wrapsplit1_t = container::chain<parameter::empty, 
                                      wrap::fix<2, xfader_t>, 
                                      wrapsplit2_t<NV>>;

namespace crusher_t_parameters
{
// Parameter list for crusher_impl::crusher_t ------------------------------------------------------

using CrusherMix = parameter::plain<crusher_impl::xfader_t, 0>;
template <int NV>
using CrusherBitDepth = parameter::plain<fx::bitcrush<NV>, 0>;
template <int NV>
using CrusherDegrade = parameter::plain<fx::sampleandhold<NV>, 0>;
template <int NV>
using CrusherMode = parameter::plain<fx::bitcrush<NV>, 1>;
template <int NV>
using crusher_t_plist = parameter::list<CrusherMix, 
                                        CrusherBitDepth<NV>, 
                                        CrusherDegrade<NV>, 
                                        CrusherMode<NV>>;
}

template <int NV>
using crusher_t_ = container::chain<crusher_t_parameters::crusher_t_plist<NV>, 
                                    wrap::fix<2, wrapsplit1_t<NV>>>;

// =================================| Root node initialiser class |=================================

template <int NV> struct instance: public crusher_impl::crusher_t_<NV>
{
	
	struct metadata
	{
		static const int NumTables = 0;
		static const int NumSliderPacks = 0;
		static const int NumAudioFiles = 0;
		static const int NumFilters = 0;
		static const int NumDisplayBuffers = 0;
		
		SNEX_METADATA_ID(crusher);
		SNEX_METADATA_NUM_CHANNELS(2);
		SNEX_METADATA_ENCODED_PARAMETERS(78)
		{
			0x005B, 0x0000, 0x4300, 0x7572, 0x6873, 0x7265, 0x694D, 0x0078, 
            0x0000, 0x0000, 0x0000, 0x3F80, 0x0000, 0x0000, 0x0000, 0x3F80, 
            0x0000, 0x0000, 0x015B, 0x0000, 0x4300, 0x7572, 0x6873, 0x7265, 
            0x6942, 0x4474, 0x7065, 0x6874, 0x0000, 0x8000, 0x0040, 0x8000, 
            0x6741, 0x2666, 0x0041, 0x8000, 0xCD3F, 0xCCCC, 0x5B3D, 0x0002, 
            0x0000, 0x7243, 0x7375, 0x6568, 0x4472, 0x6765, 0x6172, 0x6564, 
            0x0000, 0x8000, 0x003F, 0x8000, 0x0042, 0x8000, 0x003F, 0x8000, 
            0x003F, 0x8000, 0x5B3F, 0x0003, 0x0000, 0x7243, 0x7375, 0x6568, 
            0x4D72, 0x646F, 0x0065, 0x0000, 0x0000, 0x0000, 0x3F80, 0x0000, 
            0x0000, 0x0000, 0x3F80, 0x0000, 0x3F80, 0x0000
		};
	};
	
	instance()
	{
		// Node References -------------------------------------------------------------------------
		
		auto& wrapsplit1 = this->getT(0);                                            // crusher_impl::wrapsplit1_t<NV>
		auto& xfader = this->getT(0).getT(0);                                        // crusher_impl::xfader_t
		auto& wrapsplit2 = this->getT(0).getT(1);                                    // crusher_impl::wrapsplit2_t<NV>
		auto& split = this->getT(0).getT(1).getT(0);                                 // crusher_impl::split_t<NV>
		auto& chain = this->getT(0).getT(1).getT(0).getT(0);                         // crusher_impl::chain_t<NV>
		auto& split1 = this->getT(0).getT(1).getT(0).getT(0).getT(0);                // crusher_impl::split1_t<NV>
		auto& bitcrush = this->getT(0).getT(1).getT(0).getT(0).getT(0).getT(0);      // fx::bitcrush<NV>
		auto& sampleandhold = this->getT(0).getT(1).getT(0).getT(0).getT(0).getT(1); // fx::sampleandhold<NV>
		auto& gain1 = this->getT(0).getT(1).getT(0).getT(0).getT(1);                 // core::gain
		auto& chain1 = this->getT(0).getT(1).getT(0).getT(1);                        // crusher_impl::chain1_t
		auto& gain = this->getT(0).getT(1).getT(0).getT(1).getT(0);                  // core::gain
		
		// Parameter Connections -------------------------------------------------------------------
		
		this->getParameterT(0).connectT(0, xfader); // CrusherMix -> xfader::Value
		
		this->getParameterT(1).connectT(0, bitcrush); // CrusherBitDepth -> bitcrush::BitDepth
		
		this->getParameterT(2).connectT(0, sampleandhold); // CrusherDegrade -> sampleandhold::Counter
		
		this->getParameterT(3).connectT(0, bitcrush); // CrusherMode -> bitcrush::Mode
		
		// Modulation Connections ------------------------------------------------------------------
		
		auto& xfader_p = xfader.getWrappedObject().getParameter();
		xfader_p.getParameterT(0).connectT(0, gain);  // xfader -> gain::Gain
		xfader_p.getParameterT(1).connectT(0, gain1); // xfader -> gain1::Gain
		
		// Default Values --------------------------------------------------------------------------
		
		; // xfader::Value is automated
		
		; // bitcrush::BitDepth is automated
		; // bitcrush::Mode is automated
		
		; // sampleandhold::Counter is automated
		
		;                              // gain1::Gain is automated
		gain1.setParameterT(1, 20.);   // core::gain::Smoothing
		gain1.setParameterT(2, -100.); // core::gain::ResetValue
		
		;                           // gain::Gain is automated
		gain.setParameterT(1, 20.); // core::gain::Smoothing
		gain.setParameterT(2, 0.);  // core::gain::ResetValue
		
		this->setParameterT(0, 0.);
		this->setParameterT(1, 10.4);
		this->setParameterT(2, 1.);
		this->setParameterT(3, 0.);
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
// ======================================| Public Definition |======================================

namespace project
{
// polyphonic template declaration

template <int NV>
using crusher = wrap::node<crusher_impl::instance<NV>>;
}



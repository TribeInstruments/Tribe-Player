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

namespace chorus_impl
{
// ==============================| Node & Parameter type declarations |==============================

DECLARE_PARAMETER_RANGE(smoothed_parameter_mod_0Range, 
                        0., 
                        100.);

using smoothed_parameter_mod_0 = parameter::from0To1<jdsp::jchorus, 
                                                     0, 
                                                     smoothed_parameter_mod_0Range>;

using smoothed_parameter_mod_1 = smoothed_parameter_mod_0;

using smoothed_parameter_mod = parameter::chain<ranges::Identity, 
                                                smoothed_parameter_mod_0, 
                                                smoothed_parameter_mod_1>;

template <int NV>
using smoothed_parameter_t = wrap::mod<smoothed_parameter_mod, 
                                       control::smoothed_parameter<NV, smoothers::linear_ramp<NV>>>;

using multi_t = container::multi<parameter::empty, 
                                 wrap::fix<1, jdsp::jchorus>, 
                                 wrap::fix<1, jdsp::jchorus>>;

namespace chorus_t_parameters
{
// Parameter list for chorus_impl::chorus_t --------------------------------------------------------

using ChorusMix = parameter::chain<ranges::Identity, 
                                   parameter::plain<jdsp::jchorus, 4>, 
                                   parameter::plain<jdsp::jchorus, 4>>;

using ChorusDepth = parameter::chain<ranges::Identity, 
                                     parameter::plain<jdsp::jchorus, 1>, 
                                     parameter::plain<jdsp::jchorus, 1>>;

template <int NV>
using ChorusDelay = parameter::plain<chorus_impl::smoothed_parameter_t<NV>, 
                                     0>;
template <int NV>
using chorus_t_plist = parameter::list<ChorusMix, 
                                       ChorusDepth, 
                                       ChorusDelay<NV>>;
}

template <int NV>
using chorus_t_ = container::chain<chorus_t_parameters::chorus_t_plist<NV>, 
                                   wrap::fix<2, smoothed_parameter_t<NV>>, 
                                   multi_t>;

// =================================| Root node initialiser class |=================================

template <int NV> struct instance: public chorus_impl::chorus_t_<NV>
{
	
	struct metadata
	{
		static const int NumTables = 0;
		static const int NumSliderPacks = 0;
		static const int NumAudioFiles = 0;
		static const int NumFilters = 0;
		static const int NumDisplayBuffers = 0;
		
		SNEX_METADATA_ID(chorus);
		SNEX_METADATA_NUM_CHANNELS(2);
		SNEX_METADATA_ENCODED_PARAMETERS(56)
		{
			0x005B, 0x0000, 0x4300, 0x6F68, 0x7572, 0x4D73, 0x7869, 0x0000, 
            0x0000, 0x0000, 0x8000, 0x003F, 0x0000, 0x0000, 0x8000, 0x003F, 
            0x0000, 0x5B00, 0x0001, 0x0000, 0x6843, 0x726F, 0x7375, 0x6544, 
            0x7470, 0x0068, 0x0000, 0x0000, 0x0000, 0x3F80, 0xF829, 0x3EC0, 
            0x0000, 0x3F80, 0x0000, 0x0000, 0x025B, 0x0000, 0x4300, 0x6F68, 
            0x7572, 0x4473, 0x6C65, 0x7961, 0x0000, 0x0000, 0x0000, 0x8000, 
            0x893F, 0xB1F5, 0x003E, 0x8000, 0x003F, 0x0000, 0x0000, 0x0000
		};
	};
	
	instance()
	{
		// Node References -------------------------------------------------------------------------
		
		auto& smoothed_parameter = this->getT(0); // chorus_impl::smoothed_parameter_t<NV>
		auto& multi = this->getT(1);              // chorus_impl::multi_t
		auto& jchorus = this->getT(1).getT(0);    // jdsp::jchorus
		auto& jchorus1 = this->getT(1).getT(1);   // jdsp::jchorus
		
		// Parameter Connections -------------------------------------------------------------------
		
		auto& ChorusMix_p = this->getParameterT(0);
		ChorusMix_p.connectT(0, jchorus);  // ChorusMix -> jchorus::Mix
		ChorusMix_p.connectT(1, jchorus1); // ChorusMix -> jchorus1::Mix
		
		auto& ChorusDepth_p = this->getParameterT(1);
		ChorusDepth_p.connectT(0, jchorus);  // ChorusDepth -> jchorus::Depth
		ChorusDepth_p.connectT(1, jchorus1); // ChorusDepth -> jchorus1::Depth
		
		this->getParameterT(2).connectT(0, smoothed_parameter); // ChorusDelay -> smoothed_parameter::Value
		
		// Modulation Connections ------------------------------------------------------------------
		
		smoothed_parameter.getParameter().connectT(0, jchorus);  // smoothed_parameter -> jchorus::CentreDelay
		smoothed_parameter.getParameter().connectT(1, jchorus1); // smoothed_parameter -> jchorus1::CentreDelay
		
		// Default Values --------------------------------------------------------------------------
		
		;                                           // smoothed_parameter::Value is automated
		smoothed_parameter.setParameterT(1, 479.5); // control::smoothed_parameter::SmoothingTime
		smoothed_parameter.setParameterT(2, 1.);    // control::smoothed_parameter::Enabled
		
		;                                    // jchorus::CentreDelay is automated
		;                                    // jchorus::Depth is automated
		jchorus.setParameterT(2, 0.0455781); // jdsp::jchorus::Feedback
		jchorus.setParameterT(3, 1.51093);   // jdsp::jchorus::Rate
		;                                    // jchorus::Mix is automated
		
		;                                     // jchorus1::CentreDelay is automated
		;                                     // jchorus1::Depth is automated
		jchorus1.setParameterT(2, 0.0455781); // jdsp::jchorus::Feedback
		jchorus1.setParameterT(3, 0.972576);  // jdsp::jchorus::Rate
		;                                     // jchorus1::Mix is automated
		
		this->setParameterT(0, 0.);
		this->setParameterT(1, 0.376893);
		this->setParameterT(2, 0.347576);
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
using chorus = wrap::node<chorus_impl::instance<NV>>;
}



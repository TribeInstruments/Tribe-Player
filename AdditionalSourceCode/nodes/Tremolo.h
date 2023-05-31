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

namespace Tremolo_impl
{
// ==============================| Node & Parameter type declarations |==============================

template <int NV>
using oscillator_t = wrap::data<core::oscillator<NV>, 
                                data::external::displaybuffer<0>>;
template <int NV>
using converter_t = control::converter<parameter::plain<oscillator_t<NV>, 1>, 
                                       conversion_logic::ms2freq>;
template <int NV>
using tempo_sync_t = wrap::mod<parameter::plain<converter_t<NV>, 0>, 
                               control::tempo_sync<NV>>;
DECLARE_PARAMETER_RANGE_STEP(bipolar_modRange, 
                             0., 
                             2000., 
                             0.1);

template <int NV>
using bipolar_mod = parameter::from0To1<tempo_sync_t<NV>, 
                                        3, 
                                        bipolar_modRange>;

template <int NV>
using bipolar_t = control::bipolar<NV, bipolar_mod<NV>>;

DECLARE_PARAMETER_RANGE_SKEW(intensity_modRange, 
                             -100., 
                             0., 
                             1.43617);

using intensity_mod = parameter::from0To1<core::gain, 
                                          0, 
                                          intensity_modRange>;

template <int NV>
using intensity_t = control::intensity<NV, intensity_mod>;
template <int NV>
using peak_t = wrap::mod<parameter::plain<intensity_t<NV>, 0>, 
                         wrap::no_data<core::peak>>;

template <int NV>
using modchain_t_ = container::chain<parameter::empty, 
                                     wrap::fix<1, oscillator_t<NV>>, 
                                     math::sig2mod<NV>, 
                                     peak_t<NV>>;

template <int NV>
using modchain_t = wrap::control_rate<modchain_t_<NV>>;

namespace Tremolo_t_parameters
{
// Parameter list for Tremolo_impl::Tremolo_t ------------------------------------------------------

template <int NV>
using Intensity = parameter::plain<Tremolo_impl::intensity_t<NV>, 
                                   1>;
template <int NV>
using Mode = parameter::plain<Tremolo_impl::oscillator_t<NV>, 
                              0>;
template <int NV>
using Speed = parameter::plain<Tremolo_impl::bipolar_t<NV>, 
                               0>;
template <int NV>
using TempoSync = parameter::plain<Tremolo_impl::tempo_sync_t<NV>, 
                                   2>;
template <int NV>
using Phase = parameter::plain<Tremolo_impl::oscillator_t<NV>, 
                               4>;
using Smooth = parameter::plain<core::gain, 1>;
template <int NV>
using SpeedSynced = parameter::plain<Tremolo_impl::tempo_sync_t<NV>, 
                                     0>;
template <int NV>
using Tremolo_t_plist = parameter::list<Intensity<NV>, 
                                        Mode<NV>, 
                                        Speed<NV>, 
                                        TempoSync<NV>, 
                                        Phase<NV>, 
                                        Smooth, 
                                        SpeedSynced<NV>>;
}

template <int NV>
using Tremolo_t_ = container::chain<Tremolo_t_parameters::Tremolo_t_plist<NV>, 
                                    wrap::fix<2, bipolar_t<NV>>, 
                                    tempo_sync_t<NV>, 
                                    converter_t<NV>, 
                                    modchain_t<NV>, 
                                    intensity_t<NV>, 
                                    core::gain>;

// =================================| Root node initialiser class |=================================

template <int NV> struct instance: public Tremolo_impl::Tremolo_t_<NV>
{
	
	struct metadata
	{
		static const int NumTables = 0;
		static const int NumSliderPacks = 0;
		static const int NumAudioFiles = 0;
		static const int NumFilters = 0;
		static const int NumDisplayBuffers = 1;
		
		SNEX_METADATA_ID(Tremolo);
		SNEX_METADATA_NUM_CHANNELS(2);
		SNEX_METADATA_ENCODED_PARAMETERS(116)
		{
			0x005B, 0x0000, 0x4900, 0x746E, 0x6E65, 0x6973, 0x7974, 0x0000, 
            0x0000, 0x0000, 0x8000, 0x003F, 0x0000, 0x0000, 0x8000, 0x003F, 
            0x0000, 0x5B00, 0x0001, 0x0000, 0x6F4D, 0x6564, 0x0000, 0x0000, 
            0x0000, 0x8000, 0x0040, 0x0000, 0x0000, 0x8000, 0x003F, 0x8000, 
            0x5B3F, 0x0002, 0x0000, 0x7053, 0x6565, 0x0064, 0x0000, 0x0000, 
            0x0000, 0x3F80, 0x40C9, 0x3EFA, 0x0000, 0x3F80, 0x0000, 0x0000, 
            0x035B, 0x0000, 0x5400, 0x6D65, 0x6F70, 0x7953, 0x636E, 0x0000, 
            0x0000, 0x0000, 0x8000, 0x003F, 0x8000, 0x003F, 0x8000, 0x003F, 
            0x8000, 0x5B3F, 0x0004, 0x0000, 0x6850, 0x7361, 0x0065, 0x0000, 
            0x0000, 0x0000, 0x3F80, 0x0000, 0x0000, 0x0000, 0x3F80, 0x0000, 
            0x0000, 0x055B, 0x0000, 0x5300, 0x6F6D, 0x746F, 0x0068, 0x0000, 
            0x0000, 0x0000, 0x447A, 0x999A, 0x41CD, 0x209B, 0x3E9A, 0xCCCD, 
            0x3DCC, 0x065B, 0x0000, 0x5300, 0x6570, 0x6465, 0x7953, 0x636E, 
            0x6465, 0x0000, 0x0000, 0x0000, 0x9000, 0x0041, 0xC000, 0x0040, 
            0x8000, 0x003F, 0x8000, 0x003F
		};
	};
	
	instance()
	{
		// Node References -------------------------------------------------------------------------
		
		auto& bipolar = this->getT(0);            // Tremolo_impl::bipolar_t<NV>
		auto& tempo_sync = this->getT(1);         // Tremolo_impl::tempo_sync_t<NV>
		auto& converter = this->getT(2);          // Tremolo_impl::converter_t<NV>
		auto& modchain = this->getT(3);           // Tremolo_impl::modchain_t<NV>
		auto& oscillator = this->getT(3).getT(0); // Tremolo_impl::oscillator_t<NV>
		auto& sig2mod = this->getT(3).getT(1);    // math::sig2mod<NV>
		auto& peak = this->getT(3).getT(2);       // Tremolo_impl::peak_t<NV>
		auto& intensity = this->getT(4);          // Tremolo_impl::intensity_t<NV>
		auto& gain = this->getT(5);               // core::gain
		
		// Parameter Connections -------------------------------------------------------------------
		
		this->getParameterT(0).connectT(0, intensity); // Intensity -> intensity::Intensity
		
		this->getParameterT(1).connectT(0, oscillator); // Mode -> oscillator::Mode
		
		this->getParameterT(2).connectT(0, bipolar); // Speed -> bipolar::Value
		
		this->getParameterT(3).connectT(0, tempo_sync); // TempoSync -> tempo_sync::Enabled
		
		this->getParameterT(4).connectT(0, oscillator); // Phase -> oscillator::Phase
		
		this->getParameterT(5).connectT(0, gain); // Smooth -> gain::Smoothing
		
		this->getParameterT(6).connectT(0, tempo_sync); // SpeedSynced -> tempo_sync::Tempo
		
		// Modulation Connections ------------------------------------------------------------------
		
		converter.getWrappedObject().getParameter().connectT(0, oscillator); // converter -> oscillator::Frequency
		tempo_sync.getParameter().connectT(0, converter);                    // tempo_sync -> converter::Value
		bipolar.getWrappedObject().getParameter().connectT(0, tempo_sync);   // bipolar -> tempo_sync::UnsyncedTime
		intensity.getWrappedObject().getParameter().connectT(0, gain);       // intensity -> gain::Gain
		peak.getParameter().connectT(0, intensity);                          // peak -> intensity::Value
		
		// Default Values --------------------------------------------------------------------------
		
		;                                  // bipolar::Value is automated
		bipolar.setParameterT(1, -1.);     // control::bipolar::Scale
		bipolar.setParameterT(2, 1.00206); // control::bipolar::Gamma
		
		;                                // tempo_sync::Tempo is automated
		tempo_sync.setParameterT(1, 1.); // control::tempo_sync::Multiplier
		;                                // tempo_sync::Enabled is automated
		;                                // tempo_sync::UnsyncedTime is automated
		
		; // converter::Value is automated
		
		;                                // oscillator::Mode is automated
		;                                // oscillator::Frequency is automated
		oscillator.setParameterT(2, 1.); // core::oscillator::FreqRatio
		oscillator.setParameterT(3, 1.); // core::oscillator::Gate
		;                                // oscillator::Phase is automated
		oscillator.setParameterT(5, 1.); // core::oscillator::Gain
		
		sig2mod.setParameterT(0, 1.); // math::sig2mod::Value
		
		; // intensity::Value is automated
		; // intensity::Intensity is automated
		
		;                          // gain::Gain is automated
		;                          // gain::Smoothing is automated
		gain.setParameterT(2, 0.); // core::gain::ResetValue
		
		this->setParameterT(0, 0.);
		this->setParameterT(1, 0.);
		this->setParameterT(2, 0.488776);
		this->setParameterT(3, 1.);
		this->setParameterT(4, 0.);
		this->setParameterT(5, 25.7);
		this->setParameterT(6, 6.);
		this->setExternalData({}, -1);
	}
	
	static constexpr bool isPolyphonic() { return NV > 1; };
	
	static constexpr bool isProcessingHiseEvent() { return true; };
	
	static constexpr bool hasTail() { return true; };
	
	static constexpr bool isSuspendedOnSilence() { return false; };
	
	void setExternalData(const ExternalData& b, int index)
	{
		// External Data Connections ---------------------------------------------------------------
		
		this->getT(3).getT(0).setExternalData(b, index); // Tremolo_impl::oscillator_t<NV>
		this->getT(3).getT(2).setExternalData(b, index); // Tremolo_impl::peak_t<NV>
	}
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
using Tremolo = wrap::node<Tremolo_impl::instance<NV>>;
}



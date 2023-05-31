// Faust Source File: FaustVerb
// Created with HISE on 2023-02-26
import("stdfaust.lib");
dt = hslider("Time",0.1,0.1,60,0.01);
damp = hslider("Damp",0,0,1,0.01);
size = hslider("Size",2.5,0.5,5,0.01);
early_diff = hslider("Difussion",0.5,0,1,0.01);
feedback = hslider("Feedback",0.5,0,1,0.01);
mod_depth = hslider("Mod Depth",0.5,0,1,0.01);
mod_freq = hslider("Mod Freq",5,0.1,10,0.01);


process = re.greyhole(dt, damp, size, early_diff, feedback, mod_depth, mod_freq);

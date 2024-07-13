'use client';
import React from 'react';
import { WavyBackground } from '@/components/ui/wavy-background';
import { Box } from '@mui/material';

export default function About() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40 ">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        About us
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Pemco Construction LLC is a well-established electrical, plumbing,
        handyman, and refrigeration services provider, delivering exceptional
        solutions that prioritize safety, efficiency, and unwavering quality.
        Our unwavering commitment lies in delivering exceptional services
        solutions that prioritize safety, efficiency, and unwavering quality.
        Our team of highly qualified and extensively trained technicians possess
        the expertise and experience necessary to address a comprehensive range
        of electrical needs. We utilize advanced tools and technologies to
        ensure each project is meticulously completed according to industry best
        practices and rigorous safety protocols. Pemco Construction LLC
        recognizes the critical role electrical systems play in the smooth
        operation of your home or business. We are dedicated to exceeding your
        expectations by providing reliable and long-lasting service solutions
        that foster a safe and secure environment.
      </p>
    </WavyBackground>
  );
}

import CoreTracks from '@/components/widgets/CoreTracks'
import Hero from '@/components/widgets/Hero'
import Image from 'next/image'
import SpecializedTracks from '@/components/widgets/SpecializedTracks'
import ProgramOutcome from '@/components/widgets/ProgramOutcome'

export default function Home() {
  return ( 
    <>
    <main>
      <Hero/>
      <CoreTracks/>
      <SpecializedTracks/>
      <ProgramOutcome/>
    </main>
    </>
      )
};

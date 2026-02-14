import HeroSection from '@/components/HeroSection';
import Timeline from '@/components/Timeline';
import CulturalIconsGrid from '@/components/CulturalIconsGrid';
import { audioContent } from '@/data/audio-content';
import Link from 'next/link';

// Mock data for homepage timeline snippet
const timelineEvents = [
  {
    year: '1727',
    yearHijri: '1139',
    title: 'تأسيس الدولة السعودية الأولى',
    description: audioContent.historicalMoments.founding,
    audioText: audioContent.historicalMoments.founding,
    image: '/images/gallery/founding.jpg' // Placeholder
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-clarity">
      <HeroSection />

      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-authenticity mb-6 font-harir">لمحة من تاريخنا</h2>
          <p className="text-xl text-determination leading-relaxed">
            مسيرة طويلة من الكفاح والبناء، سطرها أئمة الدولة السعودية الأولى وملوك المملكة العربية السعودية.
          </p>
        </div>
        <Timeline events={timelineEvents} />
        <div className="text-center mt-12">
            <Link href="/journey" className="inline-block px-8 py-3 border-2 border-authenticity text-authenticity rounded-full hover:bg-authenticity hover:text-clarity transition-colors font-bold">
                استكشف الرحلة الكاملة
            </Link>
        </div>
      </section>

      <CulturalIconsGrid />
    </main>
  );
}

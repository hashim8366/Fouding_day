import Timeline, { TimelineEvent } from '@/components/Timeline';
import { audioContent } from '@/data/audio-content';

const events: TimelineEvent[] = [
  {
    year: '1727',
    yearHijri: '1139',
    title: 'تأسيس الدولة السعودية الأولى',
    description: audioContent.historicalMoments.founding,
    audioText: audioContent.historicalMoments.founding,
  },
  {
    year: '1744',
    yearHijri: '1157',
    title: 'توحيد الدرعية',
    description: audioContent.historicalMoments.unity,
    audioText: audioContent.historicalMoments.unity,
  },
  {
    year: '1818',
    yearHijri: '1233',
    title: 'انتهاء الدولة السعودية الأولى',
    description: audioContent.historicalMoments.legacy,
    audioText: audioContent.historicalMoments.legacy,
  }
];

export default function JourneyPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-clarity">
      <div className="max-w-4xl mx-auto px-4 text-center mb-16">
        <h1 className="text-5xl font-bold text-authenticity mb-6 font-harir">رحلة التاريخ</h1>
        <p className="text-xl text-determination leading-relaxed">
          تاريخ يروي قصص البطولات والأمجاد منذ يوم التأسيس وحتى يومنا هذا.
        </p>
      </div>

      <Timeline events={events} />
    </main>
  );
}

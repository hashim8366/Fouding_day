import CulturalIconsGrid from '@/components/CulturalIconsGrid';

export default function CulturePage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-clarity">
        <div className="max-w-4xl mx-auto px-4 text-center mb-8">
            <h1 className="text-5xl font-bold text-authenticity mb-6 font-harir">التراث الثقافي</h1>
            <p className="text-xl text-determination leading-relaxed">
                رموز تعكس هويتنا وثقافتنا الأصيلة، نعتز بها وننقلها للأجيال القادمة.
            </p>
        </div>
      <CulturalIconsGrid />
    </main>
  );
}

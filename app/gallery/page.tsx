
export default function GalleryPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-clarity">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-authenticity mb-12 font-harir">معرض الصور</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square bg-gray-300 rounded-lg overflow-hidden relative group shadow-lg border-2 border-land">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors z-10">
                        <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">صورة {i}</span>
                    </div>
                     {/* Placeholder image */}
                    <div className="w-full h-full bg-land/30 flex items-center justify-center text-authenticity/50 text-4xl font-harir">
                        {i}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </main>
  );
}

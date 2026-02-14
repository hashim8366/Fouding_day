export default function EventsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-clarity">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-authenticity mb-12 font-harir">الاحتفالات والفعاليات</h1>

        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-land text-center">
            <p className="text-2xl text-determination mb-8 leading-relaxed">
                تابعونا لمعرفة مواقع وأوقات احتفالات يوم التأسيس في منطقتكم.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-clarity/50 rounded-lg border border-land">
                    <h3 className="text-2xl font-bold text-authenticity mb-2 font-harir">الرياض</h3>
                    <p className="text-determination text-lg font-bold">مسيرة التأسيس - وادي نمار</p>
                    <p className="text-authenticity mt-2">22 فبراير - 4:00 مساءً</p>
                </div>
                <div className="p-6 bg-clarity/50 rounded-lg border border-land">
                    <h3 className="text-2xl font-bold text-authenticity mb-2 font-harir">جدة</h3>
                    <p className="text-determination text-lg font-bold">فعاليات البلد - المنطقة التاريخية</p>
                    <p className="text-authenticity mt-2">22 فبراير - 5:00 مساءً</p>
                </div>
                 <div className="p-6 bg-clarity/50 rounded-lg border border-land">
                    <h3 className="text-2xl font-bold text-authenticity mb-2 font-harir">الدمام</h3>
                    <p className="text-determination text-lg font-bold">أوبريت التأسيس - الكورنيش</p>
                    <p className="text-authenticity mt-2">22 فبراير - 8:00 مساءً</p>
                </div>
                 <div className="p-6 bg-clarity/50 rounded-lg border border-land">
                    <h3 className="text-2xl font-bold text-authenticity mb-2 font-harir">مختلف المناطق</h3>
                    <p className="text-determination text-lg font-bold">العروض الجوية</p>
                    <p className="text-authenticity mt-2">23 فبراير - 3:00 مساءً</p>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}

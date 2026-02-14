import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-determination text-clarity py-12 dir-rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          <div>
            <h3 className="font-harir text-2xl mb-4 text-saudi-yellow">يوم التأسيس</h3>
            <p className="text-land leading-relaxed">
              يوم بدينا، قصة ثلاثة قرون من العز والفخر.
              في عام 1139هـ / 1727م تأسست الدولة السعودية الأولى.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-harir text-xl mb-4 text-saudi-yellow">روابط سريعة</h3>
            <ul className="space-y-2 text-land text-right w-full md:w-auto">
              <li><Link href="/journey" className="hover:text-clarity block">رحلة التاريخ</Link></li>
              <li><Link href="/culture" className="hover:text-clarity block">التراث الثقافي</Link></li>
              <li><Link href="/gallery" className="hover:text-clarity block">معرض الصور</Link></li>
              <li><Link href="/events" className="hover:text-clarity block">الاحتفالات</Link></li>
            </ul>
          </div>
          <div>
             <h3 className="font-harir text-xl mb-4 text-saudi-yellow">تواصل معنا</h3>
             <p className="text-land">info@foundingday.sa</p>
             <div className="flex justify-center md:justify-start gap-4 mt-4 text-2xl">
                <span>📱</span>
                <span>📧</span>
                <span>🌐</span>
             </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-land/20 text-center text-sm text-land font-sakkal">
          &copy; {new Date().getFullYear()} يوم التأسيس السعودي. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}

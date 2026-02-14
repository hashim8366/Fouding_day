'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import AudioPlayer from './AudioPlayer';
import { audioContent } from '@/data/audio-content';
import { Store, User, Bird, Cat, Sprout, PenTool, Flag, Castle, Coffee } from 'lucide-react';

const icons = [
  { id: 'market', name: 'السوق', nameEn: 'Market', icon: Store, audio: audioContent.culturalIcons.market },
  { id: 'council', name: 'المجلس', nameEn: 'Council', icon: User, audio: audioContent.culturalIcons.council },
  { id: 'falcon', name: 'الصقر', nameEn: 'Falcon', icon: Bird, audio: audioContent.culturalIcons.falcon },
  { id: 'horse', name: 'الخيل العربي', nameEn: 'Arabian Horse', icon: Cat, audio: audioContent.culturalIcons.horse }, // Cat is placeholder for Horse
  { id: 'datePalm', name: 'النخلة', nameEn: 'Date Palm', icon: Sprout, audio: audioContent.culturalIcons.datePalm },
  { id: 'calligraphy', name: 'الخط العربي', nameEn: 'Calligraphy', icon: PenTool, audio: audioContent.culturalIcons.calligraphy },
  { id: 'flag', name: 'الراية', nameEn: 'Flag', icon: Flag, audio: audioContent.culturalIcons.flag },
  { id: 'architecture', name: 'العمارة', nameEn: 'Architecture', icon: Castle, audio: audioContent.culturalIcons.architecture },
  { id: 'coffee', name: 'الفنجال', nameEn: 'Coffee', icon: Coffee, audio: audioContent.culturalIcons.coffee },
];

export default function CulturalIconsGrid() {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  return (
    <div className="py-24 px-4 bg-gradient-to-b from-clarity to-land/20 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
            <Castle size={400} />
        </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-authenticity mb-4 font-harir drop-shadow-sm">
          رموز التراث الثقافي
        </h2>
        <p className="text-center text-xl text-determination/80 mb-16 max-w-2xl mx-auto">
            اكتشف معاني ودلالات الرموز التي شكلت هويتنا وثقافتنا عبر القرون
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {icons.map((icon, index) => {
             const IconComponent = icon.icon;
             return (
            <motion.div
              key={icon.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedIcon(icon.id)}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-land/30 flex flex-col items-center h-full group-hover:bg-white">
                <div className="w-24 h-24 mb-6 rounded-full bg-clarity flex items-center justify-center text-authenticity group-hover:bg-authenticity group-hover:text-clarity transition-colors duration-300 shadow-inner">
                    <IconComponent size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-center text-determination mb-2 font-harir group-hover:text-authenticity transition-colors">
                  {icon.name}
                </h3>
                <p className="text-sm text-center text-authenticity/70 font-serif uppercase tracking-wider">{icon.nameEn}</p>

                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-authenticity font-bold flex items-center gap-2">
                    <span>اكتشف المزيد</span>
                    <span className="text-lg">←</span>
                </div>
              </div>
            </motion.div>
          )})}
        </div>

        {/* Modal for Details */}
        {selectedIcon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedIcon(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-3xl p-8 max-w-2xl w-full relative shadow-2xl border-4 border-clarity"
              onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={() => setSelectedIcon(null)}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                    <svg className="w-6 h-6 text-determination" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
              {(() => {
                const icon = icons.find(i => i.id === selectedIcon);
                if (!icon) return null;
                const IconComponent = icon.icon;

                return (
                  <div className="flex flex-col items-center pt-8">
                    <div className="w-32 h-32 mb-8 rounded-full bg-authenticity text-clarity flex items-center justify-center shadow-xl">
                         <IconComponent size={64} strokeWidth={1} />
                    </div>
                    <h3 className="text-4xl font-bold text-center text-determination mb-2 font-harir">
                      {icon.name}
                    </h3>
                    <p className="text-lg text-center text-authenticity/60 mb-8 font-serif uppercase tracking-widest">
                        {icon.nameEn}
                    </p>
                    <div className="bg-clarity/30 p-8 rounded-2xl w-full mb-8 border border-land/20">
                        <p className="text-xl text-determination text-center leading-relaxed">
                        {icon.audio}
                        </p>
                    </div>
                    <div className="flex justify-center w-full">
                      <AudioPlayer text={icon.audio} autoPlay />
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

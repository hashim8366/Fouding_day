'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import AudioPlayer from './AudioPlayer';
import { audioContent } from '@/data/audio-content';

const icons = [
  { id: 'market', name: 'السوق', nameEn: 'Market', icon: '🏛️', audio: audioContent.culturalIcons.market },
  { id: 'council', name: 'المجلس', nameEn: 'Council', icon: '🪑', audio: audioContent.culturalIcons.council },
  { id: 'falcon', name: 'الصقر', nameEn: 'Falcon', icon: '🦅', audio: audioContent.culturalIcons.falcon },
  { id: 'horse', name: 'الخيل العربي', nameEn: 'Arabian Horse', icon: '🐎', audio: audioContent.culturalIcons.horse },
  { id: 'datePalm', name: 'النخلة', nameEn: 'Date Palm', icon: '🌴', audio: audioContent.culturalIcons.datePalm },
  { id: 'calligraphy', name: 'الخط العربي', nameEn: 'Calligraphy', icon: '✍️', audio: audioContent.culturalIcons.calligraphy },
  { id: 'flag', name: 'الراية', nameEn: 'Flag', icon: '🚩', audio: audioContent.culturalIcons.flag },
  { id: 'architecture', name: 'العمارة', nameEn: 'Architecture', icon: '🕌', audio: audioContent.culturalIcons.architecture },
  { id: 'coffee', name: 'الفنجال', nameEn: 'Coffee', icon: '☕', audio: audioContent.culturalIcons.coffee },
];

export default function CulturalIconsGrid() {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  return (
    <div className="py-20 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-authenticity mb-12 font-harir">
          رموز التراث الثقافي
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {icons.map((icon, index) => (
            <motion.div
              key={icon.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative cursor-pointer"
              onClick={() => setSelectedIcon(icon.id)}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border-2 border-land flex flex-col items-center">
                <div className="text-6xl mb-4 text-center">{icon.icon}</div>
                <h3 className="text-xl font-bold text-center text-determination mb-1 font-harir">
                  {icon.name}
                </h3>
                <p className="text-sm text-center text-authenticity">{icon.nameEn}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Details */}
        {selectedIcon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedIcon(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={() => setSelectedIcon(null)}
                    className="absolute top-4 right-4 text-2xl text-determination"
                >
                    &times;
                </button>
              {(() => {
                const icon = icons.find(i => i.id === selectedIcon);
                if (!icon) return null;

                return (
                  <div className="flex flex-col items-center">
                    <div className="text-7xl mb-4 text-center">{icon.icon}</div>
                    <h3 className="text-3xl font-bold text-center text-determination mb-4 font-harir">
                      {icon.name}
                    </h3>
                    <p className="text-lg text-authenticity mb-6 text-center leading-relaxed">
                      {icon.audio}
                    </p>
                    <div className="flex justify-center">
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

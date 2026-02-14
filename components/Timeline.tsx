'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import AudioPlayer from './AudioPlayer';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export interface TimelineEvent {
  year: string;
  yearHijri: string;
  title: string;
  description: string;
  audioText: string;
  image?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <div className="relative py-24 bg-white/40">
      <div className="max-w-7xl mx-auto px-4 mb-12 flex justify-between items-end">
        <div>
            <h2 className="text-4xl md:text-5xl font-bold text-authenticity mb-2 font-harir">الجدول الزمني</h2>
            <p className="text-determination/60 text-lg">رحلة عبر الزمن لتوثيق أهم الأحداث</p>
        </div>
        <div className="flex gap-4">
            <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`p-3 rounded-full border border-authenticity transition-all ${!canScrollRight ? 'opacity-30 cursor-not-allowed' : 'hover:bg-authenticity hover:text-clarity'}`}
            >
                <ArrowRight />
            </button>
            <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`p-3 rounded-full border border-authenticity transition-all ${!canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'hover:bg-authenticity hover:text-clarity'}`}
            >
                <ArrowLeft />
            </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-8 px-4 md:px-12 pb-12 snap-x snap-mandatory scrollbar-hide"
        onScroll={checkScroll}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-shrink-0 w-[350px] md:w-[450px] snap-center"
          >
             <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-land/20 h-full flex flex-col group hover:shadow-2xl transition-all duration-300">
                {event.image ? (
                    <div className="relative h-64 w-full overflow-hidden">
                        <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                            <div className="text-white">
                                <div className="text-4xl font-bold font-harir mb-1">{event.year}</div>
                                <div className="text-white/80 font-serif">{event.yearHijri} هـ</div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="h-64 bg-authenticity flex items-center justify-center text-clarity p-6 text-center">
                        <div>
                             <div className="text-5xl font-bold font-harir mb-2">{event.year}</div>
                             <div className="text-white/60 font-serif text-xl">{event.yearHijri} هـ</div>
                        </div>
                    </div>
                )}

                <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-determination mb-4 font-harir leading-snug">
                        {event.title}
                    </h3>
                    <p className="text-authenticity/80 mb-8 leading-relaxed flex-grow">
                        {event.description}
                    </p>
                    <div className="pt-6 border-t border-gray-100 flex justify-end">
                        <AudioPlayer text={event.audioText} />
                    </div>
                </div>
             </div>
          </motion.div>
        ))}
        {/* Spacer for end of list */}
        <div className="w-12 flex-shrink-0" />
      </div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import AudioPlayer from './AudioPlayer';

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
  return (
    <div className="relative py-20 px-4 md:px-0">
      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-land" />

      <div className="space-y-20">
        {events.map((event, index) => (
          <TimelineItem
            key={index}
            event={event}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ event, isLeft }: { event: TimelineEvent; isLeft: boolean }) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`relative flex flex-col md:flex-row items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Content */}
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} mb-8 md:mb-0`}>
        <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-land relative z-10">
          <div className={`flex items-center gap-2 mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
            <span className="text-2xl font-bold text-authenticity">{event.year}</span>
            <span className="text-lg text-determination">/ {event.yearHijri}</span>
          </div>

          <h3 className="text-xl font-bold text-determination mb-3 font-harir">
            {event.title}
          </h3>

          <p className="text-authenticity mb-4 leading-relaxed">
            {event.description}
          </p>

          {event.image && (
            <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden relative">
             <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            </div>
          )}

          <div className={`flex ${isLeft ? 'justify-end' : 'justify-start'}`}>
              <AudioPlayer text={event.audioText} />
          </div>
        </div>
      </div>

      {/* Center Circle */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-authenticity border-4 border-clarity shadow-lg z-20 hidden md:block" />
    </motion.div>
  );
}

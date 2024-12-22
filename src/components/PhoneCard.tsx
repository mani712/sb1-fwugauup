import React from 'react';
import { Phone } from '../types/phone';
import { ExternalLink, Star, Smartphone, Cpu, Database, HardDrive, Camera, Battery } from 'lucide-react';

interface PhoneCardProps {
  phone: Phone;
}

const specIcons = {
  display: Smartphone,
  processor: Cpu,
  ram: Database,
  storage: HardDrive,
  camera: Camera,
  battery: Battery,
};

const specColors = {
  display: 'bg-emerald-50 border-emerald-100 text-emerald-700',
  processor: 'bg-emerald-50 border-emerald-100 text-emerald-700',
  ram: 'bg-emerald-50 border-emerald-100 text-emerald-700',
  storage: 'bg-emerald-50 border-emerald-100 text-emerald-700',
  camera: 'bg-emerald-50 border-emerald-100 text-emerald-700',
  battery: 'bg-emerald-50 border-emerald-100 text-emerald-700',
};

export function PhoneCard({ phone }: PhoneCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
        <img 
          src={phone.image} 
          alt={phone.name}
          className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">{phone.name}</h3>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-white/90 text-sm">Premium Choice</span>
              </div>
            </div>
            <span className="text-3xl font-bold text-white">${phone.price}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {Object.entries(phone.specs).map(([key, value]) => {
            const IconComponent = specIcons[key as keyof typeof specIcons];
            const colorClasses = specColors[key as keyof typeof specColors];
            
            return (
              <div 
                key={key} 
                className={`rounded-xl p-3 border ${colorClasses} transition-all duration-300 hover:scale-105`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <IconComponent className="w-4 h-4" />
                  <span className="text-sm font-medium capitalize">{key}</span>
                </div>
                <p className="font-semibold truncate">{value}</p>
              </div>
            );
          })}
        </div>

        <a
          href={phone.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300"
        >
          View Deal <ExternalLink size={18} />
        </a>
      </div>
    </div>
  );
}
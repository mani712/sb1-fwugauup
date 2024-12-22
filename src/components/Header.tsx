import React from 'react';
import { Smartphone } from 'lucide-react';

export function Header() {
  return (
    <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-4 mb-4">
          <Smartphone className="w-10 h-10" />
          <h1 className="text-4xl font-bold">Premium Phones</h1>
        </div>
        <p className="text-xl text-emerald-100 max-w-2xl">
          Discover the latest flagship smartphones with detailed comparisons and exclusive deals
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50/50 to-transparent"></div>
    </div>
  );
}
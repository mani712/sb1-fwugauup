import React from 'react';
import { Header } from './components/Header';
import { PhoneCard } from './components/PhoneCard';
import { phones } from './data/phones';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {phones.map((phone) => (
            <PhoneCard key={phone.id} phone={phone} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            Prices and specifications are subject to change. Some links may be affiliate links.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
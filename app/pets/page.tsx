'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Pet {
  id: string;
  name: string;
  type: string;
  breed: string;
  age: number;
  price: number;
  description: string;
  imageUrl: string;
  available: boolean;
}

// Sample pets data
const pets: Pet[] = [
  {
    id: '1',
    name: 'Max',
    type: 'Dog',
    breed: 'Golden Retriever',
    age: 2,
    price: 1200,
    description: 'Friendly and energetic Golden Retriever looking for an active family.',
    imageUrl: '/pets/golden-retriever.jpg',
    available: true,
  },
  {
    id: '2',
    name: 'Luna',
    type: 'Cat',
    breed: 'Persian',
    age: 1,
    price: 800,
    description: 'Beautiful Persian cat with a gentle personality.',
    imageUrl: '/pets/persian-cat.jpg',
    available: true,
  },
  {
    id: '3',
    name: 'Charlie',
    type: 'Dog',
    breed: 'French Bulldog',
    age: 1,
    price: 2000,
    description: 'Playful French Bulldog puppy with lots of character.',
    imageUrl: '/pets/french-bulldog.jpg',
    available: true,
  },
  {
    id: '4',
    name: 'Bella',
    type: 'Cat',
    breed: 'Maine Coon',
    age: 3,
    price: 1000,
    description: 'Majestic Maine Coon with a loving personality.',
    imageUrl: '/pets/maine-coon.jpg',
    available: true,
  },
];

export default function PetsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const filteredPets = pets.filter((pet) => {
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === '' || pet.type === selectedType;
    const matchesPrice = maxPrice === '' || pet.price <= parseInt(maxPrice);
    return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Available Pets</h1>
        
        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-2">
                Search
              </label>
              <input
                type="text"
                placeholder="Search by name or breed"
                className="w-full p-2 border border-slate-300 rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-2">
                Pet Type
              </label>
              <select
                className="w-full p-2 border border-slate-300 rounded-md"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="">All Types</option>
                <option value="Dog">Dogs</option>
                <option value="Cat">Cats</option>
                <option value="Bird">Birds</option>
                <option value="Fish">Fish</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-2">
                Max Price
              </label>
              <input
                type="number"
                placeholder="Enter maximum price"
                className="w-full p-2 border border-slate-300 rounded-md"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Pet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPets.map((pet) => (
            <div key={pet.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={pet.imageUrl}
                  alt={pet.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{pet.name}</h2>
                    <p className="text-slate-800">{pet.breed}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {pet.type}
                  </span>
                </div>
                <p className="text-slate-700 mb-4 line-clamp-2">{pet.description}</p>
                <div className="flex justify-between items-center mt-auto">
                  <div>
                    <p className="text-slate-800">Age: {pet.age} year(s)</p>
                    <p className="text-blue-600 font-bold text-xl">${pet.price}</p>
                  </div>
                  <Link
                    href={`/pets/${pet.id}`}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPets.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl text-slate-800">No pets found matching your criteria</h3>
          </div>
        )}
      </div>
    </div>
  );
} 
'use client';

import { useParams } from 'next/navigation';
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
  details: {
    gender: string;
    weight: string;
    color: string;
    vaccinated: boolean;
    microchipped: boolean;
  };
}

// Sample pet data (in a real app, this would come from an API or database)
const pet: Pet = {
  id: '1',
  name: 'Max',
  type: 'Dog',
  breed: 'Golden Retriever',
  age: 2,
  price: 1200,
  description: 'Friendly and energetic Golden Retriever looking for an active family. Max loves to play fetch and is great with children.',
  imageUrl: '/pets/golden-retriever.jpg',
  available: true,
  details: {
    gender: 'Male',
    weight: '30 kg',
    color: 'Golden',
    vaccinated: true,
    microchipped: true,
  },
};

export default function PetDetailPage() {
  const params = useParams();
  const petId = params.id;

  // In a real app, you would fetch the pet data based on the ID
  // For now, we'll use our sample data

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Link
          href="/pets"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Pets
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/2">
              <div className="relative h-96">
                <Image
                  src={pet.imageUrl}
                  alt={pet.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-8 md:w-1/2">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{pet.name}</h1>
                  <p className="text-gray-600 text-lg mb-4">{pet.breed}</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {pet.type}
                </span>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">About</h2>
                <p className="text-gray-600">{pet.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-700">Age</h3>
                  <p>{pet.age} year(s)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Gender</h3>
                  <p>{pet.details.gender}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Weight</h3>
                  <p>{pet.details.weight}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Color</h3>
                  <p>{pet.details.color}</p>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Health</h2>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Vaccinated</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Microchipped</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-gray-600">Adoption Fee</p>
                    <p className="text-3xl font-bold text-blue-600">${pet.price}</p>
                  </div>
                  <div className="flex items-center">
                    <span className={`inline-block w-3 h-3 rounded-full mr-2 ${pet.available ? 'bg-green-500' : 'bg-red-500'}`}></span>
                    <span className="text-gray-600">{pet.available ? 'Available' : 'Not Available'}</span>
                  </div>
                </div>
                <button
                  className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
                  onClick={() => {
                    // Implement adoption request functionality
                    alert('Thank you for your interest! Our team will contact you soon about adopting ' + pet.name);
                  }}
                >
                  Request to Adopt
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
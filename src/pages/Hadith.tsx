import React from 'react';
import { hadiths } from '../data/Quran';
import HadithCard from '../components/HadithCard';
import { Filter, ChevronDown } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Button } from '../components/ui/button';

const Hadith: React.FC = () => {
  console.log("Component rendered"); // Debugging - Ensure component renders

  const [filter, setFilter] = React.useState<string>('all');

  // Extract unique categories and limit the first 5
  const categories = ['all', ...new Set(hadiths.map(h => h.category.trim().toLowerCase()))];
  const visibleCategories = categories.slice(0, 5);
  const remainingCategories = categories.slice(5);

  // Function to update filter and log selection
  const handleFilterChange = (category: string) => {
    console.log("Filter clicked:", category); // Debugging - Check button click
    setFilter(category);
  };

  // Filter hadiths based on selected category
  const filteredHadiths = filter === 'all' 
    ? hadiths 
    : hadiths.filter(h => h.category.trim().toLowerCase() === filter);

  console.log("Current Filter:", filter, "Filtered Hadiths Count:", filteredHadiths.length); // Debugging

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-emerald-900 mb-4 font-['Amiri']">
          Hadith Collection
        </h1>
        <p className="text-center text-emerald-700 mb-8 max-w-3xl mx-auto">
          Explore a collection of authentic Hadiths (sayings and actions of Prophet Muhammad ﷺ) 
          related to Ramadan, forgiveness, and virtues of good deeds.
        </p>
        
        {/* Filter Section */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center bg-white rounded-full shadow-md p-1 space-x-2">
            <Filter className="h-4 w-4 text-emerald-700 ml-3" />
            
            {/* Render first 5 categories */}
            {visibleCategories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  filter === category 
                    ? 'bg-emerald-700 text-white' 
                    : 'text-emerald-700 hover:bg-emerald-50'
                }`}
                onClick={() => handleFilterChange(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}

            {/* More Dropdown */}
            {remainingCategories.length > 0 && (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <Button
                    variant="ghost"
                    className="flex  items-center gap-2 text-emerald-700 hover:bg-emerald-50"
                  >
                    More <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenu.Trigger>
                
                <DropdownMenu.Portal>
                  <DropdownMenu.Content 
                    className="bg-white border rounded-md shadow-md p-1 min-w-[150px] z-50"
                    align="center"
                    sideOffset={6}
                  >
                    {remainingCategories.map(category => (
                      <DropdownMenu.Item
                        key={category}
                        className="px-4 py-2 text-sm text-emerald-700 hover:bg-emerald-100 rounded-md cursor-pointer"
                        onSelect={() => handleFilterChange(category)} // Close dropdown on selection
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            )}
          </div>
        </div>

        {/* Hadith Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredHadiths.length > 0 ? (
            filteredHadiths.map(hadith => (
              <HadithCard key={hadith.id} hadith={hadith} />
            ))
          ) : (
            <p className="text-center text-gray-500">No Hadiths found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hadith;

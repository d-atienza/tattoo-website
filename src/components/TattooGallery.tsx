import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { Palette, Plus } from "lucide-react";

interface TattooDesign {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

const tattooDesigns: TattooDesign[] = [
  {
    id: "1",
    title: "Traditional Rose",
    category: "Traditional",
    imageUrl: "https://images.unsplash.com/photo-1665085326630-b01fea9a613d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBkZXNpZ24lMjBhcnR8ZW58MXx8fHwxNzU2ODg5NDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Classic traditional style rose with bold lines and vibrant colors"
  },
  {
    id: "2",
    title: "Flash Art Collection",
    category: "Traditional",
    imageUrl: "https://images.unsplash.com/photo-1730148137252-2fc494f15abf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHRhdHRvbyUyMGZsYXNofGVufDF8fHx8MTc1Njg4OTQ1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Traditional flash art designs perfect for walk-ins"
  },
  {
    id: "3",
    title: "Geometric Mandala",
    category: "Geometric",
    imageUrl: "https://images.unsplash.com/photo-1566485763217-b5dfcc375a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjB0YXR0b28lMjBkZXNpZ258ZW58MXx8fHwxNzU2ODg5NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Intricate geometric patterns and sacred geometry"
  },
  {
    id: "4",
    title: "Minimalist Line Art",
    category: "Minimalist",
    imageUrl: "https://images.unsplash.com/photo-1619009542298-584066f6fd30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwdGF0dG9vJTIwYXJ0fGVufDF8fHx8MTc1Njg4OTQ1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Clean, simple lines perfect for first-time tattoos"
  }
];

interface TattooGalleryProps {
  selectedDesign: string | null;
  onDesignSelect: (designId: string) => void;
}

export function TattooGallery({ selectedDesign, onDesignSelect }: TattooGalleryProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-2">Choose Your Design</h2>
        <p className="text-muted-foreground">
          Select from our collection of tattoo designs or bring your own reference
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Custom Design Option */}
        <Card
          className={`cursor-pointer transition-all hover:shadow-lg ${
            selectedDesign === 'custom' ? 'ring-2 ring-primary' : ''
          }`}
          onClick={() => onDesignSelect('custom')}
        >
          <div className="aspect-square overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                <Palette className="h-8 w-8 text-primary/60" />
              </div>
              <Plus className="h-6 w-6 text-primary/40 mx-auto" />
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="line-clamp-1">Custom Design</h3>
              <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                Custom
              </span>
            </div>
            <p className="text-muted-foreground text-sm line-clamp-2">
              Bring your own design or work with our artist to create something unique
            </p>
          </div>
        </Card>

        {/* Existing Designs */}
        {tattooDesigns.map((design) => (
          <Card
            key={design.id}
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selectedDesign === design.id ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => onDesignSelect(design.id)}
          >
            <div className="aspect-square overflow-hidden rounded-t-lg">
              <ImageWithFallback
                src={design.imageUrl}
                alt={design.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="line-clamp-1">{design.title}</h3>
                <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                  {design.category}
                </span>
              </div>
              <p className="text-muted-foreground text-sm line-clamp-2">
                {design.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
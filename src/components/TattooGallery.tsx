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
    title: "A1",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777810089_f381dd06b0_n.jpg",
    description: "Classic Flash style rose with bold lines and vibrant colors"
  },
  {
    id: "2",
    title: "A2",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777810074_4b01b007c2_n.jpg",
    description: "Traditional flash art designs perfect for walk-ins"
  },
  {
    id: "3",
    title: "A3",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54776733122_0c65c96e34_n.jpg",
    description: "Intricate geometric patterns and sacred geometry"
  },
  {
    id: "4",
    title: "A4",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777820898_0c65c96e34_n.jpg",
    description: "Clean, simple lines perfect for first-time tattoos"
  },
  {
    id: "6",
    title: "A5",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777820888_02394f6f64_n.jpg",
    description: "Classic Flash style rose with bold lines and vibrant colors"
  },
  {
    id: "7",
    title: "R0",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777921420_02394f6f64_n.jpg",
    description: "Traditional flash art designs perfect for walk-ins"
  },
  {
    id: "8",
    title: "R1",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777810049_0257b6570f_n.jpg",
    description: "Intricate geometric patterns and sacred geometry"
  },
  {
    id: "9",
    title: "W1",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777587031_519365a662_n.jpg",
    description: "Clean, simple lines perfect for first-time tattoos"
  },
  {
    id: "10",
    title: "R2",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777921410_b782475494_n.jpg",
    description: "Classic Flash style rose with bold lines and vibrant colors"
  },
  {
    id: "11",
    title: "R3",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777820858_9e71680a55_n.jpg",
    description: "Traditional flash art designs perfect for walk-ins"
  },
  {
    id: "12",
    title: "R4",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777921400_5e0eb2c761_n.jpg",
    description: "Intricate geometric patterns and sacred geometry"
  },
  {
    id: "13",
    title: "R5",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777587016_1f3c4cee66_n.jpg",
    description: "Clean, simple lines perfect for first-time tattoos"
  },
  {
    id: "14",
    title: "S1",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777921395_ebddb6d091_n.jpg",
    description: "Classic Flash style rose with bold lines and vibrant colors"
  },
  {
    id: "15",
    title: "S2",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777810044_c2ba8c57ed_n.jpg",
    description: "Traditional flash art designs perfect for walk-ins"
  },
  {
    id: "16",
    title: "S3",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777810039_dd25b4c107_n.jpg",
    description: "Intricate geometric patterns and sacred geometry"
  },
  {
    id: "17",
    title: "S4",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54776733112_fd01bdcc81_n.jpg",
    description: "Clean, simple lines perfect for first-time tattoos"
  },
  {
    id: "18",
    title: "S5",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777820843_e86e3d5c57_n.jpg",
    description: "Classic Flash style rose with bold lines and vibrant colors"
  },
  {
    id: "19",
    title: "K1",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777921365_5d44c21163_n.jpg",
    description: "Traditional flash art designs perfect for walk-ins"
  },
  {
    id: "20",
    title: "K2",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54776733062_9fed4b4608_n.jpg",
    description: "Intricate geometric patterns and sacred geometry"
  },
  {
    id: "21",
    title: "F1",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777810024_9787f8de4d_n.jpg",
    description: "Clean, simple lines perfect for first-time tattoos"
  },
  {
    id: "22",
    title: "R6",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777820778_fbb65e6a01_n.jpg",
    description: "Classic Flash style rose with bold lines and vibrant colors"
  },
  {
    id: "23",
    title: "W1",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777587031_519365a662_n.jpg",
    description: "Traditional flash art designs perfect for walk-ins"
  },
  {
    id: "24",
    title: "W2",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777586986_47bdf4f9f4_n.jpg",
    description: "Intricate geometric patterns and sacred geometry"
  },
  {
    id: "25",
    title: "W3",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777820813_c729a9b299_n.jpg",
    description: "Clean, simple lines perfect for first-time tattoos"
  },
  {
    id: "26",
    title: "W4",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777921355_b2403c788e_n.jpg",
    description: "Clean, simple lines perfect for first-time tattoos"
  },
  {
    id: "27",
    title: "W5",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777586976_8e582a4f8c_n.jpg",
    description: "Classic Flash style rose with bold lines and vibrant colors"
  },
  {
    id: "28",
    title: "W6",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777820793_ddf18b942d_n.jpg",
    description: "Traditional flash art designs perfect for walk-ins"
  },
  {
    id: "29",
    title: "W7",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777809999_c61391aafe_n.jpg",
    description: "Intricate geometric patterns and sacred geometry"
  },
  {
    id: "30",
    title: "W8",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54776733087_5e9e89b6d1_n.jpg",
    description: "Clean, simple lines perfect for first-time tattoos"
  },
  {
    id: "31",
    title: "W9",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777820788_8633710021_n.jpg",
    description: "Clean, simple lines perfect for first-time tattoos"
  },
  {
    id: "32",
    title: "W10",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777810004_f01c97ff88_n.jpg",
    description: "Classic Flash style rose with bold lines and vibrant colors"
  },
  {
    id: "33",
    title: "S6",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777809994_1d441edb9d_n.jpg",
    description: "Traditional flash art designs perfect for walk-ins"
  },
  {
    id: "34",
    title: "S7",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54776733067_ff995302a4_n.jpg",
    description: "Intricate geometric patterns and sacred geometry"
  },
  {
    id: "35",
    title: "S8",
    category: "Flash",
    imageUrl: "https://live.staticflickr.com/65535/54777586946_b54e6d559f_n.jpg",
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
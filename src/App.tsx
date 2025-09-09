import { useState } from "react";
import { TattooGallery } from "./components/TattooGallery";
import { BookingForm } from "./components/BookingForm";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Separator } from "./components/ui/separator";
import { Badge } from "./components/ui/badge";
import { CheckCircle, Zap, Clock, Shield } from "lucide-react";

interface BookingData {
  bodyPart: string;
  size: string;
  selectedDate: Date | undefined;
  timeSlot: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
}

export default function App() {
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState<BookingData | null>(null);

  const handleDesignSelect = (designId: string) => {
    setSelectedDesign(designId);
  };

  const handleBookingSubmit = (data: BookingData) => {
    setBookingData(data);
    setBookingSubmitted(true);
    // In a real app, this would send data to your backend
    console.log("Booking submitted:", { selectedDesign, ...data });
  };

  const resetBooking = () => {
    setSelectedDesign(null);
    setBookingSubmitted(false);
    setBookingData(null);
  };

  if (bookingSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h1 className="mb-4">Booking Confirmed!</h1>
                <p className="text-muted-foreground mb-6">
                  Thank you {bookingData?.firstName}! Your tattoo appointment has been successfully booked.
                </p>
                
                <div className="bg-muted rounded-lg p-4 mb-6 text-left">
                  <h3 className="mb-3">Appointment Details:</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Date:</strong> {bookingData?.selectedDate?.toLocaleDateString()}</p>
                    <p><strong>Time:</strong> {bookingData?.timeSlot}</p>
                    <p><strong>Design Type:</strong> {selectedDesign === 'custom' ? 'Custom Design' : 'Gallery Design'}</p>
                    <p><strong>Body Part:</strong> {bookingData?.bodyPart}</p>
                    {selectedDesign !== 'custom' && bookingData?.size && (
                      <p><strong>Size:</strong> {bookingData?.size} cm</p>
                    )}
                    <p><strong>Contact:</strong> {bookingData?.email}</p>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground mb-6">
                  <p>We'll send you a email shortly to confirm your enquiry has been received.</p>
                  {selectedDesign === 'custom' && (
                    <p className="text-primary">Please bring your design reference or be ready to discuss your ideas during the consultation.</p>
                  )}
                  <p>If you need to reschedule, please email us at least 24 hours in advance.</p>
                </div>

                <Button onClick={resetBooking} variant="outline">
                  Book Another Appointment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1>sleepytimetea studios</h1>
              <p className="text-muted-foreground">@_sleepytimetea_</p>
            </div>
            <div>
              <img src='https://live.staticflickr.com/65535/54776783975_d4794bb98f_m.jpg' width="100px" height="100px"/>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Design Gallery */}
          <div className="lg:col-span-2">
            <TattooGallery 
              selectedDesign={selectedDesign}
              onDesignSelect={handleDesignSelect}
            />
          </div>

          {/* Right Column - Booking Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {selectedDesign && (
                <div className="mb-4 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                  <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
                    <Zap className="h-4 w-4" />
                    <span className="text-sm">Design selected! Complete your booking below.</span>
                  </div>
                </div>
              )}
              
              {!selectedDesign && (
                <Card className="mb-6">
                  <CardContent className="p-6 text-center">
                    <h3 className="mb-2">Ready to Get Inked?</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Choose a design from our gallery to start your booking
                    </p>
                    <div className="text-xs text-muted-foreground">
                      Step 1: Select Design → Step 2: Choose Details → Step 3: Book
                    </div>
                  </CardContent>
                </Card>
              )}

              <BookingForm 
                selectedDesign={selectedDesign}
                onSubmit={handleBookingSubmit}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="mb-3">Studio Info</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📍 Private Studio</p>
                <p>Saturday & Sunday: 10am - 2pm</p>
                <p>hello-sleepytimetea@gmail.com</p>
              </div>
            </div>
            <div>
              <h3 className="mb-3">Booking Policy</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Deposit required to secure appointment</p>
                <p>• 24hr cancellation policy</p>
                <p>• Must be 18+ with valid ID</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Ink Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
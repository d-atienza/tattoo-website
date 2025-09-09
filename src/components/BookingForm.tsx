import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Calendar } from "./ui/calendar";
import { CalendarDays, MapPin, Phone, Mail, User } from "lucide-react";

interface BookingFormData {
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

interface BookingFormProps {
  selectedDesign: string | null;
  onSubmit: (data: BookingFormData) => void;
}

const bodyParts = [
  "Arm (Upper)",
  "Arm (Lower)",
  "Leg (Upper)",
  "Leg (Lower)",
  "Back (Upper)",
  "Back (Lower)",
  "Chest",
];

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
];

export function BookingForm({ selectedDesign, onSubmit }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    bodyPart: "",
    size: "",
    selectedDate: undefined,
    timeSlot: "",
    firstName: "",
    lastName: "",
    email: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const updateFormData = (field: keyof BookingFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isCustomDesign = selectedDesign === 'custom';
  
  const isFormValid = formData.bodyPart && 
                      (isCustomDesign || formData.size) && // Size not required for custom designs
                      formData.selectedDate && 
                      formData.timeSlot && 
                      formData.firstName && 
                      formData.lastName && 
                      formData.email && 
                      selectedDesign;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Body Placement
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="mb-2 block">Body Part *</Label>
            <Select value={formData.bodyPart} onValueChange={(value) => updateFormData('bodyPart', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select body part for tattoo placement" />
              </SelectTrigger>
              <SelectContent>
                {bodyParts.map((part) => (
                  <SelectItem key={part} value={part}>
                    {part}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="size" className="mb-2 block">
              Approximate Size (cm) {!isCustomDesign && '*'}
            </Label>
            <div className="relative">
              <Input
                id="size"
                type="number"
                min="1"
                max="50"
                step="0.5"
                value={formData.size}
                onChange={(e) => updateFormData('size', e.target.value)}
                placeholder={isCustomDesign ? "To be discussed during consultation" : "e.g. 10"}
                className="pr-8"
                disabled={isCustomDesign}
                required={!isCustomDesign}
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-sm">
                cm
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {isCustomDesign 
                ? "Size will be determined during consultation with the artist" 
                : "Enter the approximate width or height in centimetres"
              }
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5" />
            Select Date & Time
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="mb-2 block">Choose an available date</Label>
            <Calendar
              mode="single"
              selected={formData.selectedDate}
              onSelect={(date) => updateFormData('selectedDate', date)}
              disabled={(date) => date < new Date() || date.getDay() === 0} // Disable past dates and Sundays
              className="rounded-md border"
            />
          </div>
          
          {formData.selectedDate && (
            <div>
              <Label className="mb-2 block">Available time slots</Label>
              <Select value={formData.timeSlot} onValueChange={(value) => updateFormData('timeSlot', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select preferred time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => updateFormData('notes', e.target.value)}
                placeholder="Any special requests, allergies, or additional information..."
                rows={3}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={!isFormValid}
            >
              Book Appointment
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
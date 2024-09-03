"use client";

import React, { useState, FormEvent } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  format,
  differenceInYears,
  differenceInMonths,
  differenceInDays,
} from "date-fns";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const AgeCalculator: React.FC = () => {
  const [birthdate, setBirthdate] = useState<Date | undefined>(undefined);
  const [age, setAge] = useState<{
    years: number;
    months: number;
    days: number;
  } | null>(null);
  const [inputMethod, setInputMethod] = useState<"calendar" | "manual">(
    "calendar"
  );
  const [manualInput, setManualInput] = useState("");
  const [defaultMonth, setDefaultMonth] = useState<Date>(new Date());
  const [calendarKey, setCalendarKey] = useState(0);

  const calculateAge = (e: FormEvent) => {
    e.preventDefault();
    if (!birthdate) return;

    const today = new Date();
    const birthDate = new Date(birthdate);

    let years = differenceInYears(today, birthDate);
    let months = differenceInMonths(today, birthDate) % 12;
    let days = differenceInDays(
      today,
      new Date(today.getFullYear(), today.getMonth(), birthDate.getDate())
    );

    // Adjust for negative days
    if (days < 0) {
      months -= 1;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    // Adjust for negative months
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAge({ years, months, days });
  };

  const handleManualInput = (value: string) => {
    setManualInput(value);
    const date = new Date(value);
    if (!isNaN(date.getTime())) {
      setBirthdate(date);
    }
  };

  const handleDecadeChange = (change: number) => {
    setDefaultMonth((prevMonth) => {
      const newYear = prevMonth.getFullYear() + change * 10;
      return new Date(newYear, prevMonth.getMonth());
    });
    setCalendarKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-6">
      <h2 className="text-2xl font-bold text-center">Age Calculator</h2>
      <RadioGroup
        defaultValue="calendar"
        onValueChange={(value: string) =>
          setInputMethod(value as "calendar" | "manual")
        }
        className="flex justify-center space-x-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="calendar" id="calendar" />
          <Label htmlFor="calendar">Calendar</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="manual" id="manual" />
          <Label htmlFor="manual">Manual Input</Label>
        </div>
      </RadioGroup>

      <form onSubmit={calculateAge} className="space-y-4">
        {inputMethod === "calendar" ? (
          <Popover>
            <PopoverTrigger asChild>
              <Button type="button" variant="outline" className="w-full">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {birthdate ? format(birthdate, "PPP") : "Select birthdate"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="center">
              <Calendar
                key={calendarKey}
                mode="single"
                selected={birthdate}
                onSelect={(date) => {
                  setBirthdate(date);
                  setManualInput(date ? format(date, "yyyy-MM-dd") : "");
                }}
                defaultMonth={defaultMonth}
                initialFocus
                className="rounded-md border"
              />
              <div className="flex justify-between p-2 border-t">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => handleDecadeChange(-1)}
                  className="text-xs"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Prev Decade
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => handleDecadeChange(1)}
                  className="text-xs"
                >
                  Next Decade
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        ) : (
          <Input
            type="text"
            value={manualInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleManualInput(e.target.value)
            }
            placeholder="YYYY-MM-DD"
            className="w-full"
          />
        )}

        <Button type="submit" className="w-full">
          Calculate Age
        </Button>
      </form>

      {age !== null && (
        <div className="text-center space-y-2">
          <p className="text-lg font-semibold">Your age is:</p>
          <p className="text-xl">
            {age.years} years, {age.months} months, and {age.days} days
          </p>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;

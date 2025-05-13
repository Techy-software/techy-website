import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, Grid3x3, List, Plus } from "lucide-react";

const mentors = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  name: "Abdelrahman Elshaer",
  email: "ahmed@gamil.com",
  status: "Active"
}));

export default function MentorGrid() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 w-full max-w-md">
          <div className="relative w-full">
            <Search className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Search" className="pl-8" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Grid3x3 className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon">
            <List className="w-4 h-4" />
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Mentors
          </Button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {mentors.map((mentor) => (
          <Card key={mentor.id} className="text-center">
            <CardContent className="p-4">
              <div className="relative mb-4">
                <div className="mx-auto h-20 w-20 rounded-full bg-gray-200" />
                <span className="absolute top-0 right-0 text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded">
                  {mentor.status}
                </span>
              </div>
              <h3 className="font-semibold text-sm">{mentor.name}</h3>
              <p className="text-xs text-gray-500 mb-3">{mentor.email}</p>
              <div className="flex justify-center gap-2">
                <Button variant="outline" size="sm">
                  View Profile
                </Button>
                <Button variant="ghost" size="icon">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
                    alt="icon"
                    className="w-4 h-4"
                  />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

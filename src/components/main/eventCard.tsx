import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Event } from "../../apis/services/getEventList";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => (
  <Card>
    <CardHeader>{event.title}</CardHeader>
    <CardContent>
      <p>{event.description}</p>
      <p className="pb-4">
        {event.petsAllowed ? "✅ Pets Allowed" : "❌ No Pets Allowed"}
      </p>
      <Button asChild>
        <a href={`/events/${event.id}`}>View Details</a>
      </Button>
    </CardContent>
  </Card>
);

export default EventCard;

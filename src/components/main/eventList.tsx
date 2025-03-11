import React, { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import PaginationControls from "./pagination";
import EventCard from "./eventCard";
import { getEventList } from "../../apis/services/getEventList";
import EventListSkeleton from "../loader/eventListSkeleton";

const ITEMS_PER_PAGE = 5; // Number of events per page

const EventList: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [petsAllowed, setPetsAllowed] = useState<boolean>(false);

  // Fetch all events
  const {
    data: events,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["events"],
    queryFn: getEventList,
  });

  // Apply filters and search locally using useMemo for optimization
  const filteredEvents = useMemo(() => {
    if (!events) return [];

    return events
      .filter(
        (event) =>
          event.title.toLowerCase().includes(search.toLowerCase()) ||
          event.description.toLowerCase().includes(search.toLowerCase())
      )
      .filter((event) => (petsAllowed ? event.petsAllowed : true)); // ✅ Show only events where petsAllowed is true
  }, [events, search, petsAllowed]);

  // Paginate filtered events
  const paginatedEvents = useMemo(() => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    return filteredEvents.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredEvents, page]);

  if (isLoading) return <EventListSkeleton />;
  if (isError) return <p>Error loading events.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-center pb-4 text-[2rem] text-bold">Event web-app</h1>
      {/* Search and Filter Controls */}
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <Input
          placeholder="Search events..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1); // Reset to page 1 when searching
          }}
        />

        {/* Dropdown for Pets Allowed */}
        <Select
          value={petsAllowed ? "allowed" : "all"}
          onValueChange={(value) => {
            setPetsAllowed(value === "allowed"); // Convert "allowed" to true/false
            setPage(1); // Reset pagination when filtering
          }}
        >
          <SelectTrigger className="w-full md:w-48">
            {petsAllowed ? "Pets Allowed" : "All Events"}
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Events</SelectItem>
            <SelectItem value="allowed">Pets Allowed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Event List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {paginatedEvents.length > 0 ? (
          paginatedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>

      {/* Pagination Controls */}
      <PaginationControls
        page={page}
        setPage={setPage}
        hasNextPage={filteredEvents.length > page * ITEMS_PER_PAGE}
      />
    </div>
  );
};

export default EventList;

import { Skeleton } from "@/components/ui/skeleton";

const EventListSkeleton = () => (
  <div className="p-6 max-w-4xl mx-auto">
    {/* Title */}
    <Skeleton className="h-8 w-1/3 mx-auto mb-6" />

    {/* Search & Filter Controls */}
    <div className="flex flex-col md:flex-row gap-2 mb-4">
      <Skeleton className="h-10 w-full md:w-1/2" /> {/* Search Bar */}
      <Skeleton className="h-10 w-full md:w-48" /> {/* Filter Dropdown */}
    </div>

    {/* Event Cards Skeleton */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="p-4 border rounded-lg shadow-sm bg-white">
          <Skeleton className="h-6 w-3/4 mb-2" /> {/* Event Title */}
          <Skeleton className="h-4 w-full mb-2" /> {/* Event Description */}
          <Skeleton className="h-4 w-1/2 mb-4" /> {/* Extra Info */}
          <Skeleton className="h-10 w-full" /> {/* Button */}
        </div>
      ))}
    </div>

    {/* Pagination Controls */}
    <div className="flex justify-center mt-6">
      <Skeleton className="h-10 w-32" /> {/* Pagination Buttons */}
    </div>
  </div>
);

export default EventListSkeleton;

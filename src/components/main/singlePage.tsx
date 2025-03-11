import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getEventList } from "../../apis/services/getEventList";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import SingleEventSkeleton from "../loader/singlePageSkeleton";

const SingleEvent = () => {
  const { id } = useParams<{ id: string }>();

  // Fetch all events
  const {
    data: events,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["page"],
    queryFn: getEventList,
  });

  // Find the event by ID
  const event = events?.find((e) => String(e.id) === id);

  if (isLoading) return <SingleEventSkeleton />;
  if (isError || !event)
    return <p className="text-center mt-10">Event not found.</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-lg rounded-2xl border border-gray-200 bg-white">
        <CardHeader>
          <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{event.description}</p>
          <p className="mt-4 text-sm font-medium">
            {event.petsAllowed ? "✅ Pets Allowed" : "❌ No Pets Allowed"}
          </p>
        </CardContent>
        <CardFooter>
          <Link to="/" className="w-full">
            <Button className="w-full">Back to Events</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SingleEvent;

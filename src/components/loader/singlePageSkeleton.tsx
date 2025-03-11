import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const SingleEventSkeleton = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
    <Card className="w-full max-w-md shadow-lg rounded-2xl border border-gray-200 bg-white">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-6 w-3/4" /> {/* Event Title */}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-full mb-2" />{" "}
        {/* Event Description Line 1 */}
        <Skeleton className="h-4 w-5/6 mb-2" /> {/* Event Description Line 2 */}
        <Skeleton className="h-4 w-2/3 mt-4" /> {/* Pets Allowed Info */}
      </CardContent>
      <CardFooter>
        <Skeleton className="h-10 w-full" /> {/* Button */}
      </CardFooter>
    </Card>
  </div>
);

export default SingleEventSkeleton;

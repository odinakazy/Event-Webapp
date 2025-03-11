import EventList from "../src/components/main/eventList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SingleEvent from "../src/components/main/singlePage";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/events/:id" element={<SingleEvent />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

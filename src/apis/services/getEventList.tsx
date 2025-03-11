import axios from "axios";

export interface Event {
  id: string;
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  petsAllowed: boolean;
  organizer: string;
}

export const getEventList = async (): Promise<Event[]> => {
  const { data } = await axios.get<Event[]>(
    "https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events"
  );
  return data; // Returns full event list
};

import { useQuery } from "react-query";
import { mentorServices } from "../services/Mentor/Mentor";

export const useMentorList = (props, options) =>
  useQuery(
    ["mentorsList", props],
    async () => {
      const data = await mentorServices.getRequest(props);
      console.log("test", data); // Log the resolved data
      return data;
    },
    options
  );

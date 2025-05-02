import { useQuery } from "react-query";
import { mentorServices } from "../services/Mentor/Mentor";

export const useMentor = (props, options) =>
  useQuery(
    ["mentorDetails", props],
    () => mentorServices.getRequest(props),
    options
  );

import { HttpClient } from "../../utils/HttpClient";

export const mentorServices = {
  getRequest: (props) => {
    return HttpClient.get(props.url)
      .then((res) => {
        console.log("ressss", res.data);
        res.data;
      })
      .catch((err) => {
        // console.log("err", err);
        throw err;
      });
  },
};

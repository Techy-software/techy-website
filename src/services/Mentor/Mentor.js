import { HttpClient } from "../../utils/HttpClient";

export const mentorServices = {
  getRequest: (props) => {
    HttpClient.get(props.url)

      .then((res) => {
        console.log("ressss", res);
        res.data;
      })
      .catch((err) => {
        console.log("err", err);
        throw err;
      });
  },
};

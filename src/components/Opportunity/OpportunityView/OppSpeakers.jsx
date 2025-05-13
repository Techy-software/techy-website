import WhiteCard from "../../../reusable components/WhiteCard/WhiteCard";
import MoAli from "../../../assets/MoAli.jpeg";
import { Avatar, Box, Typography } from "@mui/material";
const OppSpeakers = ({speakers}) => {
  return (
    <div>
      <WhiteCard title={"Speakers"}>
        {speakers.map((speaker, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "center", gap: 2, marginTop: 2 }}
          >
            <Avatar
              alt={speaker.name}
              src={speaker.image}
              sx={{ width: 56, height: 56 }}
            />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                {speaker.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {speaker.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </WhiteCard>
    </div>
  );
};

export default OppSpeakers;

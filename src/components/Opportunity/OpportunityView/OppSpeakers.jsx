import WhiteCard from "../../../reusable components/WhiteCard/WhiteCard";
import MoAli from "../../../assets/MoAli.jpeg";
import { Avatar, Box, Typography } from "@mui/material";
const OppSpeakers = () => {
  return (
    <div>
      <WhiteCard title={"Speakers"}>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 2, marginTop: 2 }}
        >
          <Avatar
            alt="Mohamed Ali"
            src={MoAli}
            sx={{ width: 56, height: 56 }}
          />
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
              Mohamed Ali
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Senior UX/UI Designer
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 2, marginTop: 2 }}
        >
          <Avatar
            alt="Mohamed Ali"
            src={MoAli}
            sx={{ width: 56, height: 56 }}
          />
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
              Mariam Mostafa
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Senior UX/UI Designer
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 2, marginTop: 2 }}
        >
          <Avatar alt="Tamer omar" src={MoAli} sx={{ width: 56, height: 56 }} />
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
              Tamer Omar
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Senior UX/UI Designer
            </Typography>
          </Box>
        </Box>
      </WhiteCard>
    </div>
  );
};

export default OppSpeakers;

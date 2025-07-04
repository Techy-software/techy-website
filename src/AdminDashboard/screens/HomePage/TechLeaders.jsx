import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Rating,
  Avatar,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const TechLeaders = () => {
  return (
    <section className="relative px-6 py-16 md:py-24 overflow-hidden">
      <div className="absolute top-55 left-20 h-1/2 w-1/3 opacity-40 pointer-events-none rotate-[-15deg]">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="dot-pattern-blue"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="#DCE2EE" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern-blue)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-center flex flex-col items-end justify-evenly h-full">
          <Box>
            <Box className="inline-block mb-6 bg-white rounded-full p-3 shadow-md">
              <ArrowForwardIcon color="primary" />
            </Box>
          </Box>
          <Card
            elevation={6}
            sx={{
              borderLeft: "5px solid #2563eb",
              borderRadius: "16px",
              maxWidth: 400,
              width: "100%",
            }}
          >
            <CardContent>
              <Typography variant="body1" sx={{ fontStyle: "italic", mb: 2 }}>
                "Thank you so much for your help. It's exactly what I've been
                looking for. You won't regret it."
              </Typography>
              <Box display="flex" alignItems="center" gap={2}>
                <Avatar alt="Gloria Rose" />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Gloria Rose
                  </Typography>
                  <Rating name="read-only" value={5} readOnly size="small" />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </div>

        <div className="text-center md:text-left md:w-1/2">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Meet our <span className="text-blue-600">Tech Leaders</span>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            paragraph
            sx={{ maxWidth: 500, margin: "0 auto", mb: 4 }}
          >
            Techy has got more than 100k positive ratings from our users around
            the world. See what our 6 to 18 years old coders are building.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f97316",
              "&:hover": { backgroundColor: "#ea580c" },
              paddingX: 4,
              paddingY: 1.5,
              fontWeight: "bold",
              borderRadius: "12px",
              boxShadow: 3,
            }}
          >
            Join for free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechLeaders;

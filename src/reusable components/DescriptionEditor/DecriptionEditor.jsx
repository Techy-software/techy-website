import React from "react";
import { Box, Button, TextField, IconButton } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import LinkIcon from "@mui/icons-material/Link";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const DescriptionEditor = () => {
  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        marginTop: "10px",
      }}
    >
      <Box sx={{ display: "flex", gap: 1, marginBottom: "10px" }}>
        <IconButton>
          <FormatBoldIcon />
        </IconButton>
        <IconButton>
          <FormatItalicIcon />
        </IconButton>
        <IconButton>
          <FormatUnderlinedIcon />
        </IconButton>
        <IconButton>
          <FormatAlignLeftIcon />
        </IconButton>
        <IconButton>
          <FormatAlignCenterIcon />
        </IconButton>
        <IconButton>
          <FormatAlignRightIcon />
        </IconButton>
        <IconButton>
          <LinkIcon />
        </IconButton>
        <IconButton>
          <InsertPhotoIcon />
        </IconButton>
        <IconButton>
          <ContentCopyIcon />
        </IconButton>
      </Box>
      <TextField
        variant="outlined"
        multiline
        fullWidth
        minRows={4}
        placeholder="Add your description ..."
      />
    </Box>
  );
};

export default DescriptionEditor;

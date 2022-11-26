import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";

export default function TransitionAlerts({text, open}) {
  return (
    (
      <Box sx={{ width: "100%", height: "60px"}}>
        <Collapse in={open}>
          <Alert
            severity="error"
            sx={{ mb: 2 }}
          >
            {text}
          </Alert>
        </Collapse>
      </Box>
    )
  );
}

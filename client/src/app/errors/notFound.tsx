import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Container component={Paper} sx={{ height: 400, padding: 3 }}>
      <Typography variant="h4" gutterBottom textAlign={"center"}>
        Oops! We could not find what you are looking for
      </Typography>
      <Divider />
      <Button fullWidth component={Link} to={"/catalog"}>
        Go back to shop
      </Button>
    </Container>
  );
}

import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default function ServerError() {
  const navigate = useNavigate();
  interface CustomizedState {
    error: any;
    myState: string;
  }

  const location = useLocation();
  const state = location.state as CustomizedState;
  const { myState } = state;

  return (
    <>
      <Container component={Paper}>
        {state?.error ? (
          <>
            <Typography variant="h3" color="error" gutterBottom>
              {state.error.title}
            </Typography>
            <Divider />
            <Typography>
              {state.error.detail || "Internal Server Error"}
            </Typography>
          </>
        ) : (
          <Typography variant="h5" gutterBottom>
            Server Error
          </Typography>
        )}
        <Button
          onClick={() => {
            navigate("/catalog");
          }}
        >
          Go back to catalog
        </Button>
      </Container>
    </>
  );
}

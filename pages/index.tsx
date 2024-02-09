import Container from "@mui/material/Container";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    axios.get("/api/pdf/list").then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <Container maxWidth="sm">
      <h1>Hello world</h1>
    </Container>
  );
}

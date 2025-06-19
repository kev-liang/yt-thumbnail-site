import { Container } from "@mui/material";
import NavBar from "../components/NavBar";
import terms from "./terms.json";

export default function Privacy() {
  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <div dangerouslySetInnerHTML={{ __html: terms.content }}></div>
      </Container>
    </>
  );
}

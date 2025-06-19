import { Container } from "@mui/material";
import NavBar from "../components/NavBar";
import privacyPolicy from "./privacyPolicy.json";

export default function Privacy() {
  return (
    <>
      <NavBar />

      <Container maxWidth="lg">
        <div dangerouslySetInnerHTML={{ __html: privacyPolicy.content }}></div>
      </Container>
    </>
  );
}

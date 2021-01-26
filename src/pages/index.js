import GamerProfileForm from "components/GamerProfileForm";
import ProgressPanel from "components/ProgressPanel";
import styled from "styled-components";
import media from "styled-media-query";

const Container = styled.section`
  background: ${(props) => props.theme.colors.darkBackground};
  color: ${(props) => props.theme.colors.lightText};
  height: 100vh;
  min-height: 60rem;
  margin: 0;
  padding: 0;
`;

const Layout = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr;
`;

const RegistrationPage = () => (
  <Container>
    <Layout>
      <ProgressPanel />
      <GamerProfileForm />
    </Layout>
  </Container>
);

export default RegistrationPage;

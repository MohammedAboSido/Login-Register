import Header from "./../../components/Header/Header";
import { Container, Typography } from "./style";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Container>
        <Typography color="red" fontSize="6" fontWeight="bold">
          h1-Text
        </Typography>
        <Typography color="red" fontSize="5" fontWeight="bold">
          h2-Text
        </Typography>
        <Typography color="red" fontSize="4" fontWeight="bold">
          h3-Text
        </Typography>
        <Typography color="red" fontSize="3" fontWeight="bold">
          h4-Text
        </Typography>
        <Typography color="red" fontSize="2" fontWeight="bold">
          h5-Text
        </Typography>
        <Typography color="red" fontSize="1" fontWeight="bold">
          h6-Text
        </Typography>
        <Typography color="red" fontSize="1" fontWeight="normal">
          P-Text
        </Typography>
      </Container>
    </div>
  );
};

export default HomePage;

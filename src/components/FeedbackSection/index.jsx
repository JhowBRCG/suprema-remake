import styled from "styled-components";
import { SectionTitle } from "../SectionTitle";
import FeedbackCard from "../FeedbackCard";

const FeedbackSection = () => {
  return (
    <Section>
      <SectionTitle>
        <span>Feedback</span> dos nossos clientes
      </SectionTitle>

      <FeedbackCard />
    </Section>
  );
};

const Section = styled.section`
  margin-block: 200px;

  h2 {
    text-align: center;
  }
`;

export default FeedbackSection;

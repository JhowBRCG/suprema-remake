import styled from "styled-components";
import { SectionTitle } from "../SectionTitle";
import ContactForm from "../ContactForm";

const ContactSection = () => {
  return (
    <Section>
      <SectionTitle>
        <span>Fale conosco</span>
      </SectionTitle>
      <ContactForm />
    </Section>
  );
};

const Section = styled.section`
  margin-top: 200px;

  h2 {
    text-align: center;
    margin-bottom: 90px;
  }

  form {
    margin: 0 auto;
  }
`;

export default ContactSection;

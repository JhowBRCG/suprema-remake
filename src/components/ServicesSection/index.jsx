import styled from "styled-components";
import { SectionTitle } from "../SectionTitle";
import { services } from "../../data";
import ServicesCard from "../ServicesCard";

const ServicesSection = () => {
  return (
    <Section>
      <SectionTitle>
        O que a <span>suprema company</span> faz para você?
      </SectionTitle>
      <Cards>
        {services.map((service) => (
          <ServicesCard key={service.id} data={service} />
        ))}
      </Cards>
    </Section>
  );
};

const Section = styled.section`
  margin-block: 153px;

  h2 {
    text-align: center;
  }
`;

const Cards = styled.div`
  margin-top: 64px;
  display: flex;
  gap: 6.2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export default ServicesSection;

import styled from "styled-components";
import { SectionTitle } from "../SectionTitle";
import AccordionWork from "../AccordionWork";
import { workProgress } from "../../data";

const WorkProcess = () => {
  return (
    <Section>
      <SectionTitle>
        Nosso <span>processo</span> de trabalho
      </SectionTitle>
      <ul>
        {workProgress.map((item) => (
          <AccordionWork key={item.id} data={item} />
        ))}
      </ul>
    </Section>
  );
};

const Section = styled.section`
  h2 {
    text-align: center;
    margin-bottom: 7.4rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
`;
export default WorkProcess;

import styled from "styled-components";

const ContactForm = () => {
  return (
    <Form>
      <Radios>
        <div>
          <input
            type="radio"
            name="radio"
            id="duvida"
            value="duvidas"
            checked
          />
          <label htmlFor="duvida">Dúvidas</label>
        </div>
        <div>
          <input type="radio" name="radio" id="orcamento" value="orcamento" />
          <label htmlFor="orcamento">Orçamento</label>
        </div>
      </Radios>
      <TextInputs>
        <div>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" placeholder="seu nome" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Mensagem</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="digite aqui..."
          ></textarea>
        </div>
      </TextInputs>
      <Button>enviar mensagem</Button>
    </Form>
  );
};

const Form = styled.form`
  max-width: 556px;
`;

const Radios = styled.div`
  display: flex;
  gap: 3rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.4rem;
  }

  input {
    width: 20px;
    height: 20px;

    &:checked {
      background: ${({ theme }) => theme.colors.secondaryColor};
    }
  }

  label {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.secondaryFont};
    font-size: 1.8rem;
    font-weight: 400;
  }
`;

const TextInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  gap: 2.5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.secondaryFont};
    font-weight: 400;
  }

  input,
  textarea {
    padding: 1.8rem 3rem;
    border-radius: ${({ theme }) => theme.radius.form};
    border: 0;
    font-family: ${({ theme }) => theme.fonts.secondaryFont};

    &::placeholder {
      font-family: ${({ theme }) => theme.fonts.secondaryFont};
    }
  }
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.secondaryColor};
  border-radius: ${({ theme }) => theme.radius.form};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.tertiaryFont};
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  border: none;
  width: 100%;
  padding: 2rem 3.5rem;
  margin-top: 4rem;
  cursor: pointer;
`;

export default ContactForm;

export default function Tablist({ children, buttons, ButtonContainer = "menu" }) {
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}

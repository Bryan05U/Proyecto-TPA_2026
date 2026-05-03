import "../styles/Header.css"

type HeaderProps = {
  titulo: string;
};

function Header({ titulo }: HeaderProps) {
  return (
    <div className="header">
      <h1>{titulo}</h1>
    </div>
  );
}

export default Header;
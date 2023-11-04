export interface headerProps {
  title: string;
  color?: string;
}

const Header = (props: headerProps) => {
  return (
    <header>
      <h1 style={{ color: props.color ? props.color : "blue" }}>
        {props.title}
      </h1>
    </header>
  );
};

export default Header;

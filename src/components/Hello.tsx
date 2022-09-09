type Props = {
  message: string;
}

const Hello: React.FC<Props> = (props: Props) => {
  // write the component logic
  // API request?
  const newMesage = `Hello, ${props.message}!!`;
  return <h3>{newMesage}</h3>;
}

export default Hello;

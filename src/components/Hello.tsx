type Props = {
  message: string;
}

const Hello: React.FC<Props> = (props: Props) => {
  return <h3>Hello, {props.message}</h3>;
}

export default Hello;

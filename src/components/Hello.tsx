type Props = {
  message: string;
}

const Hello: React.FC<Props> = (props: Props) => {
  // write the component logic
  // API request?
  const repositories = [
    { name: "honyanya", url: "https://github.com/honyanya/honyanya" },
    { name: "helloworld", url: "https://github.com/honyanya/helloworld" },
  ];
  const list = repositories.map((repository, index) =>
  <p key={index}>{repository.name} <a href={repository.url}>URL</a></p>
  );

  const newMesage = `Hello, ${props.message}!!`;
  return (
    <><h3>{newMesage}</h3><div>{list}</div></>
  );
}

export default Hello;

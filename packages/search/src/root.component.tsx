type Props = {
  name: string;
};

const Root = (props: Props) => {
  return <section>{props.name} is mounted!</section>;
};

export default Root;

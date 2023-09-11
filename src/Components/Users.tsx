type UserProps = {
  name: {
    first: string;
    last: string;
  };
};

export function Users(props: UserProps) {
  return (
    <div>
      {props.name.first}
      {props.name.last}
    </div>
  );
}

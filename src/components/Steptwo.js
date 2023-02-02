const Steptwo = ({ name, password, email }) => {
  console.log({ name, password, email });
  return (
    <div>
      <p>{email}</p>
      <p>{name}</p>
      <p>{password}</p>
    </div>
  );
};

export default Steptwo;

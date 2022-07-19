export default function ClubAddress({ address }) {
  const addressArr = Object.values(address);

  if (!address) return <p>Loading...</p>;

  const addressMap = addressArr.map((line) => <li>{line}</li>);
  return <ul>{addressMap}</ul>;
}

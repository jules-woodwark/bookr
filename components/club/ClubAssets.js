export default function ClubAssets({ assets }) {
  const clubAssets = assets.map((asset) => <li>{asset}</li>);

  return <ul>{clubAssets}</ul>;
}

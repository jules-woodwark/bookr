export default function ClubAssets({ assets }) {
  const clubAssets = assets.map((asset, i) => <li key={i}>{asset}</li>);

  return <ul>{clubAssets}</ul>;
}

export default function ClubAssets({ assets }) {
  const clubAssets = assets.map((asset) => <li key={asset}>{asset}</li>);

  return <ul>{clubAssets}</ul>;
}

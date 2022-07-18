export default function DeskLayoutButton() {
  const handleClick = () => alert('desk layout button clicked');

  return <button onClick={handleClick}>See Office Layout</button>;
}

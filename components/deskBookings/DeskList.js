import Desk from './Desk';

export default function DeskList() {
  const allDeskData = [
    {
      id: 1,
    },
  ];

  const deskMap = allDeskData.map((desk) => (
    <li>
      <Desk id={desk.id} />
    </li>
  ));

  return <ul>{deskMap}</ul>;
}

import GameTab from "./GameTab";

export default function AdminPanel() {
  const tabs = [
    { name: "Game", link: "/" },
    { name: "Member", link: "/" },
    { name: "Comment", link: "/" },
    { name: "Review", link: "/" },
    { name: "Report", link: "/" },
  ];
  const games = [
    {
      _id: "1",
      name: "Diablo 4",
      developer: "Blizzard",
      publisher: "admin",
      releaseDate: "June 6th, 2023",
      gener: ["arpg"],
      platform: ["pc", "xbox", "playstation"],
      status: "public",
      publishedDate: "Jun 14th, 2023",
    },
    {
      _id: "2",
      name: "Diablo 4",
      developer: "Blizzard",
      publisher: "admin",
      releaseDate: "June 6th, 2023",
      gener: ["arpg"],
      platform: ["pc", "xbox", "playstation"],
      status: "public",
      publishedDate: "Jun 14th, 2023",
    },
    {
      _id: "3",
      name: "Diablo 4",
      developer: "Blizzard",
      publisher: "admin",
      releaseDate: "June 6th, 2023",
      gener: ["arpg"],
      platform: ["pc", "xbox", "playstation"],
      status: "public",
      publishedDate: "Jun 14th, 2023",
    },
    {
      _id: "4",
      name: "Diablo 4",
      developer: "Blizzard",
      publisher: "admin",
      releaseDate: "June 6th, 2023",
      gener: ["arpg"],
      platform: ["pc", "xbox", "playstation"],
      status: "public",
      publishedDate: "Jun 14th, 2023",
    },
    {
      _id: "5",
      name: "Diablo 4",
      developer: "Blizzard",
      publisher: "admin",
      releaseDate: "June 6th, 2023",
      gener: ["arpg"],
      platform: ["pc", "xbox", "playstation"],
      status: "public",
      publishedDate: "Jun 14th, 2023",
    },
    {
      _id: "6",
      name: "Diablo 4",
      developer: "Blizzard",
      publisher: "admin",
      releaseDate: "June 6th, 2023",
      gener: ["arpg"],
      platform: ["pc", "xbox", "playstation"],
      status: "public",
      publishedDate: "Jun 14th, 2023",
    },
    {
      _id: "7",
      name: "Diablo 4",
      developer: "Blizzard",
      publisher: "admin",
      releaseDate: "June 6th, 2023",
      gener: ["arpg"],
      platform: ["pc", "xbox", "playstation"],
      status: "public",
      publishedDate: "Jun 14th, 2023",
    },
  ];
  return (
    <div className="">
      Admin Panel
      <div className="m-auto w-[57rem] border bg-gray-700 text-white rounded-xl">
        <div className="mx-20 p-3 flex justify-between ">
          {tabs.map((tab) => (
            <button key={tab.name}>{tab.name}</button>
          ))}
        </div>
      </div>
      <div className="mx-10 mt-20">
        <GameTab games={games} />
      </div>
    </div>
  );
}

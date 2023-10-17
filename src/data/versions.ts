type VersionTypeDef = {
  title: string;
  date: string;
  available: boolean;
};

const VersionsData: Array<VersionTypeDef> = [
  {
    title: "Version 1.0",
    date: "2023-01-15",
    available: true,
  },
  {
    title: "Version 1.1",
    date: "2023-03-08",
    available: true,
  },
  {
    title: "Version 2.0",
    date: "2023-05-20",
    available: false,
  },
  {
    title: "Version 2.1",
    date: "2023-07-10",
    available: true,
  },
  {
    title: "Version 3.0",
    date: "2023-09-02",
    available: false,
  },
];

export default VersionsData;

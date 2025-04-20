import { Table } from "@/src/components/common/Table";

export default function Home() {
  const columns = [
    "title",
    "artist",
    "slug",
    "genres",
    "createdAt",
    "updatedAt",
    "actions",
  ];

  const data = [
    {
      title: "Pagination Test Track 1",
      artist: "Pagination Artist",
      genres: ["Electronic", "Folk"],
      slug: "pagination-test-track-1",
      id: "1741093992727",
      createdAt: "2025-03-04T13:13:12.727Z",
      updatedAt: "2025-03-04T13:13:12.727Z",
    },
    {
      title: "Pagination Test Track 2",
      artist: "Pagination Artist",
      genres: ["Electronic"],
      slug: "pagination-test-track-2",
      id: "1741093992728",
      createdAt: "2025-03-04T13:13:12.728Z",
      updatedAt: "2025-03-04T13:13:12.728Z",
    },
    {
      title: "Pagination Test Track 3",
      artist: "Pagination Artist",
      genres: ["Electronic"],
      slug: "pagination-test-track-3",
      id: "1741093992734",
      createdAt: "2025-03-04T13:13:12.734Z",
      updatedAt: "2025-03-04T13:13:12.734Z",
    },
  ];

  return (
    <Table
      tableInstance="track"
      createButtonText="Create track"
      columns={columns}
      data={data}
    />
  );
}

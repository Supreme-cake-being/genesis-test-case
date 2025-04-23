import { Table } from "@/src/components/common/Table";
import { useTracks } from "@/src/hooks/useTracks";

const TracksPage = () => {
  const columns = [
    "title",
    "artist",
    "slug",
    "genres",
    "createdAt",
    "updatedAt",
    "actions",
  ];

  const { tracks, loading, error, handleFetch } = useTracks();

  return (
    <Table
      tableInstance="track"
      columns={columns}
      data={tracks?.data}
      loading={loading}
      meta={tracks?.meta}
      fetchData={handleFetch}
    />
  );
};

export default TracksPage;

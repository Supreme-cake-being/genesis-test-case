import { Table } from "@/src/components/common/Table";
import { useTracks } from "@/src/hooks/useTracks";

const TracksPage = () => {
  const columns = [
    "coverImage",
    "title",
    "artist",
    "slug",
    "genres",
    "audioFile",
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

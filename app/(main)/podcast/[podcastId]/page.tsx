const PodcastPage = ({ params }: { params: { podcastId: string } }) => {
  const { podcastId } = params;

  return <div>PodcastPage: {podcastId}</div>;
};

export default PodcastPage;

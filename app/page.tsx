import { PublicationSortCriteria, useExplorePublicationsQuery } from "./graphql/generated";

export default  function Home() {
  // const { isLoading, error, data } = useExplorePublicationsQuery(
  //   {
  //     endpoint: "https://api.lens.com",
  //     fetchParams: {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     },
  //   },
  //   {
  //     request: {
  //       sortCriteria: PublicationSortCriteria.TopCommented,
  //     },
  //   }
  // );

  // console.log(data, isLoading, error);

  return (
    <>
      <h1>Explore Publications</h1>
    </>
  );
}

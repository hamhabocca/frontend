import RallyCardBoard from "../items/RallyCardBoard";

function RallyList({rallyPosts}) {

  return (
    <>
        { rallyPosts.map(rally => <RallyCardBoard key={ rally.rallycode } rally={ rally }/>) }
    </>
  );
}

export default RallyList;
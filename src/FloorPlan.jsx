import Bath from "./Bath";
import Bedroom from "./Bedroom";
import LivingRoom from "./LivingRoom";
import Kitchen from "./Kitchen";

function FloorPlan() {
  const size = {
    full: "Full",
    half: "Half"
  };
  return (
    <>
      <Bedroom bedNum={1} />
      <Kitchen />
      <Bath size={"Full"} />
      <Bedroom bedNum={2} />
      <LivingRoom />
      <Bath size={"Half"} />
      <Bedroom bedNum={3} />
    </>
  );
}
export default FloorPlan;

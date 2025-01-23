import { Button } from "@mantine/core";

function Dugmence({ nekiKlik }) {
  console.log("nesto");
  return <Button onClick={nekiKlik}>De klikni</Button>;
}

export default Dugmence;

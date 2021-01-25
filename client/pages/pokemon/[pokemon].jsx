import React from "react";
import { useRouter } from "next/router";

const Pokemon = () => {
  const router = useRouter();
  const {
    query: { name },
  } = router;
  console.log(name);
  return (
    <div>
      <h1>Pokemon</h1>
    </div>
  );
};

export default Pokemon;

"use client";

import { useSearchParams, useRouter } from "next/navigation"; // from next/navigation in app directory
import { useEffect, useState } from "react";

export default function PokemonDetails() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [name, setName] = useState("");
  const [id, setID] = useState("");
  const [classification, setClassification] = useState("");

  useEffect(() => {
    setName(searchParams.get("name") || "");
    setID(searchParams.get("id") || "");
    setClassification(searchParams.get("classification") || "");
  }, [searchParams]);

  if (!name)
    return (
      <div>
        <p>Loading Pokemon Details</p>
      </div>
    );

  return (
    <div>
      <h1>{name}</h1>
      <h2>Pokemon ID: {id}</h2>
      {classification && <h2>Classification {classification}</h2>}
      <button onClick={() => router.push("/")}>Go Back</button>
    </div>
  );
}

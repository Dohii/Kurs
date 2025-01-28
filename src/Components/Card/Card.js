// Card.js
import React, { useImperativeHandle, useRef, forwardRef } from "react";
import { Card as MantineCard, Text, Button } from "@mantine/core";

const Card = forwardRef(({ title, description }, ref) => {
  const cardRef = useRef();

  // Expose the changeBackgroundColor function
  useImperativeHandle(ref, () => ({
    changeBackgroundColor: () => {
      if (cardRef.current) {
        cardRef.current.style.backgroundColor =
          cardRef.current.style.backgroundColor === "lightblue"
            ? "white"
            : "lightblue";
      }
    },
  }));
  return (
    <MantineCard
      shadow="sm"
      padding="lg"
      ref={cardRef}
      style={{ transition: "background-color 0.3s ease" }}
    >
      <Text weight={500} size="lg" mb="xs">
        {title}
      </Text>
      <Text size="sm" color="dimmed">
        {description}
      </Text>
    </MantineCard>
  );
});

export default Card;

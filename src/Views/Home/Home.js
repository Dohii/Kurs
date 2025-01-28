import React, {
  useMemo,
  useRef,
  useState,
  useCallback,
  useEffect,
} from "react";
import {
  Button,
  Container,
  Group,
  List,
  Loader,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import classes from "./Home.module.css";
import { mockData } from "../../Shared/mockData";
import Card from "../../Components/Card/Card";
import { useSupabase } from "../../Shared/AppContext";

export function Home() {
  const { posts } = useSupabase();
  const cardRefs = useRef([]);
  const savedData = localStorage.getItem("podatci");

  const handleChangeColor = (title) => {
    if (cardRefs.current[title]) {
      cardRefs.current[title].changeBackgroundColor();
    }
  };
  console.log(posts);
  return (
    <>
      <Container size="md">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A <span className={classes.highlight}>modern</span> React <br />{" "}
              components library
            </Title>
            <Text c="dimmed" mt="md">
              Build fully functional accessible web applications faster than
              ever – Mantine includes more than 120 customizable components and
              hooks to cover you in any situation
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>TypeScript based</b> – build type safe applications, all
                components and hooks export types
              </List.Item>
              <List.Item>
                <b>Free and open source</b> – all packages have MIT license, you
                can use Mantine in any project
              </List.Item>
              <List.Item>
                <b>No annoying focus ring</b> – focus ring will appear only when
                user navigates with keyboard
              </List.Item>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Source code
              </Button>
            </Group>
          </div>
        </div>
      </Container>

      <Container size="md">
        <Group direction="column" spacing="md">
          {mockData.map((item, index) => (
            <div key={item.id}>
              {/* Assign a ref to each Card */}
              <Card
                ref={(el) => (cardRefs.current[item.title] = el)}
                title={item.title}
                description={item.description}
              />
              <Button
                mt="sm"
                onClick={() => localStorage.setItem("podatci", "nesto")}
                variant="outline"
              >
                Change Background Color
              </Button>
            </div>
          ))}
        </Group>
      </Container>
    </>
  );
}

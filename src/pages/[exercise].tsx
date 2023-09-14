"use client";

import pb from "@/lib/pocketbase";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { Model } from "public/Fbx";
import React from "react";

const Exercise = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <Model position={[-10, -10, -200]} />
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          screenSpacePanning={false}
          minDistance={40}
          maxDistance={500}
          maxPolarAngle={Math.PI / 2}
          target={[-10, -10, -200]}
        />
        <ambientLight />
      </Canvas>
    </div>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const exercise = await pb
    .collection("exercises")
    .getFirstListItem(`id="${context.query.exercise}"`);

  return {
    props: {
      exercise,
    },
  };
};

export default Exercise;

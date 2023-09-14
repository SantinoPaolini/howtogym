import { SiluetaHumano } from "@/components/SiluetaHumano";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Equipamiento from "@/components/Equipamiento";
import pb from "@/lib/pocketbase";
import { InferGetServerSidePropsType } from "next";

export default function Page({
  equipmentOptions,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [selectedData, setSelectedData] = useState({
    muscle: "",
    equipment: "",
  });
  const [step, setStep] = useState(1);

  const handleSelectMuscle = (muscle: string) => {
    setSelectedData({ ...selectedData, muscle });
    setStep(2);
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <NavBar />
      <div className={styles.container}>
        {step === 1 && (
          <>
            <h1 className="font-bold text-2xl mb-6">Elige un musculo</h1>
            <SiluetaHumano handleSelectMuscle={handleSelectMuscle} />
          </>
        )}
        {step === 2 && (
          <>
            <h1 className="font-bold text-2xl mb-6">Elige tu equipamiento</h1>
            <Equipamiento
              equipmentOptions={equipmentOptions}
              selectedData={selectedData}
            />
          </>
        )}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const equipmentOptions = await pb.collection("equipment").getList();

  return {
    props: {
      equipmentOptions,
    },
  };
};

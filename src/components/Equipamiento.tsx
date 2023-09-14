import pb from "@/lib/pocketbase";
import Image from "next/image";
import Link from "next/link";
import { ListResult, RecordModel } from "pocketbase";
import { useCallback, useEffect, useState } from "react";

const Equipamiento = ({
  equipmentOptions,
  selectedData,
}: {
  equipmentOptions: ListResult<RecordModel["equipment"]>;
  selectedData: { muscle: string; equipment: string };
}) => {
  const [exercise, setExercise] = useState("");

  const getExercise = useCallback(async () => {
    try {
      const muscle = await pb
        .collection("muscles")
        .getFirstListItem(`name="${selectedData.muscle}"`, {
          expand: "exercise",
        });
      setExercise(muscle.exercise);
    } catch (error) {
      console.log(error);
    }
  }, [selectedData.muscle]);

  useEffect(() => {
    getExercise();
  }, [getExercise]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {equipmentOptions.items.map((equipment) => (
        <Link
          key={equipment.id}
          href={`/${exercise}`}
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            {equipment.name}
          </h5>
          <Image
            src={pb.files.getUrl(equipment, equipment.image)}
            alt=""
            width={50}
            height={50}
            className="object-cover w-full"
          />
        </Link>
      ))}
    </div>
  );
};

export default Equipamiento;

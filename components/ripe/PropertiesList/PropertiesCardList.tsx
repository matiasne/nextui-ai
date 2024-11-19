"use client";
import { useInView } from "react-intersection-observer";
import PropertyCard from "../PropertyCard/PropertyCard";
import { usePropertiesService } from "@/services/properties.service";
import { Card } from "@nextui-org/card";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Skeleton } from "@nextui-org/skeleton";

export default function PropertiesCardList() {
  const { ref, inView } = useInView({ threshold: 0 });

  const pagSize = 5;

  const propertiesService = usePropertiesService();

  const [propertiesList, setPropertiesList] = useState<any[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["getProperties", currentPage],
    queryFn: async () => {
      console.log(currentPage);
      const data = await propertiesService.getAll(6, currentPage, pagSize);

      if (data) {
        setPropertiesList((prev: any) => [...prev, ...data.properties]);
      }

      console.log(data);
      return propertiesList;
    },
  });

  const handleNextPage = () => setCurrentPage((prev) => prev + 1);
  const handlePreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));

  useEffect(() => {
    console.log(inView, isPending);
    if (inView && !isPending) {
      handleNextPage();
    }
  }, [inView]);

  const loadingSkeleteon = () => {
    return (
      <Card className="w-full space-y-5 p-4" radius="md">
        <Skeleton className="rounded-lg">
          <div className="h-24 rounded-lg bg-default-300"></div>
        </Skeleton>
        <div className="space-y-3">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </Card>
    );
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        {propertiesList?.map((property: any, index) => (
          <PropertyCard key={index} property={property} onClick={() => {}} />
        ))}
      </div>

      {isPending ? <>{loadingSkeleteon()}</> : null}
      <div ref={ref} />
    </>
  );
}

"use client";
import DoubleColumnPanel from "../../components/ui/SideColumnLayout/double-column-panel/double-column-panel";

import { GoogleMap } from "@react-google-maps/api";
import PropertiesCardList from "@/components/ripe/PropertiesList/PropertiesCardList";
import ToastNotification from "@/components/ui/Toast/Toast";
import { useToast } from "@/components/ui/Toast/ToastProvider";
import PropertiesMap from "@/components/ripe/PropertiesMap/PropertiesMap";

export default function MapViewPage() {
  const { openToast } = useToast();

  openToast({
    color: "success",
    duration: 3000,
    content: "MATIAS",
  });

  return (
    <>
      <DoubleColumnPanel
        columnLeft={<PropertiesCardList />}
        columnRight={<PropertiesMap markers={[]} />}
      ></DoubleColumnPanel>
    </>
  );
}

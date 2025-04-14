import { Stack } from "expo-router";
import { CustomHeaderLeft } from "@/components/CustomHeaderLeft";

export default function RootLayout() {
  return <Stack />;
  // return (
  //   <Stack
  //     screenOptions={{
  //       headerLeft: () => <CustomHeaderLeft />
  //     }}
  //   />
  // );
}

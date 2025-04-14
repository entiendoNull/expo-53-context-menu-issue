import { Button } from "@expo/ui/Button";
import { ContextMenu, Submenu } from "@expo/ui/ContextMenu";
import { IconSymbol } from "./IconSymbol";
import { TouchableOpacity } from "react-native";

export function CustomHeaderLeft() {
  return (
    <ContextMenu>
      <ContextMenu.Items>
        <Button
          systemImage={{ ios: "person.crop.circle.badge.xmark" }}
          onPress={() => console.log("Pressed1")}
        >
          Foo
        </Button>
        <Button
          variant="bordered"
          systemImage={{ ios: "heart" }}
          onPress={() => console.log("Pressed2")}
        >
          Bar
        </Button>
      </ContextMenu.Items>
      <ContextMenu.Trigger>
        <TouchableOpacity>
          <IconSymbol name="house.fill" size={24} color="black" />
        </TouchableOpacity>
      </ContextMenu.Trigger>
    </ContextMenu>
  );
}

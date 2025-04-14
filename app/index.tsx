import * as React from "react";
import { Text, View } from "react-native";
import { ContextMenu, Submenu } from "@expo/ui/ContextMenu";
import { Button } from "@expo/ui/Button";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <ContextMenu style={{ width: 150, height: 50 }}>
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
          <Submenu
            button={
              <Button variant="bordered" style={{ width: 150, height: 50 }}>
                Submenu
              </Button>
            }
          >
            <Button
              variant="bordered"
              systemImage={{ ios: "heart" }}
              onPress={() => console.log("Pressed2")}
            >
              Baz
            </Button>
          </Submenu>
        </ContextMenu.Items>
        <ContextMenu.Trigger>
          <Button variant="bordered" style={{ width: 150, height: 50 }}>
            Show Menu
          </Button>
        </ContextMenu.Trigger>
      </ContextMenu>
    </View>
  );
}

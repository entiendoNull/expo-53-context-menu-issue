# Issue repro for Expo SDK 53
Issue: https://github.com/expo/expo/issues/36147

## Issue: Context Meny in Stack Header on iOS

While experimenting with SDK 53 and testing out the new (experimental) expo-ui `ContextMenu`, I decided to upgrade one of my iOS-only apps. I thought it would be a good opportunity to try replacing a `Zeego` dropdown menu in the `headerLeft` with the expo-ui equivalent.

However, when used in the stack header, the app completely freezes on a white screen at launch or reload. So far, this issue appears to be isolated to iOS and only occurs when the menu is used in the header - in-screen usage works as expected on both platforms.

<table>
  <tr>
   <th></th>
   <th>
    In Screen
   </th>
   <th>
    In Stack header
   </th>
  <tr>
    <td>
      iOS
    </td>
    <td>✅</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>
      Android
    </td>
    <td>✅</td>
    <td>✅</td>
  </tr>
</table>

https://github.com/user-attachments/assets/fd4652ab-3d5f-4043-acfb-a7582b1feca4

### Steps to repro from example repo
1. Install the project
2. Create a development build and run it on your iOS simulator or device — everything should work as expected
3. In `_layout.tsx`, comment out the default <Stack /> and instead return the following:
```
return (
  <Stack
    screenOptions={{
      headerLeft: () => <CustomHeaderLeft />
    }}
  />
);
```

![Image](https://github.com/user-attachments/assets/91c2c927-a763-4f70-bc34-90fec5e3ca66)
4. Notice how the CustomHeaderLeft renders correctly
5. Reload the app - it freezes on a completely blank screen

## Issue: Unexpected order of items on iOS

Another issue I noticed is that menu items appear in reverse order on iOS. The expected order is:

```
Foo
Bar
Submenu
```

This works correctly on Android, but on iOS the order is flipped.

![Image](https://github.com/user-attachments/assets/23024cdb-5bf6-4e81-b971-26b23d5c0564)

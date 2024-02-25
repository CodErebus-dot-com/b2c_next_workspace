import { Avatar, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { AuthContext } from "@contexts";
import { TInstance } from "@src/hooks/useInstance";
import { useContext } from "react";

export const SignOutButton = () => {
  const { instance }: { instance: TInstance } = useContext(AuthContext);

  return (
    <div>
      <Menu>
        <MenuButton>
          <Avatar bg='red.500' height='50' width='50' />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={instance?.signOutRedirect}>
            SignOut via Redirect
          </MenuItem>
          {/* <MenuItem onClick={instance?.signOutPopup}>
            SignOut via Popup
          </MenuItem> */}
        </MenuList>
      </Menu>
    </div>
  );
};

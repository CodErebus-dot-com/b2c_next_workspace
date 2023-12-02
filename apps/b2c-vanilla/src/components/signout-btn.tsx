import { useContext } from "react";
import { AuthContext } from "@contexts";
import { Avatar, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

export const SignOutButton = () => {
  const { instance } = useContext(AuthContext);

  return (
    <div>
      <Menu>
        <MenuButton>
          <Avatar bg="red.500" height="50" width="50" />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={instance?.signOutRedirect}>Sign Out</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

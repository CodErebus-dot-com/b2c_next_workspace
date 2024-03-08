import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { signInPopup, signInRedirect } from "@src/authService";

export const SignInButton = () => {
  return (
    <div>
      <Menu>
        <MenuButton className='btn-rose'>Login</MenuButton>
        <MenuList>
          <MenuItem onClick={signInPopup}>SignIn via Popup</MenuItem>
          <MenuItem onClick={signInRedirect}>SignIn via Redirect</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

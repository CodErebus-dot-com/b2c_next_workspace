import { Heading } from "@chakra-ui/react";
import { FC } from "react";
import { HeadingLevelProps, TitleProps } from "./types";

const Title: FC<TitleProps> = ({ level = 2, children, ...otherProps }) => {
  const headingLevel: HeadingLevelProps = `h${level}`;

  return (
    <Heading as={headingLevel} {...otherProps}>
      {children}
    </Heading>
  );
};

export default Title;

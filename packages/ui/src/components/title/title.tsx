import { FC } from "react"
import { TitleProps, HeadingLevelProps } from "./types"
import { Heading } from '@chakra-ui/react'

const Title: FC<TitleProps> = ({
  level = 2,
  children,
  ...otherProps
}) => {
  const headingLevel: HeadingLevelProps = `h${level}`;

  return (
    <Heading as={headingLevel} {...otherProps}>
      {children}
    </Heading>
  )
}

Title.defaultProps = {
  level: 2
}
export default Title

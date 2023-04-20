import { Heading, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/light-bulb.svg";

import React from "react";

const Header = () => {
  return (
    <>
      <Image src={Logo} alt='Logo' width={100} marginBottom='1rem' />
      <Heading color='white' marginBottom='1rem'>
        AI Keyword Extractor
      </Heading>
      <Text fontSize={25} textAlign='center'>
        Paste in your text below and we'll extract the most important keywords
        for you
      </Text>
    </>
  );
};

export default Header;

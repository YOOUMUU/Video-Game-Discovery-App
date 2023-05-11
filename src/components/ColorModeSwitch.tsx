import { Button, HStack, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Button
        onClick={toggleColorMode}
        borderRadius={20}
        variant="unstyled"
        marginLeft={2}
      >
        {colorMode === 'dark' ? (
          <FaMoon fontSize={20} />
        ) : (
          <FaSun fontSize={24} />
        )}
      </Button>
    </HStack>
  );
};

export default ColorModeSwitch;

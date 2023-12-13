import { Flex, Image, Skeleton } from "@chakra-ui/react";
import { COLORS } from "../themes/colors";

export const SkeletonPage = () => {
  return (
    <Flex w="full" h="100vh" align="center" justify="center" bg={COLORS.BLACK}>
      <Flex
        position="fixed"
        bg={COLORS.COMPLEMENTARY}
        w="300px"
        h="100vh"
        left="0"
        direction="column"
        align="center"
        justify="space-evenly"
      >
        <Image src="./darkLogo.png" w="280px" />
        <Flex
          direction="column"
          w="full"
          align="center"
          justify="space-evenly"
          h="200px"
        >
          <Skeleton
            height="48px"
            w="90%"
            mb="2"
            startColor={COLORS.SECONDARY}
            endColor={COLORS.PRIMARY_DARK}
          />
          <Skeleton
            height="48px"
            w="90%"
            mb="2"
            startColor={COLORS.SECONDARY}
            endColor={COLORS.PRIMARY_DARK}
          />
          <Skeleton
            height="48px"
            w="90%"
            mb="2"
            startColor={COLORS.SECONDARY}
            endColor={COLORS.PRIMARY_DARK}
          />
        </Flex>
        <Skeleton
          height="58px"
          startColor={COLORS.SECONDARY}
          endColor={COLORS.PRIMARY_DARK}
          borderRadius="30px"
          w="90%"
          mb="2"
        />
      </Flex>
    </Flex>
  );
};

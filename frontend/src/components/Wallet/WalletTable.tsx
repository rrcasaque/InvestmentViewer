import {
  Button,
  Flex,
  Input,
  Select,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { COLORS } from "../../themes/colors";
import { SortIcon } from "../../assets/icons/sortIcon";

export const WalletTable = () => {
  return (
    <Flex w="full" direction="column">
      <Flex w="full" align="center" h="80px">
        <Input bg={COLORS.LIGHT} placeholder="Buscar" w="240px" mr="8px" />
        <Select
          bg={COLORS.LIGHT}
          placeholder="Categoria"
          w="160px"
          mx="8px"
        ></Select>
        <Select
          bg={COLORS.LIGHT}
          placeholder="Emissor/Gestor"
          w="160px"
          mx="8px"
        ></Select>
        <Button color={COLORS.LIGHT} bg={COLORS.PRIMARY_LIGHT} mx="8px">
          Limpar Filtros
        </Button>
      </Flex>
      <Table>
        <Thead>
          <Tr>
            <Th
              color={COLORS.WHITE}
              textAlign="center"
              bg={COLORS.PRIMARY_DARK}
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
            >
              <Flex
                align="center"
                justify="center"
                _hover={{ cursor: "pointer" }}
              >
                <Text>Nome</Text> <SortIcon boxSize="24px" />
              </Flex>
            </Th>
            <Th
              color={COLORS.WHITE}
              textAlign="center"
              bg={COLORS.PRIMARY_DARK}
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
            >
              <Flex
                align="center"
                justify="center"
                _hover={{ cursor: "pointer" }}
              >
                <Text>Categoria</Text> <SortIcon boxSize="24px" />
              </Flex>
            </Th>
            <Th
              color={COLORS.WHITE}
              textAlign="center"
              bg={COLORS.PRIMARY_DARK}
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
            >
              <Flex
                align="center"
                justify="center"
                _hover={{ cursor: "pointer" }}
              >
                <Text>Emissor/Gestor</Text> <SortIcon boxSize="24px" />
              </Flex>
            </Th>
            <Th
              color={COLORS.WHITE}
              textAlign="center"
              bg={COLORS.PRIMARY_DARK}
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
            >
              <Flex
                align="center"
                justify="center"
                _hover={{ cursor: "pointer" }}
              >
                <Text>Valor</Text> <SortIcon boxSize="24px" />
              </Flex>
            </Th>
          </Tr>
        </Thead>
        <Tbody color={COLORS.PRIMARY_LIGHT} fontWeight="700">
          <Tr
            _hover={{
              bg: COLORS.PRIMARY_LIGHT,
              color: COLORS.PRIMARY_DARK,
              cursor: "pointer",
            }}
          >
            <Td
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
              textAlign="center"
            >
              HGLG11
            </Td>
            <Td
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
              textAlign="center"
            >
              FII
            </Td>
            <Td
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
              textAlign="center"
            >
              CSHG Logística
            </Td>
            <Td
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
              textAlign="center"
            >
              R$1.234,56
            </Td>
          </Tr>
          <Tr
            _hover={{
              bg: COLORS.PRIMARY_LIGHT,
              color: COLORS.PRIMARY_DARK,
              cursor: "pointer",
            }}
          >
            <Td
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
              textAlign="center"
            >
              HGLG11
            </Td>
            <Td
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
              textAlign="center"
            >
              FII
            </Td>
            <Td
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
              textAlign="center"
            >
              CSHG Logística
            </Td>
            <Td
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
              textAlign="center"
            >
              R$1.234,56
            </Td>
          </Tr>
          <Tr
            _hover={{
              bg: COLORS.PRIMARY_LIGHT,
              color: COLORS.PRIMARY_DARK,
              cursor: "pointer",
            }}
          >
            <Td
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
              textAlign="center"
            >
              HGLG11
            </Td>
            <Td
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
              textAlign="center"
            >
              FII
            </Td>
            <Td
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
              textAlign="center"
            >
              CSHG Logística
            </Td>
            <Td
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
              textAlign="center"
            >
              R$1.234,56
            </Td>
          </Tr>
          <Tr
            _hover={{
              bg: COLORS.PRIMARY_LIGHT,
              color: COLORS.PRIMARY_DARK,
              cursor: "pointer",
            }}
          >
            <Td
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
              textAlign="center"
            >
              HGLG11
            </Td>
            <Td
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
              textAlign="center"
            >
              FII
            </Td>
            <Td
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
              textAlign="center"
            >
              CSHG Logística
            </Td>
            <Td
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
              textAlign="center"
            >
              R$1.234,56
            </Td>
          </Tr>
          <Tr
            _hover={{
              bg: COLORS.PRIMARY_LIGHT,
              color: COLORS.PRIMARY_DARK,
              cursor: "pointer",
            }}
          >
            <Td
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
              textAlign="center"
            >
              HGLG11
            </Td>
            <Td
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
              textAlign="center"
            >
              FII
            </Td>
            <Td
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
              textAlign="center"
            >
              CSHG Logística
            </Td>
            <Td
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
              textAlign="center"
            >
              R$1.234,56
            </Td>
          </Tr>
          <Tr
            _hover={{
              bg: COLORS.PRIMARY_LIGHT,
              color: COLORS.PRIMARY_DARK,
              cursor: "pointer",
            }}
          >
            <Td
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
              textAlign="center"
            >
              HGLG11
            </Td>
            <Td
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
              textAlign="center"
            >
              FII
            </Td>
            <Td
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
              textAlign="center"
            >
              CSHG Logística
            </Td>
            <Td
              border="1px solid"
              borderColor={COLORS.PRIMARY_LIGHT}
              textAlign="center"
            >
              R$1.234,56
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Flex>
  );
};

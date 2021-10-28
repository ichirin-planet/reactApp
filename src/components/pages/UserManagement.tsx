/* eslint-disable react-hooks/exhaustive-deps */
import {
  Center,
  Modal,
  ModalContent,
  ModalOverlay,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  useEffect(() => getUsers(), []);
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify="center">
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                imageUrl="https://images.unsplash.com/photo-1583875074734-b6fd484ddc67"
                userName={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <Modal>
        <ModalOverlay />
        <ModalContent>
          <p>テスト</p>
        </ModalContent>
      </Modal>
    </>
  );
});

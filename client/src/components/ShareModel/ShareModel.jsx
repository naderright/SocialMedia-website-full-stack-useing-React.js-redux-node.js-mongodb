import { Modal, useMantineTheme } from "@mantine/core";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import PostShare from "../PostSide/PostShare/PostShare";


function ShareModal({ modelOpened, setModalOpened}) {
  const theme = useMantineTheme();
  

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modelOpened}
      onClose={() => setModalOpened(false)}
    >
    <PostShare/>
    </Modal>
  );
}

export default ShareModal;
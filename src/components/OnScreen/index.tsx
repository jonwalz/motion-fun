import * as React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Container = styled.div`
  color: white;
  font-size: 72px;
  font-weight: bold;
  display: flex;
  align-items: center;
  border: 1px solid black;
`;

interface Props {
  value: string;
}

const OnScreen = ({ value }: Props) => {
  const [show, setShow] = React.useState(false);
  return (
    <Container onClick={() => setShow(true)}>
      <AnimatePresence>
        {show && (
          <motion.div
            key={value}
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
          >
            {value}
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default OnScreen;

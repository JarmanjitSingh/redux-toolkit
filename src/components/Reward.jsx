import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmount } from "../reduxToolkit/reducers/reward";

function Reward() {

  const value = useSelector(state=> state.reward.value);
  const dispatch = useDispatch();

  return (
    <VStack p={"5"} border={"2px solid white"} fontSize={'1.5rem'}>
      <Text color={"red"}>Reward Component</Text>
      <Text color={"yellow"}>Total Points: ${value}</Text>
      <HStack>
        <Button onClick={()=> dispatch(increment())}>Increment +</Button>
        <Button onClick={()=> dispatch(incrementByAmount(7))}>Increment By Seven +</Button>
      </HStack>
    </VStack>
  );
}

export default Reward;

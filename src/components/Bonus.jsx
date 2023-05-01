import { Button, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../reduxToolkit/slices/bonus';

function Bonus() {
    const points = useSelector(state => state.bonus.points)
    const dispatch = useDispatch();
  return (
    <VStack p={'5'} border={'2px solid white'} fontSize={'1.5rem'}>
      <Text color={'red'}>Bonus component</Text>
      <Text color={'Yellow'}>Total Points: ${points}</Text>
      <Button onClick={()=> dispatch(increment())}>Increment +</Button>
    </VStack>
  )
}

export default Bonus

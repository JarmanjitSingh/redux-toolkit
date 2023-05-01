import { Button, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../reduxToolkit/slices/account';

function Account() {

    const amount = useSelector(state => state.account.amount);
    const dispatch = useDispatch();
    const [incAmt, setIncAmt] = useState(0)
  return (
    <VStack border={'2px solid white'} p={'5'} fontSize={'1.5rem'}>
        <Text color={'red'}>Account Component</Text>
        <Text color={'yellow'}>Amount: ${amount}</Text>
        <HStack >
            <Button w={'full'} onClick={()=>dispatch(increment())}>Increment +</Button>
            <Button w={'full'} onClick={()=> dispatch(decrement())}>Decrement -</Button>
            <Input bgColor={'white'} onChange={(e)=> setIncAmt(e.target.value)} value={incAmt}></Input>
            <Button w={'full'} onClick={()=> dispatch(incrementByAmount(parseInt(incAmt)))}>Increment By {incAmt} +</Button>
        </HStack>
    </VStack>
  )
}

export default Account

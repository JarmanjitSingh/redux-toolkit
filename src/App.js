import { Text, VStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';
import Reward from './components/Reward';

function App() {

  const amount = useSelector(state => state.account.amount);
  const points = useSelector(state => state.bonus.points);
  const value = useSelector(state => state.reward.value);

  return (
    <>
    <VStack alignItems={'start'} p={'5'} fontSize={'1.5rem'}>
      <Text color={'red'}>App</Text>
      <Text color={'yellow'}>Current Amount: ${amount}</Text>
      <Text color={'yellow'}>Total Bonus: ${points}</Text>
      <Text color={'yellow'}>Total Reward: ${value}</Text>
    </VStack>

    <Account />
    <Bonus />
    <Reward />
    </>
  );
}

export default App;

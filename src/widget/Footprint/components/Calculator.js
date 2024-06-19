import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';

const Calculator = () => {
  const [companyType, setCompanyType] = useState('');
  const [employees, setEmployees] = useState(0);
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    if (companyType === 'product' || employees > 100) {
      setResult('Please get in touch with our business development team.');
    } else if (companyType === 'service' && employees <= 100) {
      const wasteFootprint = employees * 1.5 * 30;
      const cRECYs = wasteFootprint <= 4000 ? 10 : wasteFootprint * 0.01;
      setResult(`Waste Footprint: ${wasteFootprint} kgs/month\n cRECYs: ${cRECYs} per month`);
    }
  };

  return (
    <VStack spacing={4}>
      <Box w="100%" p={4}>
        <Text fontSize="2xl" fontWeight="bold">Waste Footprint Calculator</Text>
        <FormControl id="company-type" isRequired>
          <FormLabel>Company Type:</FormLabel>
          <Select placeholder="Select type" onChange={(e) => setCompanyType(e.target.value)}>
            <option value="product">Product</option>
            <option value="service">Service</option>
          </Select>
        </FormControl>
        <FormControl id="employees" isRequired>
          <FormLabel>Number of Employees:</FormLabel>
          <Input type="number" onChange={(e) => setEmployees(Number(e.target.value))} />
        </FormControl>
        <Button colorScheme="blue" onClick={handleCalculate}>Calculate</Button>
        {result && (
          <Box mt={4} p={4} bg="gray.100">
            <Text>{result}</Text>
          </Box>
        )}
      </Box>
    </VStack>
  );
};

export default Calculator;

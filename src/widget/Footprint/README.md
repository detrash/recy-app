#Company Waste Footprint Calculator
```
1 - The calculator needs the client to first ask if it is a product or a service company and how many employees.

2 - If product or above 100 employees it directs to ask for a busdev to get in touch.

3 - If service and below 100 employees gives result based on:

Employees number x 1.5kgs x 30 = waste footprint in kgs

Up to 4k kgs a month = 10 cRECYs per month

Above 4k kgs a month = 1% in cRECYs a month. Generate nextjs front end files for this widget
```

```bash
git clone --single-branch --branch feat-WasteFootprintCalculator https://github.com/detrash/detrash-app.git
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
```
This updated component uses Chakra UI’s Box, Button, FormControl, FormLabel, Input, Select, Text, and VStack components to create a more structured and styled UI. The handleCalculate function remains the same, performing the calculations and setting the result state, which is then displayed in a styled Box below the form.

Make sure to wrap your application with the ChakraProvider at the root level, typically in _app.js, to apply the Chakra UI styles throughout your application.
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft } from 'lucide-react';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useCalculatorStore } from '@/stores/use-calculator';

const calculatorStepOneFormSchema = z.object({
  company_type: z.string({
    required_error: 'Please select a option to display.',
  }),
});

type CalculatorStepOneFormValues = z.infer<typeof calculatorStepOneFormSchema>;

export const CalculatorStepOne = () => {
  const { setInputs, setNextStep, inputs, currentStep, setPreviousStep } = useCalculatorStore();

  const navigate = useNavigate();

  const form = useForm<CalculatorStepOneFormValues>({
    defaultValues: {
      company_type: inputs.company_type,
    },
    mode: 'onChange',
    resolver: zodResolver(calculatorStepOneFormSchema),
  });

  const defaultValuesWatched = form.watch();

  const canForwardButton = !!defaultValuesWatched.company_type;

  function onSubmit(data: CalculatorStepOneFormValues) {
    setInputs(data);
    setNextStep();
  }

  const handleBackNavigate = () => {
    if (currentStep === 1) {
      navigate(-1);
      return;
    }

    setPreviousStep();
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-1 flex-col gap-2"
        onSubmit={form.handleSubmit(onSubmit)}
        id="calculator-form"
      >
        <section className="mb-3 sm:m-0">
          <h2 className="mb-1 text-2xl font-bold leading-relaxed text-gray-800 antialiased sm:text-3xl">
            Your business sells a service or a product?
          </h2>
        </section>

        <section>
          <FormField
            control={form.control}
            name="company_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="product">Product</SelectItem>
                    <SelectItem value="service">Service</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>
      </form>

      <footer className="flex gap-4">
        <Button variant="outline" size="icon" onClick={handleBackNavigate}>
          <ArrowLeft />
        </Button>
        <Button
          className="w-full"
          type="submit"
          form="calculator-form"
          disabled={!canForwardButton}
        >
          Advance
        </Button>
      </footer>
    </Form>
  );
};

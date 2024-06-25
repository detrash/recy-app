import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useCalculatorStore } from '@/stores/use-calculator';

import { ResultContact } from './contact';

const checkoutFormValue = z.object({
  terms_and_conditions: z.boolean({
    required_error: 'Please accept the terms and conditions.',
  }),
  wallet_address: z.string(),
});

type CheckoutFormValues = z.infer<typeof checkoutFormValue>;

export default function CalculatorResultScreen() {
  const { inputs } = useCalculatorStore();

  const form = useForm<CheckoutFormValues>({
    mode: 'onChange',
    resolver: zodResolver(checkoutFormValue),
  });

  const needContact =
    inputs.company_type === 'product' ||
    (inputs.employees_quantity && inputs.employees_quantity >= 100);

  // Employees number x 1.5kgs x 30 = waste footprint in kgs
  const wasteFootprint = inputs.employees_quantity && inputs.employees_quantity * 1.5 * 30;

  const handleCalculateCrecys = () => {
    if (!wasteFootprint) {
      return 0;
    }

    // Up to 4k kgs a month = charges 10 cRECYs per month
    if (wasteFootprint <= 4000) {
      return 10;
    }

    // Above 4k kgs a month = charges 1% in cRECYs a month.
    return wasteFootprint * 0.01;
  };

  function onSubmit(data: CheckoutFormValues) {
    console.log(data);
  }

  // Above > 100 employees or product result contact
  if (needContact) {
    return <ResultContact />;
  }

  return (
    <>
      <section className="bg- bg-[positon: '100%'] ext-white bg- flex justify-center bg-[url('/assets/bg/ocean-dark.jpg')] bg-cover bg-center p-6 text-center text-white">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-bold text-bold text-6xl">
                <span className="text-blue-400">{Math.ceil(handleCalculateCrecys())}</span> cRECYs
              </h2>
              <span className="text-base">per month</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto my-6 flex max-w-2xl flex-col gap-6">
        <Card className="sm:rounded-xl sm:shadow-xl">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <h2 className="text-lg lg:text-2xl">One step from cleaning the world with Recy!</h2>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Form {...form}>
              <form
                className="flex flex-1 flex-col gap-4"
                onSubmit={form.handleSubmit(onSubmit)}
                id="calculator-form"
              >
                <FormField
                  control={form.control}
                  name="wallet_address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-600">
                        Please provide us with your business digital wallet public address to
                        receive our digital assets. (Preferably Valora Wallet, Metamask or Trust
                        Wallet)
                      </FormLabel>
                      <FormItem>
                        <FormLabel>Wallet Address</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="terms_and_conditions"
                  render={({ field }) => (
                    <FormItem className="flex flex-col justify-center gap-2 align-middle">
                      <FormLabel className="text-gray-600">
                        After payment, you have 15 days to provide a wallet public address per email
                        otherwise it will be considered the user wants to donate the locked assets
                        back to sustainable waste treatment projects.
                      </FormLabel>

                      <div className="flex justify-center gap-2 align-middle">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>

                        <FormLabel>Accept terms and conditions</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </form>
            </Form>

            <Button
              size="lg"
              type="submit"
              disabled={!form.watch().terms_and_conditions || wasteFootprint === 0}
              onClick={() =>
                (window.location.href = 'https://buy.stripe.com/test_9AQ3cndg51xB2YM7ss')
              }
            >
              Clean World
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

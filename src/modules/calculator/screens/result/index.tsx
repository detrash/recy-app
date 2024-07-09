import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
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

const checkoutFormValue = z.object({
  terms_and_conditions: z.boolean({
    required_error: 'Please accept the terms and conditions.',
  }),
  wallet_address: z.string().optional(),
});

type CheckoutFormValues = z.infer<typeof checkoutFormValue>;
// Above 4k kgs a month is considered a big waste footprint
const BIG_WASTE_FOOTPRINT = 4000;

export default function CalculatorResultScreen() {
  const { inputs } = useCalculatorStore();

  const form = useForm<CheckoutFormValues>({
    mode: 'onChange',
    resolver: zodResolver(checkoutFormValue),
  });

  // Employees number x 1.5kgs x 30 = waste footprint in kgs
  const wasteFootprint = inputs.employees_quantity && inputs.employees_quantity * 1.5 * 30;

  const needPersonalizedSupport =
    inputs.company_type === 'product' ||
    (inputs.employees_quantity && inputs.employees_quantity >= 100) ||
    (wasteFootprint && wasteFootprint >= BIG_WASTE_FOOTPRINT);

  const handleCalculateCrecys = () => {
    if (!wasteFootprint) {
      return 0;
    }

    // Up to 4k kgs a month = charges 10 cRECYs per month
    if (wasteFootprint <= BIG_WASTE_FOOTPRINT) {
      return 10;
    }

    // Above 4k kgs a month = charges 1% in cRECYs a month.
    return wasteFootprint * 0.01;
  };

  function onSubmit(data: CheckoutFormValues) {
    console.log(data);

    window.location.href = 'https://buy.stripe.com/test_9AQ3cndg51xB2YM7ss';
  }

  // Above > 100 employees or product company redirect to contact page
  if (needPersonalizedSupport) {
    return (
      <Navigate
        to={`/calculator/contact?company_type=${inputs.company_type}&employees_quantity=${inputs.employees_quantity}&waste_foot_print=${wasteFootprint}`}
      />
    );
  }

  if (wasteFootprint === 0) {
    return <Navigate to="/calculator" />;
  }

  return (
    <>
      <section className="bg-[positon: '100%'] ext-white bg- flex justify-center bg-blue-500 bg-[url('/assets/bg/ocean-dark.jpg')] bg-cover bg-center p-6 text-center text-white">
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
              <form className="flex flex-1 flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
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

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button size="lg" type="submit" disabled={!form.watch().terms_and_conditions}>
                  Clean World
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

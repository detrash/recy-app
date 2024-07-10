import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const contactFormValue = z.object({
  email: z.string().email(),
});

type ContactFormValues = z.infer<typeof contactFormValue>;

export const CalculatorContactScreen = () => {
  const { t } = useTranslation();
  const form = useForm<ContactFormValues>({
    mode: 'onChange',
    resolver: zodResolver(contactFormValue),
  });

  function onSubmit(data: ContactFormValues) {
    console.log(data);
  }

  return (
    <div className="container mx-auto my-6 flex max-w-2xl flex-col gap-6">
      <Card className="sm:rounded-xl sm:shadow-xl">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <h2 className="text-lg lg:text-2xl">{t('calculator.contact.title')}</h2>
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600">{t('calculator.contact.label')}</FormLabel>
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </FormItem>
                )}
              />
            </form>
          </Form>

          <Button size="lg" type="submit">
            {t('calculator.contact.button')}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

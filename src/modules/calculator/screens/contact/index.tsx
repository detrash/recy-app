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
import { useToast } from '@/components/ui/use-toast';

const contactFormValue = z.object({
  email: z.string().email(),
});

type ContactFormValues = z.infer<typeof contactFormValue>;

export const CalculatorContactScreen = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const form = useForm<ContactFormValues>({
    mode: 'onChange',
    resolver: zodResolver(contactFormValue),
  });

  async function onSubmit(data: ContactFormValues) {
    console.log(data);
    try {
      const response = await fetch(
        'https:/detrash-recy-api-git-main-de-trash.vercel.app/api/send/support',
        {
          body: JSON.stringify({ email: data.email }),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        },
      );

      if (!response.ok) {
        const data = await response.json();

        throw new Error(data.error.message);
      }

      if (response.ok) {
        toast({
          title: 'We will do our best to respond to you as soon as possible.',
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: error.message,
          variant: 'destructive',
        });
      }
    }
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

              <Button size="lg" type="submit">
                {t('calculator.contact.button')}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

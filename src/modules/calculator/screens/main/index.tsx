import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function CalculatorScreen() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleAcquireCertificate = () => {
    navigate('/calculator/steps');
  };

  return (
    <>
      <section className="flex justify-center bg-[url('/assets/bg/ocean-dark.jpg')] bg-cover bg-center p-6 text-center text-white">
        <div className="border-md flex flex-col gap-4 p-2">
          <p className="max-w-96 text-lg">{t('calculator:home_hero')}</p>

          <div>
            <Button size="lg" onClick={handleAcquireCertificate}>
              {t('calculator:home_cta')}
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto my-6 flex max-w-2xl flex-col gap-6">
        <Card className="sm:rounded-xl sm:shadow-xl">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <h2 className="text-lg lg:text-2xl">Transforming waste management</h2>
          </CardHeader>
          <CardContent>
            <p className="text-sm lg:text-base">
              We need to build a world free from waste pollution. We need it for our own sake. For
              nature's sake. We already have over 300 million tons of trash in our environment. 14
              million new tons getting to our oceans every year on average. Today's solutions,
              despite very important, is mostly focused on getting trash out of the oceans and
              rivers and not preventing waste to get to nature.
            </p>
          </CardContent>
        </Card>

        <Card className="sm:rounded-xl sm:shadow-xl">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <h2 className="text-lg lg:text-2xl">Lets&apos;s Clean Together</h2>
          </CardHeader>

          <CardContent>
            <p className="text-sm lg:text-base">
              The Recy certificate represents climate compensation through financially supporting
              actors that conducts recycling, composting and/or other sustainable and circular waste
              treatment activities in different regions of the world.
            </p>
          </CardContent>
        </Card>

        <Card className="sm:rounded-xl sm:shadow-xl">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <h2 className="text-lg lg:text-2xl">About DeTrash</h2>
          </CardHeader>

          <CardContent>
            <p className="text-sm lg:text-base">
              DeTrash is the RECY Network founder and main contributor. DeTrash offers tech based
              solutions to clean our world. DeTrash's vision is that a world without waste pollution
              is not only possible but it's the best alternative to a more equitable and free world.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

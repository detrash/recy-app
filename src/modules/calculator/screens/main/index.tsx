import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function HomeScreen() {
  useTranslation();

  return (
    <>
      <header className="sticky top-0 w-full border-b bg-white p-3">
        <div className="container flex justify-center">
          <img
            src="/public/assets/brand/recy-network-logo.png"
            alt="Recy Network"
            width={120}
            height={120}
          />
        </div>
      </header>

      <section className="bg- bg-[positon: '100%'] ext-white bg- flex justify-center bg-[url('/assets/bg/ocean.jpg')] bg-cover bg-center p-6 text-center text-white">
        <div className="flex flex-col gap-4">
          <p className="max-w-96 text-lg">
            If you don't know you can make an estimate multiplying 1.5 kg per person/employee per
            day which is the global average or get in touch for us to help you know!
          </p>

          <div>
            <Button size="lg">Acquire Recy Certificate</Button>
          </div>
        </div>
      </section>

      <div className="mx-auto my-6 flex max-w-2xl flex-col gap-6">
        <Card className="sm:rounded-xl sm:shadow-xl">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <h2 className="text-lg lg:text-2xl">Transforming waste management</h2>
          </CardHeader>
          <CardContent>
            <p className="text-sm lg:text-base">
              We need to make our world safe from waste pollution. We need it for our own sake. For
              marine life&apos;ss sake and for nature&apos;s sake. We already have 300 million tons
              of trash in our oceans. 14 million new tons getting there every year on average.
              Today&apos;ss solutions, despite very important, is mostly focused on getting trash
              out of the oceans and rivers and not preventing it to get there, not dealing with the
              cause of the problem.
            </p>
          </CardContent>
        </Card>

        <Card className="sm:rounded-xl sm:shadow-xl">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <h2 className="text-lg lg:text-2xl">Lets&apos;s Clean Together</h2>
          </CardHeader>

          <CardContent>
            <p className="text-sm lg:text-base">
              We present you the RECY Network for making our world truly clean (how it works video
              link https://youtu.be/wFLzF6PKKPM). Smart Contracts and DLT are the missing link of
              creating a truly profitable recycling global production chain and thus a circular
              global supply chain. It is through decentralized, transparent and efficient effort
              that we are going to disrupt the waste industry and clean our world (add methodology
              presentation and paper link
              https://drive.google.com/drive/folders/1QESyN8IlyacfpWHDpgmCcoyqqiJXAbSK?usp=sharing).
            </p>
          </CardContent>
        </Card>

        <Card className="sm:rounded-xl sm:shadow-xl">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <h2 className="text-lg lg:text-2xl">About DeTrash</h2>
          </CardHeader>

          <CardContent>
            <p className="text-sm lg:text-base">
              DeTrash is the RECY Notwork founder and key contributor today. DeTrash offers a
              Distributed Ledger-based solution to clean our planet&apos;s oceans and rivers.
              Through tokenization and decentralized efforts, users worldwide participate in
              preventing trash from reaching water bodies, making a global impact. The
              project&apos;s primary objectives are to support resilience, cybersecurity, and
              emergency response in disadvantaged communities while facilitating distributed power
              sharing and promoting sustainable energy solutions.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

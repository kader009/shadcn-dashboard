'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useRef } from 'react';
import login from '@/asset/image/undraw_Login_re_4vu2.png'
import Image from 'next/image';

const LoginPage = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="flex justify-around sm:flex-col items-center gap-4 lg:flex-row">
      <div>
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle>Login Your Self</CardTitle>
            <CardDescription>
              Go For Next Adventure.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Name here" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Email</Label>
                  <Input id="name" placeholder="Email here" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Password</Label>
                  <Input id="name" placeholder="Password here" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Choose Framework</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">Next.js</SelectItem>
                      <SelectItem value="sveltekit">React.js</SelectItem>
                      <SelectItem value="astro">Rust</SelectItem>
                      <SelectItem value="nuxt">Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Login</Button>
          </CardFooter>
        </Card>
      </div>
      <div>
        <Image src={login} alt='image'/>
      </div>
    </div>
  );
};

export default LoginPage;

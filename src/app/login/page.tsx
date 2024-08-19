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
import login from '@/asset/image/undraw_Login_re_4vu2.png';
import Image from 'next/image';

const LoginPage = () => {
  return (
    <div className="flex justify-around sm:flex-col items-center gap-4 lg:flex-row">
      <div>
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle>Login Your Self</CardTitle>
            <CardDescription>Go For Next Adventure.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Name here" required />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Email here" required/>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" placeholder="Password here" required/>
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
                      <SelectItem value="react">Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="submit">
              Cancel
            </Button>
            <Button>Login</Button>
          </CardFooter>
        </Card>
      </div>
      <div>
        <Image src={login} alt="image" priority={true} />
      </div>
    </div>
  );
};

export default LoginPage;
